import Image from 'next/image';

interface TestimonyItemProps {
  name: string;
  testimony: string;
}

const TestimonyItem = (props: TestimonyItemProps) => {
  const { name, testimony } = props;
  return (
    <div className='flex flex-col space-y-4 mr-3'>
      <div className='bg-white rounded-xl p-6 relative'>
        <p className='text-sm'>{testimony}</p>
        <div className='absolute left-6 -bottom-1'>
          <div className='w-8 h-8 bg-white transform rotate-45 origin-bottom rounded-lg'></div>
        </div>
      </div>

      <div className='flex items-center space-x-3'>
        <div className='p-1 bg-[#C5ECFD] rounded-full'>
          <Image src='/assets/images/memoji.png' className='h-9' width={36} height={36} alt='testimony-user' />
        </div>
        <h4 className='font-bold text-dark-blue'>{name}</h4>
      </div>
    </div>
  );
};

export default TestimonyItem;
