import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const brand = {
  primary: '#344e41',
  secondary: '#3a5a40',
  accent: '#588157',
  soft: '#a3b18a',
  paper: '#dad7cd',
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[#344e41]/80 text-white">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md" style={{ background: brand.accent }} />
            <span className="font-semibold tracking-tight text-lg">Build Buddy</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-[#a3b18a] transition-colors">Features</a>
            <a href="#how" className="hover:text-[#a3b18a] transition-colors">How it works</a>
            <div className="h-6 w-px bg-white/20" />
            <a href="#login" className="text-sm px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 transition">Login</a>
            <a
              href="#signup"
              className="text-sm px-3 py-1.5 rounded-md"
              style={{ background: brand.accent }}
            >
              Sign up
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-white/10">Features</a>
            <a href="#how" className="block px-2 py-2 rounded hover:bg-white/10">How it works</a>
            <div className="h-px bg-white/10" />
            <div className="flex gap-3">
              <a href="#login" className="flex-1 text-center px-3 py-2 rounded-md border border-white/20">Login</a>
              <a
                href="#signup"
                className="flex-1 text-center px-3 py-2 rounded-md text-[#0b0f0d]"
                style={{ background: brand.accent }}
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
