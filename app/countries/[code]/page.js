import PageWrapper from "@/components/common/PageWrapper";
import GlassCard from "@/components/common/GlassCard";

// This page fetches fresh data every time.
export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v2/alpha/${code}`,
    { cache: "no-store" }
  );

  const country = await res.json();

  return (
    <PageWrapper>
        <GlassCard>

          {/* Flag */}
          <img
            src={country.flags?.png}
            alt={country.name}
            className="w-48 h-32 object-cover rounded-xl shadow-md border"
          />

          {/* Title */}
          <h1 className="text-4xl font-bold text-center">
            {country.name}
          </h1>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <b>Official Name:</b> {country.nativeName}
            </p>
            <p>
              <b>Capital:</b> {country.capital || "N/A"}
            </p>
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Subregion:</b> {country.subregion || "N/A"}
            </p>
            <p>
              <b>Population:</b> {country.population?.toLocaleString()}
            </p>
            <p>
              <b>Languages:</b>{" "}
              {country.languages
                ? country.languages.map(l => l.name).join(", ")
                : "N/A"}
            </p>
            <p>
              <b>Currencies:</b>{" "}
              {country.currencies
                ? country.currencies.map(c => c.name).join(", ")
                : "N/A"}
            </p>
            <p>
              <b>Timezones:</b> {country.timezones?.join(", ")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">

            <a
              href={country.maps?.googleMaps}
              target="_blank"
              className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View on Google Maps
            </a>

            <a
              href="/countries"
              className="flex-1 text-center bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back to Countries
            </a>

          </div>

        </GlassCard>
    </PageWrapper>
  );
}