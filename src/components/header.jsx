import Logo from "./logo";
import Link from "next/link";

export default function Header() {
  
  return (
   <>
    <div className="site-details flex justify-between items-center px-4 sm:px-12 pt-4">
      <Link href="/"><Logo/></Link>
      <nav className="flex items-center gap-4 sm:gap-[29px]">
        <Link className="text-[.75rem]  sm:text-[1.25rem] text-white" href="/signin">Sign In</Link>
        <Link className="text-[.75rem] sm:text-[1rem] text-black bg-[#008080] px-[8px] py-[.5rem] sm:px-[28px] sm:py-[1rem] rounded-[30px] sm:rounded-[15px]" href="/signup">Get Started</Link>
      </nav>    
    </div>    
    <svg className="m-auto" width='95%' height="21" viewBox="0 0 1224 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.681552 19.7839L420.801 18.9763L443.789 1.49878L466.788 18.8879L1223.48 17.4334" stroke="#E6DEFF" stroke-width="2"/>
    </svg>
   </>
  );
}