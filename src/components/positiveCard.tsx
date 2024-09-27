interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="p-6"> {/* Remove shadow and border */}
      <div className="flex items-start space-x-4">
        <img src={icon} alt={title} className="w-12 h-12" />
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
