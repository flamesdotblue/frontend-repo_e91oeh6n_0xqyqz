import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-700 ring-1 ring-inset ring-indigo-200">
          <Sparkles size={16} />
          <span className="text-xs font-medium">A tiny app with a big greeting</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-indigo-700 to-fuchsia-700">
          Hello, World!
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Welcome to your fresh Vite + React + Tailwind setup. This minimal app is ready for you to explore, tweak, and build upon.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
