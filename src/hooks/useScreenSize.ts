import { useEffect, useState } from 'react';

export default function useScreenSize() {
  const [windowSize, setWindowSize] = useState(() => ({
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    screenHeight: typeof window !== 'undefined' ? window.innerHeight : 0
  }));

  useEffect(() => {
    // Function to update the window size
    const handleResize = () => {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    };

    // Add an event listener to update the window size when the window is resized
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
