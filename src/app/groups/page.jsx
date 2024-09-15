"use client"
import Nav from "@/components/nav";
import { useState } from "react";
import ActiveGroups from "@/components/activeGroups";
import AllGroups from "@/components/allGroups";
import GroupEvents from "@/components/groupEvents";
import InactiveGroups from "@/components/inactiveGroups";
import TabsComponent from "@/components/tabs";


export default function Home() {
    const [showNav,setShowNav] = useState(false);
    const handleActiveMenu = () => setShowNav(!showNav)
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
          <div className=" md:flex fixed min-h-screen">          
            <Nav show={showNav}  />       
          </div>
          <div className="flex-grow w-[70vw] overflow-x-hidden p-4 md:ml-72 ">
            <div className="w-full sm:w-max">
              <h2 className="font-bold px-4 bg-[#096D80] text-3xl rounded-t-xl hidden sm:block w-[60%] module">Overflow</h2>
              <div className="msbox w-full sm:w-max p-8 py-2 rounded-xl sm:rounded-b-xl sm:rounded-t-none sm:rounded-tr-xl   gap-2   flex flex-col sm:flex-row flex-wrap sm:items-center sm:gap-2">
                <div className="nunito sm:w-max flex flex-wrap items-center gap-2">
                  <div className="bg-transparent bg-white rounded-xl p-2 w-10 h-10 flex items-center justify-center ">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1487_7787)">
                    <path d="M4.51047 5.5148L3.67491 4.65167C3.14158 5.35676 2.80973 6.17127 2.70898 7.01618H3.90602C3.98898 6.48735 4.19639 5.97068 4.51047 5.5148V5.5148ZM3.90602 8.23186H2.70898C2.80973 9.07676 3.13565 9.89127 3.66898 10.5964L4.50454 9.73323C4.19639 9.27735 3.98898 8.76676 3.90602 8.23186V8.23186ZM4.50454 11.4656C5.19195 12.0126 5.99195 12.3409 6.81565 12.4442V11.2103C6.3001 11.1191 5.80232 10.9124 5.35787 10.5842L4.50454 11.4656ZM8.00084 2.80382V0.937744L5.30454 3.70343L8.00084 6.40833V4.03167C9.6838 4.32343 10.9638 5.81872 10.9638 7.62402C10.9638 9.42931 9.6838 10.9246 8.00084 11.2164V12.4442C10.3416 12.1464 12.149 10.104 12.149 7.62402C12.149 5.14402 10.3416 3.10167 8.00084 2.80382Z" fill="#323232"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1487_7787">
                    <rect width="14.2222" height="14.5882" fill="white" transform="translate(0.296875 0.329834)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </div>
                  <div className="">
                      <p className="text-[18px] text-gray-400 mb-[-.25rem]">Group Admin Address</p>
                      <p className="text-[16px]">5000</p>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap gap-2">
                  <div className="nunito sm:w-max flex items-center gap-2">
                    <div className="bg-transparent bg-white rounded-xl p-2 w-10 h-10 flex items-center justify-center ">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1487_7787)">
                      <path d="M4.51047 5.5148L3.67491 4.65167C3.14158 5.35676 2.80973 6.17127 2.70898 7.01618H3.90602C3.98898 6.48735 4.19639 5.97068 4.51047 5.5148V5.5148ZM3.90602 8.23186H2.70898C2.80973 9.07676 3.13565 9.89127 3.66898 10.5964L4.50454 9.73323C4.19639 9.27735 3.98898 8.76676 3.90602 8.23186V8.23186ZM4.50454 11.4656C5.19195 12.0126 5.99195 12.3409 6.81565 12.4442V11.2103C6.3001 11.1191 5.80232 10.9124 5.35787 10.5842L4.50454 11.4656ZM8.00084 2.80382V0.937744L5.30454 3.70343L8.00084 6.40833V4.03167C9.6838 4.32343 10.9638 5.81872 10.9638 7.62402C10.9638 9.42931 9.6838 10.9246 8.00084 11.2164V12.4442C10.3416 12.1464 12.149 10.104 12.149 7.62402C12.149 5.14402 10.3416 3.10167 8.00084 2.80382Z" fill="#323232"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1487_7787">
                      <rect width="14.2222" height="14.5882" fill="white" transform="translate(0.296875 0.329834)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <div className="">
                        <p className="text-[18px] text-gray-400 mb-[-.25rem]">Groups In Rotation</p>
                        <p className="text-[16px]">250</p>
                    </div>
                  </div>
                  <div className="nunito sm:w-max flex items-center gap-2">
                      <div className="bg-transparent bg-white rounded-xl p-2 w-10 h-10 flex items-center justify-center ">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1487_7802)">
                        <path d="M7.40835 3.25914C10.0217 3.25914 12.1491 5.4413 12.1491 8.12189C12.1491 10.8025 10.0217 12.9846 7.40835 12.9846C4.79501 12.9846 2.66761 10.8025 2.66761 8.12189C2.66761 5.4413 4.79501 3.25914 7.40835 3.25914ZM7.40835 2.04346C4.13724 2.04346 1.48242 4.76659 1.48242 8.12189C1.48242 11.4772 4.13724 14.2003 7.40835 14.2003C10.6795 14.2003 13.3343 11.4772 13.3343 8.12189C13.3343 4.76659 10.6795 2.04346 7.40835 2.04346ZM6.81576 5.69052H5.63057V10.5533H6.81576V5.69052ZM10.3713 8.12189L7.40835 5.69052V10.5533L10.3713 8.12189Z" fill="#323232"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1487_7802">
                        <rect width="14.2222" height="14.5882" fill="white" transform="translate(0.296875 0.827881)"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </div>
                      <div className="">
                          <p className="text-[18px] text-gray-400 mb-[-.25rem]">Groups Yet To Be In Rotation</p>
                          <p className="text-[16px]">500 Ether</p>
                      </div>
                  </div>
                </div>     
              </div>
            </div>
            <GroupEvents/>
            <TabsComponent items={items}/>
          </div>
        </div>
    </div>
    </>      
    );
}
const items = [
  {
    title: 'All Groups',
    content: (
      <AllGroups/>
    ),
  },
  {
    title: 'Active Groups',
    content: (
      <ActiveGroups/>
    ),
  },
  {
    title: 'Inactive Groups',
    content: (
      <InactiveGroups/>
    ),
  },
  
];