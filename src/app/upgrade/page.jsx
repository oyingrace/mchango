"use client"
import Nav from "@/components/nav";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/logo";
import TopBar from "@/components/topbar";

export default function Create() {
    const [showNav,setShowNav] = useState(false);
    const handleActiveMenu = () => setShowNav(!showNav);
    return(<>
      <div className="bg min-h-screen w-screen overflow-x-hidden ">
        <div className="flex justify-between  md:hidden  static items-center p-4">
                <button onClick={handleActiveMenu}>
                {!showNav && <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.04175 10.4155C0.765463 10.4155 0.500489 10.3057 0.305123 10.1103C0.109756 9.91496 0 9.64999 0 9.3737V1.04175C0 0.765463 0.109756 0.500489 0.305123 0.305123C0.500489 0.109756 0.765463 0 1.04175 0H9.37578C9.65207 0 9.91705 0.109756 10.1124 0.305123C10.3078 0.500489 10.4175 0.765463 10.4175 1.04175V9.3737C10.4175 9.64999 10.3078 9.91496 10.1124 10.1103C9.91705 10.3057 9.65207 10.4155 9.37578 10.4155H1.04175ZM15.6263 10.4155C15.35 10.4155 15.085 10.3057 14.8897 10.1103C14.6943 9.91496 14.5845 9.64999 14.5845 9.3737V1.04175C14.5845 0.765463 14.6943 0.500489 14.8897 0.305123C15.085 0.109756 15.35 0 15.6263 0H23.9582C24.2345 0 24.4995 0.109756 24.6949 0.305123C24.8902 0.500489 25 0.765463 25 1.04175V9.3737C25 9.64999 24.8902 9.91496 24.6949 10.1103C24.4995 10.3057 24.2345 10.4155 23.9582 10.4155H15.6263ZM1.04175 25C0.765463 25 0.500489 24.8902 0.305123 24.6949C0.109756 24.4995 0 24.2345 0 23.9582V15.6242C0 15.3479 0.109756 15.083 0.305123 14.8876C0.500489 14.6922 0.765463 14.5825 1.04175 14.5825H9.37578C9.65207 14.5825 9.91705 14.6922 10.1124 14.8876C10.3078 15.083 10.4175 15.3479 10.4175 15.6242V23.9582C10.4175 24.2345 10.3078 24.4995 10.1124 24.6949C9.91705 24.8902 9.65207 25 9.37578 25H1.04175ZM15.6263 25C15.35 25 15.085 24.8902 14.8897 24.6949C14.6943 24.4995 14.5845 24.2345 14.5845 23.9582V15.6242C14.5845 15.3479 14.6943 15.083 14.8897 14.8876C15.085 14.6922 15.35 14.5825 15.6263 14.5825H23.9582C24.2345 14.5825 24.4995 14.6922 24.6949 14.8876C24.8902 15.083 25 15.3479 25 15.6242V23.9582C25 24.2345 24.8902 24.4995 24.6949 24.6949C24.4995 24.8902 24.2345 25 23.9582 25H15.6263Z" fill="white"/>
                    </svg>
                    }
                {showNav && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 font-extrabold ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                }
                </button>
        </div>
        <div className="flex ">
          <div className=" md:flex fixed min-h-screen ">            
            <Nav show={showNav}  />
          </div>
          <div className="flex-grow w-[70vw] overflow-x-hidden p-4 md:ml-72 ">
            <TopBar/>
            <div className="wrapper text-white flex-col sm:flex-row flex flex-wrap  sm:justify-between items-start justify-center sm:p-12 m-auto">
                <div className="w-[90%] sm:w-[15rem] h-max flex flex-col items-start card  p-4 sm:pb-[4.5rem]  rounded-lg border border-[#00FFFF] border-solid">
                  <Image
                  src="/Blog image 1.jpg"
                  width="300"
                  height="110"
                  alt="icon"
                  className="m-auto mb-2"
                  />
                  <div className="   flex flex-col items-left gap-2 text-[.75rem] textt-justify text-[#F1F1F1]">
                    <p className=" text-[24px] nunito">Basic Plan</p>
                    <p className=" nunito text-gray-400 ">The Basic Plan allows for 5 contributors max (will be increased as time goes on) and access to basic chat room with standard transaction speed</p>
                    <div className="flex flex-col gap-2 text-gray-400">
                      <p className=" flex items-center "><span>Pricing: $4.99/ month</span></p>
                      <p className=" flex items-center "> <span>Usage Limit: Up to 2 active savings groups with maximum monthly contribution of $500</span></p>
                      <p className=" flex items-center "> <span>Transaction Fees: 1.5% on contributions and 2% on withdrawals</span></p>
                      <p className=" flex items-center "> <span>Additional features: No additional services 
                      included</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] sm:w-[15rem] h-max flex flex-col items-start card  p-4 sm:pb-[4.5rem]  rounded-lg border border-[#00FFFF] border-solid">
                  <Image
                  src="/Blog image 2.jpg"
                  width="300"
                  height="110"
                  alt="icon"
                  className="m-auto mb-2"
                  />
                  <div className="   flex flex-col items-left gap-2 text-[.75rem] textt-justify text-[#F1F1F1]">
                    <p className=" text-[24px] nunito">Standard Plan</p>
                    <p className=" nunito text-gray-400 ">The Standard Plan allows for all Basic Plan features with advanced chat room that allows for file sharing, priority transaction processing and basic analytics dashboard</p>
                    
                    <div className="flex flex-col gap-2 text-gray-400">

                    <p className=" flex items-center "><span>Pricing: $9.99/ month</span></p>
                    <p className=" flex items-center "> <span>Usage Limit: Up to 5 active savings groups
                    with maximum monthly contribution of $2,000</span></p>
                    <p className=" flex items-center "> <span>Transaction Fees: 1% on contributions 
                    and 1.5% on withdrawals</span></p>
                    <p className=" flex items-center "> <span>Additional features: Monthly financial planning 
                    tips</span></p>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] sm:w-[15rem] h-max flex flex-col items-start card  p-4  rounded-lg border border-[#00FFFF] border-solid">
                  <Image
                  src="/Blog image 1.jpg"
                  width="300"
                  height="110"
                  alt="icon"
                  className="m-auto mb-2"
                  />
                  <div className="   flex flex-col items-left gap-2 text-[.75rem] textt-justify text-[#F1F1F1]">
                    <p className=" text-[24px] nunito">Premium Plan</p>
                    <p className=" nunito text-gray-400 ">The Premium Plan comes with all Standard Plan features with VIP chat room that allows for video conferencing, also Instant transaction processing, advanced analytics and reporting API access for integrations</p>
                    
                    <div className="flex flex-col gap-2 text-gray-400">

                    <p className=" flex items-center "><span>Pricing: $19.99/ month</span></p>
                    <p className=" flex items-center "> <span>Usage Limit: Unlimited active savings groups 
                    with no maximum monthly contribution limit</span></p>
                    <p className=" flex items-center "> <span>Transaction Fees: 0.5% on contributions 
                    and 1% on withdrawals</span></p>
                    <p className=" flex items-center "> <span>Additional features: Quarterly personal, 
    financial consulting session, Access to exclusive 
    financial education webinars, priority 
    customer support</span></p>
                    </div>
                  </div>
                </div>
                
                
            </div>  
          </div>
        </div>
      </div>
    </>
       

    );
}
    
