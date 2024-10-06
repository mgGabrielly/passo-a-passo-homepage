import { useState } from 'react';
import logoIcon from '../assets/logo-icon.svg';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-background_p fixed top-0 w-full px-14 py-4 flex justify-between items-center border-b border-black_p z-50">
        <div>
          <img src={logoIcon} alt="Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-8 text-black_p">
          <a href="#sobre" className="hover:text-gray-200">Sobre</a>
          <a href="#equipe" className="hover:text-gray-200">Equipe</a>
          <a href="#infraestrutura" className="hover:text-gray-200">Infraestrutura</a>
          <a href="#depoimentos" className="hover:text-gray-200">Depoimentos</a>
          <a href="#contato" className="hover:text-gray-200">Contato</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-black focus:outline-none"
          >
            <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="absolute top-16 left-0 w-full bg-blue_p2 text-white flex flex-col space-y-4 p-4 md:hidden z-50">
            <a href="#sobre" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Sobre</a>
            <a href="#equipe" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Equipe</a>
            <a href="#infraestrutura" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Infraestrutura</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Depoimentos</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Contato</a>
          </nav>
        </>
      )}
    </>
  );
}
