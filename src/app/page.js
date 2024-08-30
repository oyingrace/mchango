
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between m-auto poppins text-center gap-12 p-12">
      <section className=" hero-section text-white flex flex-col gap-4 items-center mb-6">
        <div className="flex items-center gap-2"><Image
               src="/mchango logo.png"
               width="50"
               height="50"
               alt="icon"
               /><Logo/></div>
        <h2 className="text-[1.5rem] sm:text-[2.5rem] font-bold heading">Gateway to Smart Savings and Contributions</h2>
        <p className="sm:text-[1.2rem] w-[90%] sm:w-[70%]">Dive into collaborative savings, real-time insights, and a thriving community. Let's elevate your crypto journey together.</p>
        <p className="sm:text-[1.2rem] heading">Begin contributing, saving, and growing.</p>
        <Link className="text-[1rem] text-black bg-[#008080] px-[16px] py-[.75rem] sm:px-[28px] sm:py-[1rem] rounded-[15px] w-max" href="/signup">Get Started</Link>
      </section>
      
      <section className=" feature-section m-auto   ">
        <h2 className="text-[1.5rem] sm:text-[2.5rem] text-white  font-semibold text-center leading-9 m-auto">Smart Crypto Investing <br/>

        and Community Empowerment</h2>
        <div className="wrapper text-white sm:flex flex-wrap gap-8 sm:gap-4 items-center justify-center py-8 m-auto">
            <div className="w-[22rem] flex flex-col items-center card">
              <Image
               src="/Icon 1.png"
               width="300"
               height="220"
               alt="icon"
               />
               <div className="  text-center flex flex-col items-center gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[22px] nunito w-[80%] m-auto">Real-Time Investment Insights</h3>
                <p className="text-[1rem] nunito px-4 w-full sm:w-[80%] m-auto">Stay informed with live investment data. Mchango_ provides real-time insights, alerts, and analysis for informed decision-making in the cryptocurrency market.</p>
                <Link className="text-[1rem]  text-[#418FAA] underline px-[28px] py-[1rem]  text-center rounded-[15px] w-max" href="/signup">Get Started</Link>
               </div>
            </div>
            <div className="w-[22rem] flex flex-col items-center card background pt-4 rounded-[40px]">
              <Image
               src="/Icon 2.png"
               width="300"
               height="220"
               alt="icon"
               />
               <div className="  text-center flex flex-col items-center gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[22px] nunito w-[80%] m-auto">Community Collaboration 
                for Profitability</h3>
                <p className="text-[1rem] nunito px-4 w-[80%] m-auto">Boost profits through community collaboration. Join forces, share wisdom, manage risks, and achieve greater profitability in the volatile market.</p>
                <Link className="text-[1rem]  text-[#418FAA] underline px-[28px] py-[1rem]  text-center rounded-[15px] w-max" href="/signup">Get Started</Link>
               </div>
            </div>
            <div className="w-[22rem] flex flex-col items-center card">
              <Image
               src="/Icon 3.png"
               width="300"
               height="220"
               alt="icon"
               />
               <div className="  text-center flex flex-col items-center gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[22px] nunito w-[80%] mb-[2rem] m-auto">Automated Group Savings</h3>
                <p className="text-[1rem] nunito px-4 w-full sm:w-[80%] m-auto">Join or create savings groups effortlessly. Mchango_ automates contributions, ensuring disciplined group savings for common financial goals.</p>
                <Link className="text-[1rem]  text-[#418FAA] underline px-[28px] py-[1rem]  text-center rounded-[15px] w-max" href="/signup">Get Started</Link>
               </div>
            </div>
        </div>        
      </section>
      <section className=" process-section m-auto  ">
        <div className="w-full leading-6 sm:w-[25%] text-left flex flex-col gap-2">          
        <h2 className="text-[1.3rem] text-white  font-bold ">Mchango_ Mastery Hub</h2>
        <p className="text-[.75rem] nunito  ">Embark on a journey to financial empowerment with Mchango_. Discover a step-by-step guide to collaborative savings, real-time insights, and community-driven prosperity.</p>
        <Link className="text-[.75rem] border-solid border-[#008080] border-2  text-[#ffffff]  px-[12px] py-[1rem]  text-center rounded-[15px] w-max" href="/signup">Get Started</Link>
        </div>
        <div className="wrapper text-white sm:flex flex-wrap gap-4 items-center py-8 flex-row  bg-transparent sm:mt-[-15rem] relative">
            <div className="sm:w-[22%] w-[80%] mb-8 leading-6 flex flex-col items-start card text-left gap-4">
              <Image
               src="/num1.png"
               width="50"
               height="50"
               alt="icon"
               />
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[16px] nunito  text-[#00FFFF]">Create Your Account</h3>
                <p className="text-[.85rem] nunito  ">Sign up on Mchango_ by creating your account. Provide necessary details and set up your secure login credentials.</p>
                
               </div>
            </div>
            <div className="sm:w-[22%] w-[80%] mb-8 leading-6 flex flex-col items-start card text-left gap-4 sm:mb-[3rem]">
              <Image
               src="/num2.png"
               width="50"
               height="50"
               alt="icon"
               />
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[16px] nunito  text-[#00FFFF]">Explore Savings Groups</h3>
                <p className="text-[.85rem] nunito  ">Browse and explore existing savings groups or create your own. Choose groups aligned with your financial goals and interests.</p>
                
               </div>
            </div>
            <div className="sm:w-[22%] w-[80%] mb-8 leading-6 flex flex-col items-start card text-left gap-4 sm:mb-[29rem]">
              <Image
               src="/num3.png"
               width="50"
               height="50"
               alt="icon"
               />
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[16px] nunito  text-[#00FFFF]">Automate Contributions</h3>
                <p className="text-[.85rem] nunito  ">Set up automated contributions to your chosen savings group. Define the frequency and amount you want to contribute.</p>
                
               </div>
            </div>
            <div className="sm:w-[22%] w-[80%] mb-8 leading-6 flex flex-col items-start card text-left gap-4 sm:mb-[32rem]">
              <Image
               src="/num4.png"
               width="50"
               height="50"
               alt="icon"
               />
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[16px] nunito  text-[#00FFFF]">Collaborate with the Community</h3>
                <p className="text-[.85rem] nunito  ">Engage with the Mchango_ community. Share your insights, learn from others, and collaborate to achieve greater profitability.</p>
                
               </div>
            </div>       
            <Image
               src="/vec.png"
               width="850"
               height="500"
               alt="icon"
               className="absolute bottom-[52%]
                left-1 -z-10 hidden sm:block"
               />
        </div>        
      </section>
      <section className=" pricing-section m-auto w-full sm:w-[70%] ">
        <h2 className="text-[1.5rem] sm:text-[2.5rem] text-white  font-semibold text-center leading-9 m-auto mb-4 sm:mt-[-10rem]">Find Your Perfect Plan</h2>
        <p className="text-[1rem] nunito px-4  p-2 leading-8 sm:leading-5 w-[95%] sm:w-[80%] m-auto">Our transparent and accessible pricing structures are designed to cater to diverse needs. Choose a plan that suits you, whether you're an individual trader or part of a dynamic investment team</p>
        <div className="wrapper text-white flex flex-wrap gap-8 items-center justify-center py-8 ">
            <div className="w-[20rem] flex flex-col items-center card rounded-[24px] border-[1px] border-solid border-[#604D83] p-8">
            <div className=" flex flex-col items-start card text-left gap-4">
              <Image
               src="/purple.png"
               width="40"
               height="40"
               alt="icon"
               />
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[24px] nunito  text-[#00FFFF]">Basic Plan</h3>
                <p className="text-[1rem] nunito  ">The Basic Plan is ideal for users new to collective savings. Start your journey towards financial goals with group savings power.</p>
                <hr className="text-white bg-white"/>
                <div className="flex flex-col gap-4">

                <p className="text-[#00FFFF] flex items-center text-[1rem]"> <span><Image
               src="/green tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>Commission Fee: 3%</span></p>
                <p className="text-[#00FFFF] flex items-center text-[1rem]"> <span><Image
               src="/green tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>No of subscriibers: 10 max</span></p>
                <p className="text-[#00FFFF] flex items-center text-[1rem]"> <span><Image
               src="/green tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>Subscription Payment: 0 ETH</span></p>
                </div>
               </div>
               <Link className="text-[1rem] border-solid border-[#6D6D6D]  border-[1px] outfit text-[#00FFFF]  px-[12px] py-[1rem]  text-center rounded-[10px] w-full" href="/signup">Get Started</Link>
            </div>
            </div>
            <div className="w-[20rem] flex flex-col items-center card background rounded-[24px] border-[1px] border-solid border-[#E7EBFF] p-8">
            <div className=" flex flex-col items-start card text-left gap-4">
              <div>
              <Image
               src="/diamond.png"
               width="40"
               height="40"
               alt="icon"
               className="inline mr-4"
               />
               <span className="nunito border-solid border-[#ffffff]  border-[1px] px-3 py-[6px] text-[#ffffff] rounded-lg text-[.75rem]">Best offer</span>
                </div>
               <div className="   flex flex-col items-left gap-2 text-[#F1F1F1]">
                <h3 className="font-semibold text-[24px] nunito  text-[#1B223C]">Premium Plan</h3>
                <p className="text-[1rem] nunito  ">Elevate savings with the Premium Plan's advanced features and exclusive benefits, designed for accelerated financial success. </p>
                <hr className="text-white bg-white"/>
                <div className="flex flex-col gap-4">

                <p className="text-[#1B223C] flex items-center text-[1rem]"> <span><Image
               src="/black tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>Commission Fee: 1.5%</span></p>
                <p className="text-[#1B223C] flex items-center text-[1rem]"> <span><Image
               src="/black tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>No of subscriibers: 30 max</span></p>
                <p className="text-[#1B223C] flex items-center text-[1rem]"> <span><Image
               src="/black tick.png"
               width="16"
               height="16"
               alt="icon"
               className="inline mr-2"
               />
                  </span><span>Subscription Payment: 0.05 ETH</span></p>
                </div>
               </div>
               <Link className="text-[1rem] border-solid border-[#7D8888]  border-[1px] outfit text-[#ffffff]  px-[12px] py-[1rem]  text-center rounded-[10px] w-full" href="/signup">Get Started</Link>
            </div>
              
            </div>
           
        </div>        
      </section>
      
      
    </main>
  );
}
