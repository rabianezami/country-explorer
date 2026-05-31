export default function CountrySkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse">

      {/* Flag */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5 space-y-3">

        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Button */}
        <div className="pt-2">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>

      </div>
    </div>
  );
}