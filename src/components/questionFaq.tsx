import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleFAQ}
        className="flex justify-between w-full py-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-700">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
}
