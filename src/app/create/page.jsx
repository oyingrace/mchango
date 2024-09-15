"use client"
import GroupSuccess from "@/components/groupSuccess";
import Nav from "@/components/nav";
import { useState } from "react";

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
            <p className="p-4"> 
              <svg width="31" height="29" className="inline" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.78125 13.5938H26.1562C26.4132 13.5938 26.6596 13.6892 26.8413 13.8592C27.0229 14.0291 27.125 14.2596 27.125 14.5C27.125 14.7404 27.0229 14.9709 26.8413 15.1408C26.6596 15.3108 26.4132 15.4062 26.1562 15.4062H6.78125C6.52432 15.4062 6.27792 15.3108 6.09624 15.1408C5.91456 14.9709 5.8125 14.7404 5.8125 14.5C5.8125 14.2596 5.91456 14.0291 6.09624 13.8592C6.27792 13.6892 6.52432 13.5938 6.78125 13.5938Z" fill="white"/>
                <path d="M7.18234 14.4999L15.2171 22.0146C15.3991 22.1847 15.5012 22.4155 15.5012 22.6562C15.5012 22.8968 15.3991 23.1276 15.2171 23.2978C15.0352 23.468 14.7885 23.5636 14.5313 23.5636C14.274 23.5636 14.0273 23.468 13.8454 23.2978L5.12665 15.1416C5.03643 15.0574 4.96485 14.9574 4.91602 14.8473C4.86718 14.7372 4.84204 14.6191 4.84204 14.4999C4.84204 14.3807 4.86718 14.2627 4.91602 14.1526C4.96485 14.0425 5.03643 13.9425 5.12665 13.8583L13.8454 5.70205C14.0273 5.53188 14.274 5.43628 14.5313 5.43628C14.7885 5.43628 15.0352 5.53188 15.2171 5.70205C15.3991 5.87222 15.5012 6.10302 15.5012 6.34367C15.5012 6.58433 15.3991 6.81513 15.2171 6.9853L7.18234 14.4999Z" fill="white"/>
              </svg>To create a new thrift group, kindly fill out these details.  
            </p>
            <form className="p-4 w-full sm:w-[70%]  ">
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                  <label for="thriftName" className="">Thrift Name</label>
                  <input type="text" id="thriftName" placeholder="Name" required className="p-2 rounded-lg bg-transparent border-[1px] placeholder:text-gray-400 text-white border-[#F0F0F0] border-solid  text-[1rem] "/>
                </div>
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                  <label for="desc" className="">Group's description/goal</label>
                  <input type="text" id="desc" placeholder="write out what the group is set to achieve" required className="p-2 rounded-lg bg-transparent border-[1px] placeholder:text-gray-400 text-white border-[#F0F0F0] border-solid  text-[1rem] "/>
                </div>
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                  <label for="collateral" className="">Collateral value</label>
                  <select name="collateral" id="collateral" placeholder="Collateral value" className=" p-2 rounded-lg bg-transparent border-[1px] placeholder:text-gray-400 text-gray-400 border-[#F0F0F0] border-solid  text-[1rem] focus:outline-none focus:shadow-outline ">
                      <option value="collateral" className="text-black hover:border-gray-500 bg-transparent">Collateral value</option>
                  </select>
                </div>
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                  <label for="planFrequency" className="">Plan Frequency</label>
                  <select name="planFrequency" id="planFrequency" placeholder="planFrequency value" className=" p-2 rounded-lg bg-transparent border-[1px] placeholder:text-gray-400 text-gray-400 border-[#F0F0F0] border-solid  text-[1rem]">
                      <option value="planFrequency" className="text-gray-400">Choose the time frame for contribution</option>
                  </select>
                </div>                
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                  <label className="w-32 h-32 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1  rounded-lg bg-transparent shadow-sm border  p-2  placeholder:text-gray-400 text-gray-400 border-[#F0F0F0] border-solid  text-[1rem] ">
                    <svg width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                      <path d="M1.36035 33.7813L16.7868 20.2832L30.2849 33.7813" stroke="gray" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.07357 1H39.9265C44.1687 1 47.6397 4.47095 47.6397 8.71322V39.5661C47.6397 43.8084 44.1687 47.2793 39.9265 47.2793H9.07357C4.8313 47.2793 1.36035 43.8084 1.36035 39.5661V8.71322C1.36035 4.47095 4.8313 1 9.07357 1Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M47.6386 33.7813L39.9254 26.0681L30.4767 33.9742" stroke="gray" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M31.249 22.2114C33.9114 22.2114 36.0697 20.053 36.0697 17.3906C36.0697 14.7282 33.9114 12.5698 31.249 12.5698C28.5866 12.5698 26.4282 14.7282 26.4282 17.3906C26.4282 20.053 28.5866 22.2114 31.249 22.2114Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="text-[8px] font-bold text-white">
                    Upload Group Display Image
                    </div>
                    <input type="file" className="hidden"/>
                  </label>
                </div>                
                <button type="submit" className="p-2 bg-[#008080] text-[#ffffff] font-semibold rounded-lg block px-4 ">Create Group</button>
            </form>
            {/* <GroupSuccess/> */}
          </div>
        </div>
    </div>
    </>
       

    );
}
    
