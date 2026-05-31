export default function PageWrapper({ children }) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-black dark:via-black dark:to-gray-900"
    >
      {children}
    </main>
  );
}