
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function NavBar(){
    return(
        <nav className=" w-full relative flex items-start justify-between max-w-2xl mx-auto px-4  py-5">
            <Link href = "/" className="font-bold text-3xl">
            Dulneth<span className="text-primary">Dev</span>
            </Link>

            <ModeToggle/>
          
        </nav>
       
    );
}

