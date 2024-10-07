interface TeamCardProps {
    name: string;
    role: string;
    image: string;
  }

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center">
      <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="mt-9">
        <h5 className="text-xl font-semibold">{name}</h5>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

