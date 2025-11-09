import Spline from '@splinetool/react-spline';

const brand = {
  primary: '#344e41',
  secondary: '#3a5a40',
  accent: '#588157',
  soft: '#a3b18a',
  paper: '#dad7cd',
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] md:min-h-[78vh] lg:min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-start">
        <span className="inline-flex items-center text-xs font-medium rounded-full px-2.5 py-1.5 bg-white/80 backdrop-blur text-[#0b0f0d]">
          New • Find your perfect project crew
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Team up faster for hackathons and class projects
        </h1>
        <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
          Build Buddy helps students discover teammates by skills, interests, and availability. Create a team or join one in minutes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#create"
            className="px-5 py-3 rounded-md font-semibold text-[#0b0f0d] shadow"
            style={{ background: brand.accent }}
          >
            Create a team
          </a>
          <a
            href="#find"
            className="px-5 py-3 rounded-md font-semibold border border-white/30 text-white hover:bg-white/10"
          >
            Find teammates
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0b0f0d]" />
    </section>
  );
}
