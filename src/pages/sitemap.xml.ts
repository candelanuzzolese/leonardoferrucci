import { getCollection } from 'astro:content';
const site = 'https://candelanuzzolese.github.io/leonardoferrucci';
export async function GET() {
  const press = await getCollection('press');
  const urls = [
    '',
    '/historia/',
    '/prensa/',
    '/seguridad-digital/',
    ...press.map((item) => `/prensa/${item.id.replace(/\.(md|mdx)$/, '')}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${site}${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
