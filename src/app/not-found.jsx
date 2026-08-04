import { Search } from "lucide-react";
import Link from "next/link";


export default function NotFoundPage() {

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">

            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-9xl font-extrabold brand-text-gradient">404</h2>
                <h3 className="text-2xl text-slate-700 flex gap-2 items-center"><Search /> Page Not Found</h3>
                <p className="text-slate-400 max-w-90">The page you are looking for might have been removed or the link is incorrect.</p>
                <Link
                    href="/"
                    className="px-8 py-2.5 bg-brand-secondary text-white rounded-full text-base font-medium"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
}