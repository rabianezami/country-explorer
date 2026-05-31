
// This page fetches fresh data every time.
export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v2/alpha/${code}`,
    { cache: "no-store" }
  );

  const country = await res.json();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">

      {/* Flag */}
      <img
        src={country.flags?.png}
        alt={country.name}
        className="w-full rounded-lg shadow"
      />

      {/* Name */}
      <h1 className="text-4xl font-bold">
        {country.name}
      </h1>

      {/* Official Name */}
      <p>
        <b>Official Name:</b> {country.nativeName}
      </p>

      {/* Capital */}
      <p>
        <b>Capital:</b> {country.capital || "N/A"}
      </p>

      {/* Region */}
      <p>
        <b>Region:</b> {country.region}
      </p>

      {/* Subregion */}
      <p>
        <b>Subregion:</b> {country.subregion || "N/A"}
      </p>

      {/* Population */}
      <p>
        <b>Population:</b> {country.population?.toLocaleString()}
      </p>

      {/* Languages */}
      <p>
        <b>Languages:</b>{" "}
        {country.languages
          ? country.languages.map(l => l.name).join(", ")
          : "N/A"}
      </p>

      {/* Currencies */}
      <p>
        <b>Currencies:</b>{" "}
        {country.currencies
          ? country.currencies.map(c => c.name).join(", ")
          : "N/A"}
      </p>

      {/* Timezones */}
      <p>
        <b>Timezones:</b> {country.timezones?.join(", ")}
      </p>

      {/* Google Maps */}
      <a
        href={country.maps?.googleMaps}
        target="_blank"
        className="text-blue-600 underline"
      >
        View on Google Maps
      </a>

      {/* Back Button */}
      <div className="pt-6">
        <a
          href="/countries"
          className="inline-block bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          ← Back to Countries
        </a>
      </div>

    </main>
  );
}