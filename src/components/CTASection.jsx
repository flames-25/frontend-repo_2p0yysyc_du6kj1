const brand = {
  primary: '#344e41',
  secondary: '#3a5a40',
  accent: '#588157',
  soft: '#a3b18a',
  paper: '#dad7cd',
};

export default function CTASection() {
  return (
    <section className="py-16 bg-[#0b0f0d] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 md:p-10 border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(52,78,65,0.8), rgba(58,90,64,0.8))' }}>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to meet your next teammate?</h3>
          <p className="mt-2 text-white/85 max-w-2xl">Create a post describing your team or browse active openings. It’s fast, friendly, and built for students.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#create" className="px-5 py-3 rounded-md font-semibold text-[#0b0f0d]" style={{ background: brand.accent }}>Create team</a>
            <a href="#find" className="px-5 py-3 rounded-md font-semibold border border-white/30">Find teammates</a>
          </div>
        </div>
      </div>
    </section>
  );
}
