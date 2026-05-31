import CountryGrid from "@/components/countryCard/CountryGrid";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
 const res = await fetch("https://restcountries.com/v2/all?fields=name,flags,region,population,alpha3Code", {
  headers: {
    "Accept": "application/json",
  },
});

  const data = await res.json();

  const countries = Array.isArray(data) ? data : [];
  console.log("COUNTRIES:", countries);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
         Explore Countries
      </h1>

      <CountryGrid countries={countries.slice(0, 20)} />
    </section>
  );
}