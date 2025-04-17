import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function SectionCard({ title, description, icon }: SectionCardProps) {
  return (
    <div className="bg-[#DAE2FD43] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon && <div className="text-accent text-3xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
