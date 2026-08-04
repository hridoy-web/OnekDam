"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu({ navItems, user }) {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden ">
            <button onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-100/50 p-2 rounded-full"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {
                isOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white/80 backdrop-blur-lg p-4">
                        <nav>
                            {navItems.map(link => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`relative flex flex-col py-2.5 rounded-full text-base font-medium transition-all duration-200 text-center ${isActive ? "text-brand-primary" : "text-slate-700"}`}
                                    >
                                        {link.name}
                                         <span className={`absolute bottom-0 left-0 h-0.5 brand-gradient transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                                    </Link>
                                )
                            }
                            )}
                        </nav>

                        <hr className="mt-4 py-3 border-slate-200" />

                        <div>
                            {
                                user ? (
                                    <span>Dashboard</span>
                                ) : (
                                    <div className="flex flex-row gap-4 items-center justify-center ">
                                        <Link
                                            href="/login"
                                            className="px-8 py-2 font-semibold text-slate-700 border border-slate-200 rounded hover:bg-slate-100/50 transition-all"
                                        >
                                            Login
                                        </Link>
                                        <Link href="/register" className="px-8 py-2 brand-gradient text-white font-semibold rounded shadow-md hover:scale-105 duration-300 cursor-pointer transition-all">Register</Link>
                                    </div>
                                )
                            }



                        </div>
                    </div>
                )
            }
        </div>
    )
}