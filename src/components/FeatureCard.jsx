export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100 group-hover:bg-indigo-100">
        {Icon ? <Icon size={20} /> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm leading-6">{desc}</p>
    </div>
  );
}
