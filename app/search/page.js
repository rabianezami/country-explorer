
import CountrySearch from "@/components/countrySearch/CountrySearch";

export default function SearchPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Search Countries
        </h1>

        <p className="text-gray-600 dark:text-gray-300">
          Search for any country and explore its details.
        </p>
      </section>

      <CountrySearch />
    </main>
  );
}