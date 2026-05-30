import GlassCard from "@/components/GlassCard";

export default function AboutPage() {
  return (
    <GlassCard>

      <div className="w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl p-10 md:p-14 space-y-8">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
          About World Explorer
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          World Explorer is a modern Next.js application that lets users explore
          countries from all around the world with real-time data.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              🌍 API Data
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Uses REST Countries API to fetch live country information.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              ⚡ Next.js Features
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Built with App Router, Server Components, Client Components and dynamic routing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              🧠 Learning Goals
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Practicing caching, client components, Server Components and data fetching.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              🎯 Purpose
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Help users explore countries easily with a clean UI.
            </p>
          </div>

        </div>

        {/* Badge */}
        <div className="text-center pt-4">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow-md">
            Built with Next.js + Tailwind CSS
          </span>
        </div>

      </div>
    </GlassCard>
  );
}