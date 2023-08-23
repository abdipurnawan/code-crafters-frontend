import Image from 'next/image';

const BlogDetailPage = () => {
  return (
    <div className='container container-fit md:mb-10'>
      <div className='space-y-5 md:space-y-10 px-0 md:px-12 lg:px-24'>
        {/* Blog Title */}
        <h1 className='font-bold text-xl md:text-2xl lg:4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores sunt nobis praesentium,
          commodi maiores.
        </h1>

        {/* Blog Author & Date */}
        <div className='flex items-center gap-5'>
          <div className='flex items-center space-x-3'>
            <div className='p-1 bg-[#C5ECFD] rounded-full'>
              <Image src='/assets/images/memoji.png' className='h-9' width={36} height={36} alt='testimony-user' />
            </div>
            <h4 className='font-bold text-dark-blue'>Anang</h4>
          </div>
          <div className='flex items-center space-x-1'>
            <svg className='h-5 w-5 text-[#828282]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 2V6M8 2V6M3 10h18M3 14h18M3 18h18'
              />
            </svg>
            <p className='align-middle text-[#828282] font-light text-sm md:text-base'>08 May 2022</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className='flex flex-col gap-5 md:gap-10'>
          {/* Image */}
          <div className='flex justify-center'>
            <Image
              src='/assets/images/temp/blog2.png'
              // layout='fill'
              width={500}
              height={500}
              className='rounded-xl w-full md:w-2/3'
              alt='blog-image'
            />
          </div>

          {/* Content */}
          <div className='space-y-5'>
            <p className='tracking-wide text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius incidunt hic magni obcaecati
              aperiam non reprehenderit facilis fuga itaque eligendi officiis dolorem provident consequuntur
              suscipit numquam reiciendis, et laudantium sunt earum molestias ratione unde. Officia incidunt velit
              dolore eius numquam consequatur! Consectetur fugiat tempore enim omnis nesciunt minima, distinctio
              atque autem voluptates suscipit? Perferendis voluptatem, assumenda placeat quia, sit vitae porro fuga
              asperiores modi, quidem sed! Consectetur nesciunt facilis sunt. Impedit tempora, nostrum excepturi
              laudantium fugiat temporibus? Ad, molestiae ducimus quia dolor ut eius voluptas nulla maxime
              assumenda reiciendis corrupti ratione aliquam sapiente ab necessitatibus! Officiis animi explicabo
              error.
            </p>
            <p className='tracking-wide text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius incidunt hic magni obcaecati
              aperiam non reprehenderit facilis fuga itaque eligendi officiis dolorem provident consequuntur
              suscipit numquam reiciendis, et laudantium sunt earum molestias ratione unde. Officia incidunt velit
              dolore eius numquam consequatur! Consectetur fugiat tempore enim omnis nesciunt minima, distinctio
              atque autem voluptates suscipit? Perferendis voluptatem, assumenda placeat quia, sit vitae porro fuga
              asperiores modi, quidem sed! Consectetur nesciunt facilis sunt. Impedit tempora, nostrum excepturi
              laudantium fugiat temporibus? Ad, molestiae ducimus quia dolor ut eius voluptas nulla maxime
              assumenda reiciendis corrupti ratione aliquam sapiente ab necessitatibus! Officiis animi explicabo
              error.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
