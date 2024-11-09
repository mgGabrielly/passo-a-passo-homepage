import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { InfrastructureCard } from "../components/infrastructureCard";
import  imageSalaDeAula  from "../assets/sala-de-aula.jpg";
import  imageEspacoConvivencia  from "../assets/espaco-convivencia.jpg";
import  imageSalaProfessores  from "../assets/sala-professores.jpg";
import  logoInstagram  from "../assets/instagram-icon.png";
import  logoWhatsapp  from "../assets/whatsapp-icon.png";
import  logoPassoAPasso  from "../assets/logo-icon.svg";
import { TestimonialCarousel } from "../components/testimonialCarousel";
import { testimonials } from "../data/testimonialsData";
import { positivePoints } from "../data/positivePointsData";
import { Card } from "../components/positiveCard";
import { ImageCarousel } from "../components/imageCarousel";
import { FAQItem } from "../components/questionFaq";
import { faqItems } from "../data/questionsFaqData";
import { teamMembers } from "../data/membersData";
import { TeamCard } from "../components/memberCard";

export function Homepage() {
  return (
    <div className="bg-background_p">
      <Header />
      <main>
        <section>
          <Hero />
        </section>
        
        <section id="sobre" className="mb-[95px] md:mb-[70px] pt-16 px-8 lg:px-36">
          <h2 className="text-2xl font-semibold text-center mb-8">Sobre o Reforço Passo a Passo</h2>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-black_p">
                O <span className="font-bold text-blue_p">Passo a Passo</span> foi criado com a missão de oferecer um aprendizado
                significativo e acolhedor. Nossa história começou logo após a tão sonhada aposentadoria e junto com ela iniciava a pandemia do COVID-19.
              </p>
              <p className="text-black_p"> 
                As mães nos procuravam em busca de acompanhamento pedagógico para as aulas remotas, e nós oferecíamos o suporte necessário para as crianças, ajudando-as a superar os desafios e desenvolver suas habilidades. Desde então, com uma abordagem personalizada, buscamos construir, passo a passo, o conhecimento e a autoestima de nossos alunos.
              </p>
            </div>
            <div className="flex justify-center space-y-4">
              <ImageCarousel />
            </div>
          </div>
        </section>

        <section id="equipe" className="mb-[95px] md:mb-[70px] pt-5">
          <h2 className="text-2xl font-semibold text-center mb-[80px]">Nossa Equipe</h2>
          <div className="max-w-full mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 sm:gap-y-18 md:gap-y-16 lg:gap-y-10 gap-x-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="max-w-80 w-full">
                  <TeamCard 
                    name={member.name} 
                    role={member.role} 
                    image={member.image} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-[95px] md:mb-[70px] pt-5">
          <h2 className="text-2xl font-semibold text-center mb-8 px-4">Por que Escolher o Reforço Passo a Passo?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {positivePoints.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
            ))}
          </div>
        </section>

        <section id="infraestrutura" className="mb-[95px] md:mb-[70px] pt-4">
          <div className="container mx-auto px-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Nossa Infraestrutura</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfrastructureCard
                image={imageSalaDeAula}
                title="3 Salas de Aula"
                description="Espaços equipados e acolhedores, ideais para um aprendizado eficiente."
              />
              <InfrastructureCard
                image={imageEspacoConvivencia}
                title="Espaço de Convivência"
                description="Um local aconchegante para trocas, brincadeiras e aprendizados."
              />
              <InfrastructureCard
                image={imageSalaProfessores}
                title="Sala dos Professores"
                description="Um ambiente inpirador para planejamento e colaboração."
              />
            </div>
          </div>
        </section>

        <section id="depoimentos" className="mb-[95px] md:mb-[70px] pt-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Depoimentos</h2> 
          </div>
          <div className="w-full bg-blue_p">
            <div className="container mx-auto max-w-6xl px-6 py-8">
              <TestimonialCarousel 
                testimonials={testimonials} 
              />
            </div>
          </div>
        </section>

        <section className="mb-[95px] md:mb-[70px] pt-4">
          <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 px-4 md:px-8">
              <h2 className="text-2xl font-bold text-left md:text-left mb-4 text-orange-600">
                FAQ
              </h2>
              <h3 className="text-lg font-semibold text-left md:text-left text-gray-700">
                Perguntas e respostas mais frequentes
              </h3>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="px-4 md:px-8"> 
                {faqItems.map((item, index) => (
                  <FAQItem 
                    key={index} 
                    question={item.question} 
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="mb-[95px] md:mb-[70px] pt-4">
          <div className="mx-8 md:mx-20 border-t border-gray_1 mb-10"></div>
          <div className="container mx-auto text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={logoPassoAPasso}
                alt="Passo a Passo Reforço Escolar"
                className="h-20"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/reforcopassoapasso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                <img
                  src={logoInstagram}  
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="https://wa.me/5581992001823"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
                <img
                  src={logoWhatsapp}  
                  alt="WhatsApp"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
