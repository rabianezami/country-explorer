import CountrySkeletonGrid from "@/components/skeleton/CountrySkeletonGrid";

export default function Loading() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Countries
      </h1>

      <CountrySkeletonGrid count={6} />
    </section>
  );
}