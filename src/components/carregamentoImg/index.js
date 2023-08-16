
import React, { useRef, useEffect } from 'react';

const LazyBackgroundImage = ({ src, children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        containerRef.current.style.backgroundImage = `url(${src})`;
        observer.unobserve(containerRef.current);
      }
    });

    observer.observe(containerRef.current);

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src]);

  return <div ref={containerRef}>{children}</div>;
};

export default LazyBackgroundImage;
