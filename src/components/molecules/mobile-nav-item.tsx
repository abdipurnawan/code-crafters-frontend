import { mobileMenuOpen } from '@/src/recoils/menu-atom';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

interface MobileNavItemProps {
  url: string;
  title: string;
  onClick?: () => void;
}

const MobileNavItem = (props: MobileNavItemProps) => {
  const { url, title, onClick } = props;

  const setIsOpen = useSetRecoilState<boolean>(mobileMenuOpen);

  if (onClick) {
    return (
      <button
        className='w-full py-3 text-center'
        onClick={() => {
          setIsOpen(false);
          onClick();
        }}>
        <span className='block font-medium hover:text-hard-blue uppercase'>{title}</span>
      </button>
    );
  }

  return (
    <Link
      href={url}
      className='w-full py-3 text-center'
      onClick={() => {
        setIsOpen(false);
      }}>
      <span className='block font-medium hover:text-hard-blue'>{title}</span>
    </Link>
  );
};

export default MobileNavItem;
