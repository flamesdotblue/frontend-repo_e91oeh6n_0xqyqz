export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-600">© {year} Hello World. All rights reserved.</p>
        <div className="text-xs text-slate-500">
          Built with Vite, React, and Tailwind.
        </div>
      </div>
    </footer>
  );
}
