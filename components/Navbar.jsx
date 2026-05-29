import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Countries", href: "/countries" },
        { name: "Search", href: "/search" },
        { name: "About", href: "/about" },
    ]
    return (
        <header className="flex items-center justify-between bg-indigo-500 p-4"> 
           <h1 className="font-bold text-white text-3xl pl-10">Country Explorer</h1>

           <nav>
             {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:underline mx-2">
                  {link.name}
                </Link>
             ))}
           </nav>
        </header>
    )
}