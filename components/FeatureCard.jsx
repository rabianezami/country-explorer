export default function FeatureCard({ title, description }) {
    return (
        <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
               {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
               {description}
            </p>
        </div>
    )
}
