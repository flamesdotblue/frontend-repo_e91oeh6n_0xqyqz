import { Globe, Rocket, Star } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const items = [
    {
      icon: Rocket,
      title: 'Fast Start',
      desc: 'Vite-powered dev server for instant feedback and smooth DX.',
    },
    {
      icon: Globe,
      title: 'Modern Stack',
      desc: 'React + Tailwind for clean components and expressive styling.',
    },
    {
      icon: Star,
      title: 'Ready to Extend',
      desc: 'A clear structure that makes it easy to add new pages and features.',
    },
  ];

  return (
    <section id="features" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why you’ll love this starter</h2>
          <p className="mt-2 text-slate-600">A simple foundation that looks great and feels fast.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
