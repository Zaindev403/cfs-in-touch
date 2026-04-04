export const InfoCard = ({ icon, title, description, color, type, isHigh }: any) => (
  <div className={`p-8 rounded-xl border border-outline-variant/10 group transition-all duration-300 ${isHigh ? 'bg-surface-container-high' : 'bg-surface-container'}`}>
    {type === "chaos" && (
      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform">
        <span className="material-symbols-outlined text-[160px] fill-1!">terminal</span>
      </div>
    )}
    <span className={`material-symbols-outlined ${color} mb-4 text-4xl`}>{icon}</span>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed mb-4">{description}</p>
    {type === "chaos" && (
      <div className="bg-surface-container-lowest font-mono text-xs p-4 rounded border border-outline-variant/20 space-y-1">
        <p className="text-zinc-500">📄 final_v1.zip</p>
        <p className="text-error">📄 final_v2_REAL_FINAL_v2.zip</p>
      </div>
    )}
  </div>
);