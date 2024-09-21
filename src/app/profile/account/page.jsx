"use client"
import Nav from "@/components/nav";
import { useState } from "react";
import Image from "next/image";

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
          <div className="flex-grow w-[70vw] overflow-x-hidden p-2 py-4 md:ml-72 ">
            <p className="m-4 sm:mb-4 text-[.75rem] flex gap-4"><span className="">Account</span> <span className="">{`>`}</span><span className="">Personal Info</span></p>
            <h2 className="text-[1rem]  nunito m-4 sm:mb-4">Personal Info</h2>
            <section className="flex-col sm:flex-row flex flex-wrap gap-8 justify-center items-start p-4">
                <form className="sm:flex-[3] w-full  rounded-xl  justify-start p-4 border-none sm:border sm:border-[#1CB0F6] sm:border-solid">
                  <header className="flex gap-8 items-center mb-4"> <Image
                  src="/header.png"
                  width="100"
                  height="100"
                  alt="icon"
                  className="  hidden sm:block"
                  />
                  <button type="submit" className="p-2 bg-transpare text-[#ffffff]  rounded-3xl block px-4 border border-white border-solid"> Update</button>
                  <button type="submit" className="p-2 bg-transparent text-[#ffffff] flex items-center gap-2  rounded-lg  px-4 "><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
    <g clip-path="url(#clip0_1697_441)">
    <path d="M1.46582 4.00645H15.0658M5.39862 4.00005V3.63365C5.39862 2.88213 5.69716 2.16139 6.22856 1.62999C6.75997 1.09859 7.4807 0.800049 8.23222 0.800049C8.98374 0.800049 9.70448 1.09859 10.2359 1.62999C10.7673 2.16139 11.0658 2.88213 11.0658 3.63365V4.00005M6.64822 7.20005V12M9.88982 7.20005V12M11.8658 15.2H4.66582C4.24147 15.2 3.83451 15.0315 3.53445 14.7314C3.23439 14.4314 3.06582 14.0244 3.06582 13.6V4.00005H13.4658V13.6C13.4658 14.0244 13.2972 14.4314 12.9972 14.7314C12.6971 15.0315 12.2902 15.2 11.8658 15.2Z" stroke="white" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1697_441">
    <rect width="16" height="16" fill="white" transform="translate(0.265625)"/>
    </clipPath>
    </defs>
    </svg>
    Remove</button>
                  </header>
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                            <label for="name" className="flex gap-2"> Name <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23438 10C4.23438 6.54822 7.03259 3.75 10.4844 3.75C13.9362 3.75 16.7344 6.54822 16.7344 10C16.7344 13.4518 13.9362 16.25 10.4844 16.25C7.03259 16.25 4.23438 13.4518 4.23438 10ZM10.4844 5C7.72295 5 5.48438 7.23858 5.48438 10C5.48438 12.7614 7.72295 15 10.4844 15C13.2458 15 15.4844 12.7614 15.4844 10C15.4844 7.23858 13.2458 5 10.4844 5Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 10C10.8296 10 11.1094 10.2798 11.1094 10.625V13.125C11.1094 13.4702 10.8296 13.75 10.4844 13.75C10.1392 13.75 9.85938 13.4702 9.85938 13.125V10.625C9.85938 10.2798 10.1392 10 10.4844 10Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 7.92749C10.5707 7.92749 10.6406 7.85753 10.6406 7.77124C10.6406 7.68495 10.5707 7.61499 10.4844 7.61499V6.67749C9.8803 6.67749 9.39062 7.16718 9.39062 7.77124C9.39062 8.37531 9.8803 8.86499 10.4844 8.86499V7.92749Z" fill="white"/>
    </svg>
    </label>
                            <input type="text" id="name" placeholder="Morty Smith" required className="p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] "/>
                </div>
                
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                            <label for="language" className="">Language</label>
                            <select name="language" id="language" placeholder="Collateral value" className=" p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] focus:outline-none focus:shadow-outline ">
                                <option value="English" className=" bg-transparent">English</option>
                            </select>
                </div>
                <div className="sm:flex gap-4 ">

                    <div class="w-full text-[.75rem] flex flex-col  mb-4">
                    <label for="date" className="flex gap-2"> Date format <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23438 10C4.23438 6.54822 7.03259 3.75 10.4844 3.75C13.9362 3.75 16.7344 6.54822 16.7344 10C16.7344 13.4518 13.9362 16.25 10.4844 16.25C7.03259 16.25 4.23438 13.4518 4.23438 10ZM10.4844 5C7.72295 5 5.48438 7.23858 5.48438 10C5.48438 12.7614 7.72295 15 10.4844 15C13.2458 15 15.4844 12.7614 15.4844 10C15.4844 7.23858 13.2458 5 10.4844 5Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 10C10.8296 10 11.1094 10.2798 11.1094 10.625V13.125C11.1094 13.4702 10.8296 13.75 10.4844 13.75C10.1392 13.75 9.85938 13.4702 9.85938 13.125V10.625C9.85938 10.2798 10.1392 10 10.4844 10Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 7.92749C10.5707 7.92749 10.6406 7.85753 10.6406 7.77124C10.6406 7.68495 10.5707 7.61499 10.4844 7.61499V6.67749C9.8803 6.67749 9.39062 7.16718 9.39062 7.77124C9.39062 8.37531 9.8803 8.86499 10.4844 8.86499V7.92749Z" fill="white"/>
    </svg>
    </label>
                            <input type="date" id="date" placeholder="" required className="appearance-none p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] "/>
                    </div>
                    <div class="w-full text-[.75rem] flex flex-col  mb-4">
                    <label for="time" className="flex gap-2"> Time format <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23438 10C4.23438 6.54822 7.03259 3.75 10.4844 3.75C13.9362 3.75 16.7344 6.54822 16.7344 10C16.7344 13.4518 13.9362 16.25 10.4844 16.25C7.03259 16.25 4.23438 13.4518 4.23438 10ZM10.4844 5C7.72295 5 5.48438 7.23858 5.48438 10C5.48438 12.7614 7.72295 15 10.4844 15C13.2458 15 15.4844 12.7614 15.4844 10C15.4844 7.23858 13.2458 5 10.4844 5Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 10C10.8296 10 11.1094 10.2798 11.1094 10.625V13.125C11.1094 13.4702 10.8296 13.75 10.4844 13.75C10.1392 13.75 9.85938 13.4702 9.85938 13.125V10.625C9.85938 10.2798 10.1392 10 10.4844 10Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4844 7.92749C10.5707 7.92749 10.6406 7.85753 10.6406 7.77124C10.6406 7.68495 10.5707 7.61499 10.4844 7.61499V6.67749C9.8803 6.67749 9.39062 7.16718 9.39062 7.77124C9.39062 8.37531 9.8803 8.86499 10.4844 8.86499V7.92749Z" fill="white"/>
    </svg>
    </label>
                            <input type="time" id="time" placeholder="" required className="p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] "/>
                    </div>
                </div>
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                            <label for="country" className="">Country</label>
                            <select name="country" id="country" placeholder="United States" className=" p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] focus:outline-none focus:shadow-outline ">
                                <option value="united states" className=" bg-transparent">United States</option>
                            </select>
                </div>            
                <div class="w-full text-[.75rem] flex flex-col  mb-4">
                            <label for="country" className="">Time zone   Current Time: 10:02pm</label>
                            <select name="country" id="country" placeholder="United States" className=" p-2 rounded-lg bg-transparent border-[1px] placeholder:text-white text-white border-[#F0F0F0] border-solid  text-[1rem] focus:outline-none focus:shadow-outline ">
                                <option value="united states" className=" bg-transparent">Central Time - US & Canada</option>
                            </select>
                </div>  
                <div className="flex gap-4 justify-between">
                    <div className="flex gap-2">
                      
                      <button type="submit" className="p-2 bg-[#008080] text-[#ffffff]  rounded-lg sm:rounded-3xl block px-4 ">Create Group</button>
                      <button type="submit" className="p-2 bg-transpare text-[#ffffff]  rounded-3xl  px-4 border border-white border-solid hidden sm:block"> Cancel</button>
                    </div>
                    <button type="submit" className="p-2 bg-[#C84545] text-[#ffffff]  rounded-lg sm:rounded-3xl block px-4 ">Delete Account</button>
                </div>    
                </form>
                <div className=" sm:flex-1 gap-1 rounded-xl  justify-start p-4 border border-[#DDDDDD] border-solid">
                  <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
      <path d="M27.6562 5L28.2412 5.005C32.5312 5.081 37.0782 5.989 41.8862 7.742L42.6562 8.03V35.4L42.6483 35.53C42.629 35.6781 42.5767 35.82 42.4954 35.9453C42.4141 36.0706 42.3057 36.1761 42.1782 36.254L42.0622 36.314L27.6562 42.716V25C27.6562 24.7551 27.5663 24.5187 27.4035 24.3356C27.2408 24.1526 27.0165 24.0357 26.7733 24.007L26.6562 24H12.6562V8.029L13.4263 7.743C18.2233 5.993 22.7622 5.085 27.0462 5.006L27.6562 5Z" fill="#E31C5F" fill-opacity="0.2"/>
      <path d="M27.6562 1C33.2552 1 39.1743 2.275 45.4113 4.816C45.754 4.95562 46.0513 5.18761 46.2701 5.48616C46.4888 5.78471 46.6204 6.1381 46.6502 6.507L46.6562 6.67V35.4C46.6562 36.3285 46.3976 37.2387 45.9094 38.0286C45.4213 38.8184 44.7228 39.4568 43.8923 39.872L43.6872 39.969L28.0933 46.899L27.6562 47L25.1952 46H27.6462C27.6489 46 27.6514 45.9989 27.6532 45.997L27.6562 45.99V44.905L42.8742 38.142C43.344 37.9334 43.7522 37.6077 44.0599 37.196C44.3675 36.7844 44.5643 36.3006 44.6312 35.791L44.6502 35.597L44.6562 35.401V6.669L43.9642 6.391C38.2132 4.128 32.7773 3 27.6562 3C22.5352 3 17.0993 4.128 11.3483 6.391L10.6563 6.67L10.6552 24H8.65625V6.669C8.65607 6.29885 8.75862 5.93592 8.95247 5.6206C9.14633 5.30528 9.42389 5.04994 9.75425 4.883L9.90125 4.816C16.1392 2.275 22.0573 1 27.6562 1Z" fill="#E31C5F"/>
      <path d="M10 21H32C32.2652 21 32.5196 21.1054 32.7071 21.2929C32.8946 21.4804 33 21.7348 33 22V42.99C33 42.9927 32.9989 42.9952 32.9971 42.9971C32.9952 42.9989 32.9927 43 32.99 43H10C9.73478 43 9.48043 42.8946 9.29289 42.7071C9.10536 42.5196 9 42.2652 9 42V22C9 21.7348 9.10536 21.4804 9.29289 21.2929C9.48043 21.1054 9.73478 21 10 21Z" stroke="white" stroke-width="2"/>
      <path d="M27 22V17C27 15.4087 26.3679 13.8826 25.2426 12.7574C24.1174 11.6321 22.5913 11 21 11C19.4087 11 17.8826 11.6321 16.7574 12.7574C15.6321 13.8826 15 15.4087 15 17V22" stroke="white" stroke-width="2"/>
      <path d="M21 34C22.1046 34 23 33.1046 23 32C23 30.8954 22.1046 30 21 30C19.8954 30 19 30.8954 19 32C19 33.1046 19.8954 34 21 34Z" stroke="white" stroke-width="2"/>
                  </svg>
                  <h4 className="font-semibold nunito text-lg mb-4">Complete your verification process.</h4>
                  <p className="text-[.75rem] w-[90%] text-gray-300">You are required to provide means of ID for safety reasons.</p>
                  <hr className="my-4"/>
                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"className="mb-2">
                  <path d="M39.6562 16.9365V44.9375H9.65625V16.9365H39.6562Z" fill="#E31C5F" fill-opacity="0.2"/>
                  <path d="M24.6562 0.9375C30.0855 0.9375 34.5042 5.26417 34.6524 10.6576L34.6562 10.9375V12.9375H41.6562C42.7106 12.9375 43.5744 13.7534 43.6508 14.7882L43.6562 14.9375V46.9375C43.6562 47.9919 42.8404 48.8557 41.8055 48.932L41.6562 48.9375H7.65625C6.60189 48.9375 5.73808 48.1216 5.66174 47.0868L5.65625 46.9375V14.9375C5.65625 13.8831 6.47213 13.0193 7.50699 12.943L7.65625 12.9375H14.6562V10.9375C14.6562 5.41465 19.1334 0.9375 24.6562 0.9375ZM41.6562 14.9375H7.65625V46.9375H41.6562V14.9375ZM24.6562 28.9375C26.3131 28.9375 27.6562 30.2806 27.6562 31.9375C27.6562 33.5944 26.3131 34.9375 24.6562 34.9375C22.9994 34.9375 21.6562 33.5944 21.6562 31.9375C21.6562 30.2806 22.9994 28.9375 24.6562 28.9375ZM24.6562 30.9375C24.104 30.9375 23.6562 31.3852 23.6562 31.9375C23.6562 32.4898 24.104 32.9375 24.6562 32.9375C25.2085 32.9375 25.6562 32.4898 25.6562 31.9375C25.6562 31.3852 25.2085 30.9375 24.6562 30.9375ZM24.6562 2.9375C20.3213 2.9375 16.7917 6.38534 16.6601 10.6883L16.6562 10.9375V12.9375H32.6562V10.9375C32.6562 6.51922 29.0745 2.9375 24.6562 2.9375Z" fill="#E31C5F"/>
                  </svg>
                  <h4 className="font-semibold nunito text-lg mb-4">Which details can be edited?</h4>
                  <p className="text-[.75rem] w-[90%] text-gray-300">Details Mchango_ uses to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you verify your identity going forward.</p>
                  <hr className="my-4"/>
                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <g clip-path="url(#clip0_1697_343)">
                  <path d="M24.6571 9.78125C15.6031 9.78125 7.78211 15.8462 5.39711 24.3722L5.28711 24.7812L5.30011 24.8353C7.53511 33.4313 15.2681 39.6153 24.2901 39.7783L24.6571 39.7812C33.7101 39.7812 41.5321 33.7173 43.9171 25.1912L44.0271 24.7803L44.0141 24.7283C41.7801 16.1313 34.0461 9.94825 25.0241 9.78425L24.6571 9.78125Z" fill="#E31C5F" fill-opacity="0.2"/>
                  <path d="M24.6567 5.78125C35.8367 5.78125 45.4507 13.4862 48.0027 24.1943L48.1357 24.7812L48.0027 25.3682C45.4507 36.0763 35.8377 43.7812 24.6567 43.7812C13.4767 43.7812 3.86273 36.0762 1.31073 25.3692L1.17773 24.7822L1.22573 24.5662C3.64173 13.6652 13.3467 5.78125 24.6567 5.78125ZM24.6567 7.78125C14.5367 7.78125 5.81673 14.6683 3.34773 24.2903L3.22773 24.7822L3.25973 24.9223C5.54773 34.4863 13.9877 41.4352 23.9097 41.7682L24.2867 41.7783L24.6567 41.7812C34.8997 41.7812 43.7087 34.7253 46.0537 24.9202L46.0847 24.7803L46.0537 24.6423C43.7657 15.0763 35.3257 8.12725 25.4037 7.79425L25.0267 7.78425L24.6567 7.78125ZM24.6567 17.7812C25.576 17.7812 26.4862 17.9623 27.3355 18.3141C28.1848 18.6659 28.9565 19.1815 29.6065 19.8315C30.2565 20.4815 30.7721 21.2532 31.1239 22.1025C31.4757 22.9517 31.6567 23.862 31.6567 24.7812C31.6567 25.7005 31.4757 26.6108 31.1239 27.46C30.7721 28.3093 30.2565 29.081 29.6065 29.731C28.9565 30.381 28.1848 30.8966 27.3355 31.2484C26.4862 31.6002 25.576 31.7812 24.6567 31.7812C22.8002 31.7812 21.0197 31.0438 19.707 29.731C18.3942 28.4182 17.6567 26.6378 17.6567 24.7812C17.6567 22.9247 18.3942 21.1443 19.707 19.8315C21.0197 18.5187 22.8002 17.7812 24.6567 17.7812ZM24.6567 19.7812C23.3307 19.7812 22.0589 20.308 21.1212 21.2457C20.1835 22.1834 19.6567 23.4552 19.6567 24.7812C19.6567 26.1073 20.1835 27.3791 21.1212 28.3168C22.0589 29.2545 23.3307 29.7812 24.6567 29.7812C25.9828 29.7812 27.2546 29.2545 28.1923 28.3168C29.1299 27.3791 29.6567 26.1073 29.6567 24.7812C29.6567 23.4552 29.1299 22.1834 28.1923 21.2457C27.2546 20.308 25.9828 19.7812 24.6567 19.7812Z" fill="#E31C5F"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1697_343">
                  <rect width="48" height="48" fill="white" transform="translate(0.65625 0.78125)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <h4 className="font-semibold nunito text-lg mb-4">What info is shared with others?</h4>
                  <p className="text-[.75rem] w-[90%] text-gray-300">Mchango_ does not release any of your details. Be ,,,,,,</p>
                </div>            
            </section>
          </div>
        </div>
      </div>
    </>
       

    );
}
    
