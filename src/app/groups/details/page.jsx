"use client"
import Nav from "@/components/nav";
import { useState } from "react";
import Image from "next/image";
import GroupEvents from "@/components/groupEvents";
import ReceipientsList from "@/components/receipientsList";
import GroupDesc from "@/components/groupDesc";

export default function GroupDetails() {
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
            <section className="hidden sm:flex gap-4 sm:px-12 msbox w-full  items-center justify-between p-4 rounded-xl">
                <Image
                src="/ellipse.png"
                width="230"
                height="230"
                alt="icon"
                className="rounded-lg hidden lg:block"
                />   
                <div className=" flex gap-2 flex-col">
                    <div className="flex items-start justify-between">
                        <Image
                            src="/pic.png"
                            width="75"
                            height="75"
                            alt="icon"
                            className="rounded-lg"
                            />
                            <svg width="4" height="16" viewBox="0 0 4 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#ffffff"/>
                            </svg>
                    </div>
                    <h2 className="font-bold text-2xl mb-[-12px]">Delware savers</h2>
                    <p className="text-gray-400">created on 20 July</p>
                    <div>
                        <div className="flex justify-between flex-wrap items-center sm:gap-2">
                            <div className="nunito sm:w-max ">
                                <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1537_1644)">
                                        <path d="M18.17 4.90994L17.1 3.83994L11.55 9.38994V10.4699H12.63L18.17 4.90994ZM16 2.73994L17.29 1.44994C17.4286 1.30965 17.5936 1.19827 17.7756 1.12225C17.9576 1.04623 18.1528 1.00708 18.35 1.00708C18.5472 1.00708 18.7424 1.04623 18.9244 1.12225C19.1064 1.19827 19.2714 1.30965 19.41 1.44994L20.56 2.59994C21.15 3.18994 21.15 4.13994 20.56 4.71994L19.88 5.39994L19.86 5.41994L19.28 5.99994L13.28 11.9999H10V8.73994L16 2.73994ZM13.72 2.18994L13.17 2.73994L11.9 4.00994C8.6 4.05994 6 6.60994 6 10.2099C6 12.5499 7.95 15.6499 12 19.3499C16.05 15.6499 18 12.5599 18 10.2099V10.1099L19.8 8.30994C19.93 8.90994 20 9.54994 20 10.2099C20 13.5299 17.33 17.4599 12 22.0099C6.67 17.4599 4 13.5299 4 10.2099C4 5.22994 7.8 2.00994 12 2.00994C12.58 2.00994 13.16 2.06994 13.72 2.18994Z" fill="#008080"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1537_1644">
                                        <rect width="24" height="24" fill="#008080"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-[16px] w-full sm:w-[80%]">Group Admin Address</p>
                                <p className="text-[#00FFFF] text-[12px]">500 Ether</p>
                            </div>
                            <div className="nunito sm:w-max ">
                                <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1537_1652)">
                                <path d="M11.7998 10.9C9.52982 10.31 8.79982 9.7 8.79982 8.75C8.79982 7.66 9.80982 6.9 11.4998 6.9C13.2798 6.9 13.9398 7.75 13.9998 9H16.2098C16.1398 7.28 15.0898 5.7 12.9998 5.19V3H9.99982V5.16C8.05982 5.58 6.49982 6.84 6.49982 8.77C6.49982 11.08 8.40982 12.23 11.1998 12.9C13.6998 13.5 14.1998 14.38 14.1998 15.31C14.1998 16 13.7098 17.1 11.4998 17.1C9.43982 17.1 8.62982 16.18 8.51982 15H6.31982C6.43982 17.19 8.07982 18.42 9.99982 18.83V21H12.9998V18.85C14.9498 18.48 16.4998 17.35 16.4998 15.3C16.4998 12.46 14.0698 11.49 11.7998 10.9Z" fill="#008080"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1537_1652">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>

                                <p className="text-[16px] w-[70%]">Collateral Amount</p>
                                <p className="text-[#00FFFF] text-[12px]">500 Ether</p>
                            </div>
                            <div className="nunito sm:w-max ">
                                <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1537_1660)">
                                    <path d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V18H18V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" fill="#008080"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1537_1660">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <p className="text-[16px] w-full sm:w-[70%]">Number of members</p>
                                <p className="text-[#00FFFF] text-[12px]">500</p>
                            </div>
                            <div className="nunito sm:w-max ">
                                <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1537_1668)">
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z" fill="#008080"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1537_1668">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <p className="text-[16px] w-[70%]">Group State</p>
                                <p className="text-[#00FFFF] text-[12px]">500 Ether</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="flex sm:hidden gap-4 sm:px-12 msbox w-full  items-center justify-between p-4 rounded-xl">
                <div className="bg-[#ffcb6633] p-4 rounded-full w-max">
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 4.5C3.5 3.52892 3.50212 2.90121 3.56431 2.4387C3.62262 2.00496 3.71677 1.86902 3.79289 1.79289C3.86902 1.71677 4.00496 1.62262 4.4387 1.56431C4.90121 1.50212 5.52892 1.5 6.5 1.5L16.5 1.5C17.4711 1.5 18.0988 1.50212 18.5613 1.56431C18.995 1.62262 19.131 1.71677 19.2071 1.79289C19.2832 1.86902 19.3774 2.00496 19.4357 2.4387C19.4979 2.90121 19.5 3.52892 19.5 4.5V12.5L3.5 12.5L3.5 4.5Z" stroke="#FFCB66" stroke-width="2"/>
                        <path d="M3.16667 12.5C2.24619 12.5 1.5 13.2462 1.5 14.1667C1.5 15.4553 2.54467 16.5 3.83333 16.5H19.1667C20.4553 16.5 21.5 15.4553 21.5 14.1667C21.5 13.2462 20.7538 12.5 19.8333 12.5H3.16667Z" stroke="#FFCB66" stroke-width="2"/>
                    </svg>
                </div> 
                <div className="flex flex-col">
                    <h5 className="font-bold text-xl  w-full">Adventures Fund</h5>   
                    <div className="flex flex-wrap items-end gap-1">
                        <div className=" flex gap-2 flex-col">                        
                            <p className="uppercase tracking-tighter text-[.5rem]"> Collateral fee</p>
                            <p className="uppercase tracking-tighter text-[.5rem]">Next contribution day</p>
                            <p className="uppercase tracking-tighter text-[.5rem]">No of members</p>
                            <p className="uppercase tracking-tighter text-[.5rem]">Date created</p>        
                        </div>
                        <svg width="2" height="73" viewBox="0 0 2 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="73.0068" x2="1" y2="-1.52588e-05" stroke="url(#paint0_linear_2023_1115)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2023_1115" x1="1.5" y1="36.5034" x2="2.5" y2="36.5034" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="#0C617E"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <div className="flex flex-col gap-1">
                            <p className="text-[.5rem] flex items-center">
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                                <span className="text-[.5rem] ">13.6K ETH</span> 
                                <span className="text-[.5rem] text-[#00FF39]">{`(113.34%)`}</span>
                            </p>
                            <p className="text-[.5rem] ">31st August, 2023.</p>
                            <p className="text-[.5rem] ">360</p>
                            <p className="text-[.5rem] ">2nd January, 2023.</p>
                        </div>  
                    </div> 
                </div>
            </section>
            <section className="flex flex-wrap justify-center gap-4">
                <GroupDesc/>
                <ReceipientsList/>
            </section>
            <GroupEvents/>
        </div>
      </div>
    </div>
    </>
    );
}
    
