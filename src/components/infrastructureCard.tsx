interface InfrastructureCardProps {
  image: string;
  title: string;
  description: string;
}

export function InfrastructureCard({ image, title, description }: InfrastructureCardProps) {
  return (
    <div className="bg-blue_p rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
      <div className="bg-gradient-to-r from-purple-400 h-48 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white text-center mb-2">{title}</h3>
        <p className="text-white text-center">{description}</p>
      </div>
    </div>
  );
}

