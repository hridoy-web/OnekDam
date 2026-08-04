import Link from "next/link";
import Logo from "../ui/Logo";
import NavLinks from "./navbarComponents/NavLinks";

export default function Navbar() {

    return (
        <header className="w-full backdrop-blur-md bg-white/50 border-b border-slate-200/60 transition-all">

            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between h-20 ">

                <Logo />

                <NavLinks />

                <div className="flex gap-4 items-center">
                    <Link
                        href="/login"
                        className="px-4 py-2 font-semibold text-slate-700 border border-slate-200 rounded hover:bg-slate-100/50 transition-all"
                    >
                        Login
                    </Link>
                    <Link href="/register" className="px-4 py-2 brand-gradient text-white font-semibold rounded shadow-md hover:scale-105 duration-300 cursor-pointer transition-all">Register</Link>
                </div>

            </div>

        </header>
    )
}