
import CountrySearch from "@/components/CountrySearch";

export default function SearchPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Search Countries
      </h1>

      <CountrySearch />
    </main>
  );
}