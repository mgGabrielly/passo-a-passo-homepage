// import { useState } from "react";

// interface Testimonial {
//   text: string;
//   author: string;
//   relationship: string;
// }

// interface TestimonialCarouselProps {
//   testimonials: Testimonial[];
// }

// export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleIndicatorClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full overflow-hidden p-6 bg-blue-800">
//       {/* Botões de navegação */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 rounded-full shadow-md z-10"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 rounded-full shadow-md z-10"
//       >
//         &#8250;
//       </button>

//       {/* Carrossel */}
//       <div className="relative w-full flex justify-center items-center">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(calc(-${currentIndex * (100 / 3)}%))`, // Move the cards
//             width: "calc(100% * 3)", // 3x width for smoother scroll effect
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`flex-shrink-0 w-[300px] h-[200px] mx-2 bg-white p-6 shadow-md transition-transform duration-500 ease-in-out ${
//                 currentIndex === index
//                   ? "transform scale-105 opacity-100"
//                   : "transform scale-95 opacity-75"
//               }`}
//               style={{
//                 flex: "0 0 33%", // Ensures 33% width for each item
//               }}
//             >
//               <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
//               <p className="text-gray-800 font-bold">{testimonial.author}</p>
//               <p className="text-gray-500 text-sm">{testimonial.relationship}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Indicadores */}
//       <div className="mt-4 flex justify-center space-x-2">
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             className={`h-2 w-2 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  relationship: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-blue_p p-6"> {/* Fundo azul ocupando 100% da largura */}
      <div className="relative max-w-6xl mx-auto overflow-hidden"> {/* Container centralizado */}
        {/* Botões de navegação */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue_p p-2 rounded-full shadow-md z-10"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 rounded-full shadow-md z-10"
        >
          &#8250;
        </button>

        {/* Carrossel */}
        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 33.33}%))`, // Move cards centralizando
              width: "calc(100% * 3)", // Largura do carrossel para smooth scrolling
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[33.33%] h-[300px] mx-4 bg-white p-8 shadow-md rounded-lg transition-transform duration-500 ease-in-out ${
                  currentIndex === index
                    ? "transform scale-105 opacity-100" // Destaque do card selecionado
                    : "transform scale-95 opacity-50"
                }`}
                style={{
                  flex: "0 0 33.33%", // Cards com tamanho de 33.33% para alinhar três itens
                }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="text-gray-800 font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.relationship}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="mt-4 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
