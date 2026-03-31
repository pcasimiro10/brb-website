import { NextResponse, type NextRequest } from "next/server";

const BOT_UA_RE =
  /(Twitterbot|facebookexternalhit|Facebot|LinkedInBot|Slackbot|Discordbot|TelegramBot|WhatsApp|Google-InspectionTool|Googlebot|bingbot|DuckDuckBot|YandexBot|Applebot)/i;

function isHtmlRequest(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";
  return accept.includes("text/html") || accept.includes("*/*");
}

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const url = req.nextUrl;

  // Only rewrite normal page requests. Avoid assets, Next internals, and our own fallback route.
  if (!isHtmlRequest(req)) return NextResponse.next();
  if (url.pathname.startsWith("/_next")) return NextResponse.next();
  if (url.pathname.startsWith("/api")) return NextResponse.next();
  if (url.pathname.startsWith("/__social")) return NextResponse.next();
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return NextResponse.next();

  if (BOT_UA_RE.test(ua)) {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = "/__social";
    // Preserve the original path for debugging/future expansion.
    rewriteUrl.searchParams.set("path", url.pathname);
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

