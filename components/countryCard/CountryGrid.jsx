import CountryCard from "./CountryCard";
import CountryCardContent from "./CountryCardContent";

export default function CountryGrid({ countries }) {
  if (!countries?.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((c) => (
        <CountryCard
           key={c.alpha3Code}
           code={c.alpha3Code}
        >
          <CountryCardContent
            flag={c.flags?.png}
            name={c.name}
            region={c.region}
            population={c.population}
          />
        </CountryCard>
      ))}
    </div>
  );
}