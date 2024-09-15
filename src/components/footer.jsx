import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  
  return (<>
    <section className=" newsletter-section m-auto mb-0 w-full h-full absolute top-0 left-0 p-8 pb-0">
        <div className="wrapper text-white sm:flex flex-wrap gap-4  justify-center py-8 ">
           <div className="flex-[5] flex flex-col items-center justify-center gap-4 mb-8 sm:mb-0">
               <h2 className="text-[1.5rem] text-white  font-semibold text-center leading-9 m-auto mb-4 ">Join Our Web3 Savings Community</h2>
               <p className="w-[75%] text-center">Subscribe to our newsletter and become part of our thriving web3 savings group. Stay informed, save smarter, and grow your financial future with us!</p>
               <form className="flex gap-3 bg-[#2E2A2B] border-[1px] border-solid border-white rounded-lg">
                     <input type="email" placeholder="Type In Your Email" className="p-2 rounded-lg bg-transparent pr-4"/>
                     <button type="submit" className="p-2 bg-white text-[#5866AC] font-semibold rounded-lg px-4">Subscribe</button>
               </form>
           </div>
            <div className="flex-[3] mb-8 sm:mb-0">
               <h2 className="text-[1.5rem] text-white  font-semibold  leading-9  mb-4 ">Contact Information</h2>
               <p className="text-white flex items-center text-[1rem] mb-2"> 
                     <span><Image
                     src="/PHONE.png"
                     width="16"
                     height="16"
                     alt="icon"
                     className="inline mr-2"
                     />
                     </span>
                     <Link href="tel:+2349098787472">+234 909 878 7472</Link>
               </p>
               <p className="text-white flex items-center text-[1rem] mb-2"> 
                     <span><Image
                     src="/MESSAGE.png"
                     width="16"
                     height="16"
                     alt="icon"
                     className="inline mr-2"
                     />
                     </span>
                     <Link href="mailto:mchango_o@yahoo.com">mchango_o@yahoo.com</Link>
               </p>
               <p className="text-white flex items-center text-[1rem] mb-2"> 
                     <span><Image
                     src="/LOCATION.png"
                     width="16"
                     height="16"
                     alt="icon"
                     className="inline mr-2"
                     />
                     </span>
                     <span>Lagos, Nigeria.</span>
               </p>
            </div>           
            <div className="flex-[2]">
               <h2 className="text-[1rem] text-white  font-semibold leading-9  mb-4 ">Socials</h2>
               <div className="flex flex-col gap-2">
                     <Link href="#" className="text-[.75rem] text-[#00F0FF] font-semibold">LinkedIn</Link>
                     <Link href="#"className="text-[.75rem] text-[#00F0FF] font-semibold">Twitter</Link>
                     <Link href="#"className="text-[.75rem] text-[#00F0FF] font-semibold">Facebook</Link>
                     <Link href="#"className="text-[.75rem] text-[#00F0FF] font-semibold">Instagram</Link>
               </div>
            </div>           
            <div className="flex items-center justify-start w-full gap-2 mt-4  sm:ml-[20%]"><Image
                  src="/mchango logo.png"
                  width="25"
                  height="25"
                  alt="icon"
                  />
                  <h1 className="text-[white] text-[1rem] sm:text-[1.5rem]  nunito  ">Mchango_</h1>
            </div>       
         </div> 
      </section> 
   </>
  );
}

