import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Countries", href: "/countries" },
    { name: "Search", href: "/search" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800">
      
      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <h1 className="font-bold text-xl md:text-2xl text-indigo-600 dark:text-white">
           World Explorer
        </h1>

        {/* Links */}
        <nav className="flex gap-6 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}