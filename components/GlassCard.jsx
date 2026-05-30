export default function GlassCard({ children }) {
  return (
    <div className="w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl p-10 md:p-14 space-y-8">
      {children}
    </div>
  );
}