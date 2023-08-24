import App from '@/src/configs/app';
import { BlogModel } from '@/src/models/blog-model';
import moment from 'moment';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';

interface BlogItemProps {
  blog: BlogModel;
}

const BlogItem = (props: BlogItemProps) => {
  const { blog } = props;

  const myLoader: ImageLoader = () => {
    const thumbnail = blog?.thumbnail;
    if (thumbnail) {
      const { id, file_name } = thumbnail;
      return `${App.API_BASE_URL}storage/${id}/${file_name}`;
    }
    return '';
  };

  return (
    <Link href={`/blogs/${blog.id}`} className='cursor-pointer'>
      <div className='relative w-full pb-[56.25%]'>
        <Image
          loader={myLoader}
          src={
            blog?.thumbnail?.file_name
              ? `${App.API_BASE_URL}storage/${blog?.thumbnail?.id}/${blog?.thumbnail?.file_name}`
              : '/assets/images/temp/blog2.png'
          }
          layout='fill'
          objectFit='cover'
          sizes='(max-width: 768px) 3000px, 5750px'
          alt='blog-thumbnail'
        />
      </div>
      <p className='text-[#828282] font-light text-sm mt-4 md:text-base'>
        {moment(blog.published_at).format('DD MMM YYYY')}
      </p>
      <h1 className='font-bold py-2 text-lg md:text-xl'>{blog.title}</h1>
      <div className='text-[#6C6C6C] tracking-wide text-sm' dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </Link>
  );
};

export default BlogItem;
