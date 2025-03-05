import { useRef, useEffect } from 'react';
import { Rive } from '@rive-app/canvas';

const RiveAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    const rive = new Rive({
      src: '/asset/rive/moon.riv', 
      canvas: containerRef.current, 
      autoplay: true,                
    });

    return () => {
      rive.cleanup();
    };
  }, []);

  return <canvas ref={containerRef} style={{ width: '100%', height: 'auto', objectFit:'cover' }} />;
};

export default RiveAnimation;
