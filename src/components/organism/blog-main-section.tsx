/* eslint-disable @next/next/no-img-element */
import App from '@/src/configs/app';
import { lastestBlogDataState } from '@/src/recoils/lastest-blog-atom';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const BlogMainSection = () => {
  const lastestBlog = useRecoilValue(lastestBlogDataState);

  // img loader
  const myLoader: ImageLoader = () => {
    const thumbnail = lastestBlog?.thumbnail;
    if (thumbnail) {
      const { id, file_name } = thumbnail;
      return `${App.API_BASE_URL}storage/${id}/${file_name}`;
    }
    return '';
  };

  return (
    <div className='container container-fit p-6'>
      <Link href={`/blogs/${lastestBlog.slug}`}>
        {/* Single Blog */}
        <div className='flex flex-col-reverse md:items-end md:justify-between md:flex-row md:space-x-10 cursor-pointer'>
          {/* Title and Desc */}
          <div className='mt-4 space-y-2 md:mt-0 md:space-y-5 md:mb-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl leading-normal'>{lastestBlog?.title}</h1>
            <div
              className='font-medium text-[#727272]'
              dangerouslySetInnerHTML={{ __html: lastestBlog?.content }}
            />
          </div>

          {/* Image */}
          <div className='aspect-video md:w-[45%]'>
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
