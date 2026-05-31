"use client";

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
        const res = await fetch("https://restcountries.com/v3.1/all");
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
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      region === "all" || country.region === region;

    return matchesSearch && matchesRegion;
  });

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
}