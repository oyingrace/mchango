import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/logo";
import AccountSuccess from "@/components/accountSuccess";

export default function SignUp() {
    return(<>
    <Image
        src="/bg.png"
        width="1000"
        height="1000"
        alt="icon"
        className="w-full h-full  absolute left-0 top-0 -z-20 hidden sm:block"
        />
    <header className="m-auto hidden sm:block"> 
        <div className="site-details flex justify-between items-center px-2 sm:px-12 pt-4">
            <Link href="/"><Logo/></Link>    
        </div>    
        <svg className="m-auto" width='100%' height="21" viewBox="0 0 1224 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.681552 19.7839L420.801 18.9763L443.789 1.49878L466.788 18.8879L1223.48 17.4334" stroke="#E6DEFF" stroke-width="2"/>
        </svg>
    </header>
    <main>
        <section className=" hero-section text-white flex flex-col gap-4 items-center mb-6 p-6">
            <div className="flex items-center gap-2"><Image
                src="/mchango logo.png"
                width="50"
                height="50"
                alt="icon"
                /><Logo/></div>
            <h2 className="text-[1.5rem] sm:text-[2.5rem] font-bold heading text-center">Gateway to Smart Savings and Contributions</h2>
            
        </section>
        <h2 className="text-[white] text-center text-[1.5rem] sm:text-[2rem] nunito  font-bold ">Sign Up</h2>
        <form className="p-8 w-full sm:w-[50%] m-auto px-12">
            <div class="w-full text-[.75rem] flex flex-col  mb-4">
                <label for="firstname" className="">Full Name</label>
                <input type="text" id="firstname" placeholder="Name" required className="p-2 rounded-lg bg-white font-bold text-[1rem] text-black"/>
            </div>
            <div class="w-full text-[.75rem] flex flex-col  mb-4">
                <label for="email" className="">Email</label>
                <input type="email" id="email" placeholder="example@gmail.com" required className="p-2 rounded-lg bg-white font-bold text-[1rem] text-black"/>
            </div>
            <div class="w-full text-[.75rem] flex flex-col  mb-4">
                <label for="username" className="">Username</label>
                <input type="text" id="username" placeholder="example@gmail.com" required className="p-2 rounded-lg bg-white font-bold text-[1rem] text-black"/>
            </div>
            <div class="w-full text-[.75rem] flex flex-col  mb-4">
                <label for="country" className="">Country</label>
                <input type="text" id="country" placeholder="Nigeria" required className="p-2 rounded-lg bg-white font-bold text-[1rem] text-black"/>
            </div>
            <div class="w-full text-[.75rem] flex flex-col  mb-4">
                <label for="phoneNumber" className="">Phone Number</label>
                <input type="tel" id="phoneNumber" placeholder="+407" required className="p-2 rounded-lg bg-white font-bold text-[1rem] text-black"/>
                        
            </div>                
            <button type="submit" className="p-2 bg-white text-[#5866AC] font-semibold rounded-lg block px-4 signupBtn">Subscribe</button>
        </form>
        {/* <AccountSuccess/> */}
    </main>
    <footer className="bg-transparent">
        <Image
        src="/looper.png"
        width="100"
        height="100"
        alt="icon"
        className="w-full h-[25rem] hidden sm:block"
        />
    </footer>
    
    </>
       

    );
}