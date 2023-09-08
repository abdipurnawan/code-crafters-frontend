import { BlogModel } from '@/src/models/blog-model';
import BlogRepository from '@/src/repositories/blog-repository';
import { GetServerSidePropsContext } from 'next';

function generateSiteMap(blogs: BlogModel[]) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://codecrafters.id</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
      <loc>https://codecrafters.id/blogs</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     ${blogs
       .map((item) => {
         return `
       <url>
           <loc>${`${BASE_URL}blogs/${item.slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const blogRepository = new BlogRepository();
  const blogsData = await blogRepository.getBlogs({});

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogsData.data!);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
