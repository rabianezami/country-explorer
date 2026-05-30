import GlassCard from "@/components/GlassCard";
import FeatureCard from "@/components/FeatureCard";
import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <GlassCard>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
          About World Explorer
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
           World Explorer is a Next.js project that uses real API 
           data to display countries around the world. It practices
           App Router, file-based routing, layouts, server components, client components, data fetching, caching, and dynamic routes.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <FeatureCard
            title="🌍 API Data"
            description="Uses REST Countries API to fetch live country information."
          />

          <FeatureCard
            title="⚡ Next.js Features"
            description="Built with App Router, Server Components, Client Components and dynamic routing."
          />

          <FeatureCard
            title="🧠 Learning Goals"
            description="Practicing caching, client components, Server Components and data fetching."
          />

          <FeatureCard
            title="🎯 Purpose"
            description="Help users explore countries easily with a clean UI."
          />

        </div>

        {/* Badge */}
        <div className="text-center pt-4">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow-md">
            Built with Next.js + Tailwind CSS
          </span>
        </div>

      </GlassCard>
    </PageWrapper>
  );
}