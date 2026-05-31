"use client";
import CountryCardContent from "@/components/countryCard/CountryCardContent";

import { useEffect, useState } from "react";
import FiltersBar from "./FiltersBar";
import CountryCard from "@/components/countryCard/CountryCard";

export default function CountrySearch() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v2/all?fields=name,flags,region,population,alpha3Code");
        const data = await res.json();

        setCountries(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const name = country?.name || "";

    const matchesSearch = name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesRegion =
      region === "all" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  console.log("RESULT COUNT:", filteredCountries.length);
  console.log("FIRST RESULT:", filteredCountries[0]);

  if (loading) {
    return (
      <p className="text-center text-gray-500">
        Loading countries...
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <FiltersBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        region={region}
        setRegion={setRegion}
      />

      {filteredCountries.length === 0 ? (
        <p className="text-center text-gray-500">
          No countries found.
        </p>
      ) : (
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
  {filteredCountries.map((country) => (
    <CountryCard key={country.alpha3Code} code={country.alpha3Code}>
      <CountryCardContent
        flag={country.flags?.png}
        name={country.name}
        region={country.region}
        population={country.population}
      />
    </CountryCard>
  ))}
</div>
      )}
    </div>
  );
}