const SITE_URL = "https://berightbackapp.com";
const TITLE = "brb: Walk to Unlock Apps | Block Apps Until You Hit Your Step Goal";
const DESCRIPTION =
  "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.";
const IMAGE_URL = `${SITE_URL}/og-image.png`;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const path = url.searchParams.get("path") ?? "/";

  // Intentionally keep this HTML extremely small and standards-forward.
  // Some validators fail on React/Next-generated head markup.
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(TITLE)}</title>
    <meta name="description" content="${escapeHtml(DESCRIPTION)}">

    <meta property="og:title" content="${escapeHtml(TITLE)}">
    <meta property="og:description" content="${escapeHtml(DESCRIPTION)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${SITE_URL}${escapeAttr(path)}">
    <meta property="og:site_name" content="brb">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="brb – walk to unlock your apps. No steps = no doomscrolling.">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@berightbackapp">
    <meta name="twitter:creator" content="@pat_caz">
    <meta name="twitter:title" content="${escapeHtml(TITLE)}">
    <meta name="twitter:description" content="${escapeHtml(DESCRIPTION)}">
    <meta name="twitter:image" content="${IMAGE_URL}">
  </head>
  <body>
    <p>Redirecting…</p>
  </body>
</html>
`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      // Avoid caching crawler HTML; we want crawlers to re-fetch on demand.
      "cache-control": "no-store",
    },
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(input: string) {
  // Extremely conservative for attribute contexts; keep it URL-ish.
  return encodeURI(input).replaceAll('"', "%22");
}

