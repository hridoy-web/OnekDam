"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ navItems }) {
    const pathname = usePathname()

    return (
        <nav className="hidden md:flex gap-6 items-center">
            {navItems.map(link => {
                const isActive = pathname === link.href;
                return (
                    <Link key={link.href}
                        href={link.href}
                        className={`relative duration-200 group font-medium ${isActive ? "text-brand-secondary font-semibold" : "text-slate-600"}`}
                    >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 brand-gradient transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                )
            }
            )}
        </nav>
    )
}