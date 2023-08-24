import { useState } from 'react';
import BlogItem from '../molecules/blog-item';
import FilterItem from '../molecules/filter-item';
import { Pagination } from '../molecules/pagination';
import { useRecoilValue } from 'recoil';
import { tagsDataState } from '@/src/recoils/tag-atom';
import { blogListDataState } from '@/src/recoils/blog-list-atom';

const BlogListSection = () => {
  const [activeFilter, setActiveFilter] = useState<number | string | undefined>('');
  const tags = useRecoilValue(tagsDataState);
  const blogs = useRecoilValue(blogListDataState);

  return (
    <section id='blog-list'>
      {/* Blog Filter Section */}
      <div className='container container-fit -mb-6'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-5'>
            <FilterItem id='' title='All' activeFilter={activeFilter} onClick={() => setActiveFilter('')} />
            {tags?.map((item) => (
              <FilterItem
                key={item.id}
                id={item.id}
                title={item.name}
                activeFilter={activeFilter}
                onClick={() => setActiveFilter(item.id)}
              />
            ))}
          </div>

          {/* Search */}
          <div className='relative flex flex-initial w-64 items-center'>
            <input className='px-5 py-3 w-full rounded-full' placeholder='Search' />
            <span className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              {/* Insert your search icon here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 stroke-current text-gray-500'
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='9' cy='9' r='6' />
                <line x1='19' y1='19' x2='14.5' y2='14.5' />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className='container container-fit p-6'>
        <div className='bg-white p-6 rounded-3xl grid grid-cols-1 gap-16 md:grid-cols-2 md:p-8 lg:grid-cols-3 lg:p-14'>
          {blogs?.data?.map((blog, index) => (
            <BlogItem key={index} blog={blog} />
          ))}
        </div>
      </div>

      {/* Blog Pagination Section */}
      <div className='container container-fit px-6 -mt-6 flex justify-end'>
        <Pagination
          links={[
            {
              label: 'Previous',
              url: '#',
              active: false
            },
            {
              label: '1',
              url: '#',
              active: true
            },
            {
              label: '2',
              url: '#',
              active: false
            },
            {
              label: '3',
              url: '#',
              active: false
            },
            {
              label: '4',
              url: '#',
              active: false
            },
            {
              label: '5',
              url: '#',
              active: false
            },
            {
              label: 'Next',
              url: '#',
              active: false
            }
          ]}
        />
      </div>
    </section>
  );
};

export default BlogListSection;
