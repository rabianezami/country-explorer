export default function CountryCardContent({
  flag,
  name,
  capital,
  region,
  population,
}) {
  return (
    <div className="p-5 space-y-3 text-center">
      <img
        src={flag}
        alt={name}
        className="w-full h-32 object-cover rounded-md"
      />

      <h2 className="text-lg font-bold">{name}</h2>

      <p className="text-sm text-gray-600">
        Capital: {capital || "No capital"}
      </p>

      <p className="text-sm text-gray-600">
        Region: {region}
      </p>

      <p className="text-sm text-gray-600">
        Population: {population?.toLocaleString()}
      </p>

      <span className="text-indigo-600 text-sm font-medium">
        View Details →
      </span>
    </div>
  );
}