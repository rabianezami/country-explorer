import Link from "next/link";

export default function CountryCard({ children, code }) {
  return (
    <Link
      href={`/countries/${code}`}
      className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
    >
      {children}
    </Link>
  );
}