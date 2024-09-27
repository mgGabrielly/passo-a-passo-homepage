import imageBackground from '../assets/image-hero.jpg';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        alt=""
        src={imageBackground}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 bg-blue_p2 opacity-65 -z-10" /> 
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"> 
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white_p sm:text-6xl">Construindo</h2>
          <h2 className="text-3xl font-bold tracking-tight text-yellow_p sm:text-6xl">Passo a Passo</h2>
          <h2 className="text-3xl font-bold tracking-tight text-white_p sm:text-6xl">o conhecimento do</h2>
          <h2 className="text-3xl font-bold tracking-tight text-yellow_p sm:text-6xl">Seu Filho!</h2>
        </div>
      </div>
    </div>
  );
}
  