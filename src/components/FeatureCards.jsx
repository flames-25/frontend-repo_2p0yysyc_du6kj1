import { Users, Rocket, Search } from 'lucide-react';

const brand = {
  primary: '#344e41',
  secondary: '#3a5a40',
  accent: '#588157',
  soft: '#a3b18a',
  paper: '#dad7cd',
};

const features = [
  {
    icon: Users,
    title: 'Find teammates by skills',
    desc: 'Filter by stack, interests, and timezones to assemble the perfect squad.',
  },
  {
    icon: Rocket,
    title: 'Launch projects faster',
    desc: 'Kickstart hackathons and assignments with ready-made team workflows.',
  },
  {
    icon: Search,
    title: 'Discover active teams',
    desc: 'Browse open teams looking for members and request to join in one click.',
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-16 bg-[#0b0f0d] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Why Build Buddy?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="inline-flex items-center justify-center rounded-md p-2" style={{ background: brand.secondary }}>
                <f.icon className="text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
