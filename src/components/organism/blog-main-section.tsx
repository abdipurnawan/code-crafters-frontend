import Image from 'next/image';

const BlogMainSection = () => {
  return (
    <div className='container container-fit p-6'>
      {/* Single Blog */}
      <div className='flex flex-col-reverse md:items-end md:flex-row md:space-x-10'>
        {/* Title and Desc */}
        <div className='mt-4 space-y-2 md:mt-0 md:space-y-5'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl leading-normal'>
            Beberapa cara menggunakan bold typography pada design website
          </h1>
          <p className='font-medium text-[#727272]'>
            Di artikel ini saya membuat daftar hal hal yang bisa digunakan dengan bold typography pada design
            website. Agar bold typography menjadi menarik dan tidak mengganggu visual.
          </p>
        </div>

        {/* Image */}
        <Image
          src='/assets/images/temp/blog1.png'
          width={500}
          height={500}
          style={{
            objectFit: 'contain'
          }}
          sizes='(max-width: 768px) 3000px, 3750px'
          alt='blog-thumbnail'
        />
      </div>
    </div>
  );
};

export default BlogMainSection;
