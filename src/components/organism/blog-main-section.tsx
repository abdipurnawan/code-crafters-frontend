/* eslint-disable @next/next/no-img-element */
import App from '@/src/configs/app';
import { useHtmlTrim } from '@/src/hooks/useHtmlTrim';
import useScreenSize from '@/src/hooks/useScreenSize';
import { BlogModel } from '@/src/models/blog-model';
import { lastestBlogDataState } from '@/src/recoils/lastest-blog-atom';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

interface BlogMainSectionProps {
  lastestBlog: BlogModel;
}

const BlogMainSection = ({ lastestBlog }: BlogMainSectionProps) => {
  // const lastestBlog = useRecoilValue(lastestBlogDataState);
  const { screenWidth } = useScreenSize();

  let maxTitleLength = 75;
  if (screenWidth >= 768) {
    maxTitleLength = 150;
  }

  if (screenWidth >= 1024) {
    maxTitleLength = 200;
  }

  if (screenWidth >= 1280) {
    maxTitleLength = 300;
  }

  if (screenWidth >= 1536) {
    maxTitleLength = 400;
  }

  // blog content
  const blogContent = useHtmlTrim((lastestBlog?.content as string) ?? '', maxTitleLength);

  return (
    <div className='container container-fit p-6'>
      <Link href={`/blogs/${lastestBlog.slug}`}>
        {/* Single Blog */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 cursor-pointer'>
          {/* Image */}
          <div className='aspect-video w-full md:order-last'>
            <img
              className='object-cover w-full h-full md:rounded-3xl'
              src={
                lastestBlog?.thumbnail?.file_name
                  ? `${App.API_BASE_URL}storage/${lastestBlog?.thumbnail?.id}/${lastestBlog?.thumbnail?.file_name}`
                  : '/assets/images/temp/blog2.png'
              }
              alt='blog-thumbnail'
            />
          </div>

          {/* Title and Desc */}
          <div className='lg:col-span-2 mt-4 space-y-2 md:mt-0  md:mb-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl leading-normal'>{lastestBlog?.title}</h1>
            <div className='font-medium text-[#727272]' dangerouslySetInnerHTML={{ __html: blogContent }} />
          </div>

          {/* <div className='max-w-1/2 relative' style={{ paddingBottom: '56.25%' }}>
            <img
              className='absolute inset-0 object-cover w-full h-full md:rounded-3xl'
              src={
                lastestBlog?.thumbnail?.file_name
                  ? `${App.API_BASE_URL}storage/${lastestBlog?.thumbnail?.id}/${lastestBlog?.thumbnail?.file_name}`
                  : '/assets/images/temp/blog2.png'
              }
              alt='blog-thumbnail'
            />
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default BlogMainSection;
