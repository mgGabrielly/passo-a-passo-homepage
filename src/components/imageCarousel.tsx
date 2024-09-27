/* eslint-disable @typescript-eslint/no-unused-vars */
import image1 from "../assets/espaco-convivencia.png";
import image2 from "../assets/sala-de-aula.png";
import image3 from "../assets/sala-professores.png";
import { useRef, useState, useEffect } from 'react';

export const ImageCarousel = () => {
  const carrosselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);  
  const [startX, setStartX] = useState(0); 
  const [scrollLeft, setScrollLeft] = useState(0);  
  const images = [image1, image2, image3];

  const updateActiveIndex = () => {
    if (carrosselRef.current) {
      const { scrollLeft, offsetWidth } = carrosselRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (carrosselRef.current) {
        const nextIndex = (activeIndex + 1) % images.length;
        const scrollPos = nextIndex * carrosselRef.current.offsetWidth;
        carrosselRef.current.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
      }
    }, 3000); 

    return () => clearInterval(autoPlayInterval); 
  }, [activeIndex]);

  const handleMouseDown = (e: { pageX: number; }) => {
    if (!carrosselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carrosselRef.current.offsetLeft);
    setScrollLeft(carrosselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: { pageX: number; }) => {
    if (!isDragging || !carrosselRef.current) return;
    const x = e.pageX - carrosselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carrosselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[320px] h-[300px] flex justify-center items-center overflow-hidden">
        <div
          ref={carrosselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            paddingLeft: '40px',
            paddingRight: '40px',
            scrollSnapType: 'x mandatory',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onWheel={(e) => {
            e.preventDefault();
            if (carrosselRef.current) {
              carrosselRef.current.scrollLeft += e.deltaY * 0.5;
            }
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-[300px] h-[300px] rounded-lg object-cover snap-center"
              style={{
                marginLeft: index === 0 ? '10px' : '10px',
                marginRight: index === images.length - 1 ? '10px' : '10px',
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              activeIndex === index ? 'bg-red_p' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
