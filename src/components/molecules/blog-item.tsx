import { BlogModel } from '@/src/models/blog-model';
import Image from 'next/image';
import Link from 'next/link';

interface BlogItemProps {
  blog: BlogModel;
}

const BlogItem = (props: BlogItemProps) => {
  const { blog } = props;

  return (
    <Link href={`/blogs/${blog.id}`} className='cursor-pointer'>
      <Image
        width={500}
        height={500}
        className='w-full'
        src='/assets/images/temp/blog2.png'
        alt='blog-thumbnail'
      />
      <p className='text-[#828282] font-light text-sm mt-4 md:text-base'>{blog.date}</p>
      <h1 className='font-bold py-2 text-lg md:text-xl'>{blog.title}</h1>
      <p className='text-[#6C6C6C] tracking-wide text-sm'>{blog.content}</p>
    </Link>
  );
};

export default BlogItem;
