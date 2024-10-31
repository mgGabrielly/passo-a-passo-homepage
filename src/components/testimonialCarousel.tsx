import { useRef, useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  author: string;
  relationship: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const carrosselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        const nextIndex = (activeIndex + 1) % testimonials.length;
        const scrollPos = nextIndex * carrosselRef.current.offsetWidth;
        carrosselRef.current.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
      }
    }, 10000);

    return () => clearInterval(autoPlayInterval);
  }, [activeIndex, testimonials.length]);

  const handleMouseDown = (e: { pageX: number }) => {
    if (!carrosselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carrosselRef.current.offsetLeft);
    setScrollLeft(carrosselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: { pageX: number }) => {
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
      <div className="relative w-full max-w-screen-lg h-auto flex justify-center items-center overflow-hidden">
        <div
          ref={carrosselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`min-w-full h-auto p-6 bg-white rounded-lg shadow-lg snap-center transition-all duration-500 ease-in-out m-4 ${activeIndex === index ? 'block' : 'hidden'}`}
            >
              <p className="text-gray-700 text-lg italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="text-gray-900 font-bold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.relationship}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
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
