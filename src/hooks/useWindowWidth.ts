import { useState, useEffect } from 'react';

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(
    document.body.clientWidth
  );

  function updateWindowWidth() {
    setWindowWidth(document.body.clientWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return windowWidth;
}
