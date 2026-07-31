export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://candelanuzzolese.github.io/leonardoferrucci/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
