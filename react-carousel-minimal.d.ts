// react-caroussel-minimal.d.ts
import React from 'react'

declare module 'react-caroussel-minimal' {
    interface CarouselProps {
      images: string[];
      autoplay?: boolean;
      speed?: number;
    }
  
    const Carousel: React.FC<CarouselProps>;
  
    export default Carousel;
  }
  