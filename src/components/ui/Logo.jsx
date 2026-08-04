import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex gap-2 items-center">

            <div className="w-9 h-9 flex rounded-xl brand-gradient items-center justify-center text-white">
                <ShoppingBag size={20} />
            </div>

            <span className="text-2xl font-extrabold brand-text-gradient">
                OnekDam
            </span>

        </Link>
    )
}