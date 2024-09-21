export default function ActiveGroups() {
    return(<>
     <table className="w-full overflow-hidden hidden sm:block">
        <thead className="">
            <tr className=" text-left bg-[#345A5A] rounded-full">
                <th className="uppercase  rounded-l-xl p-2">Group Name</th>
                <th className="uppercase p-2"> Collateral fee</th>
                <th className="uppercase p-2">Next contribution day</th>
                <th className="uppercase p-2">No of members</th>
                <th className="uppercase rounded-r-xl p-2">Date created</th>
            </tr>
        </thead>
        <tbody>
            <tr className="nunito ">
                <td className="p-2 py-4">Adventure fund</td>
                <td className="p-2 py-4 flex flex-wrap gap-1 items-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                    <span>13.6K ETH</span> 
                    <span className="text-[#00FF39]">{`(113.34%)`}</span>
                </td>
                <td className="p-2 py-4">31st August, 2023.</td>
                <td className="p-2 py-4">360</td>
                <td className="p-2 py-4">2nd January, 2023.</td>
            </tr>
            <tr className="nunito ">
                <td className="p-2 py-4">Adventure fund</td>
                <td className="p-2 py-4 flex flex-wrap gap-1 items-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                    <span>13.6K ETH</span> 
                    <span className="text-[#00FF39]">{`(113.34%)`}</span>
                </td>
                <td className="p-2 py-4">31st August, 2023.</td>
                <td className="p-2 py-4">360</td>
                <td className="p-2 py-4">2nd January, 2023.</td>
            </tr>
            <tr className="nunito ">
                <td className="p-2 py-4">Adventure fund</td>
                <td className="p-2 py-4 flex flex-wrap gap-1 items-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                    <span>13.6K ETH</span> 
                    <span className="text-[#00FF39]">{`(113.34%)`}</span>
                </td>
                <td className="p-2 py-4">31st August, 2023.</td>
                <td className="p-2 py-4">360</td>
                <td className="p-2 py-4">2nd January, 2023.</td>
            </tr>
            <tr className="nunito ">
                <td className="p-2 py-4">Adventure fund</td>
                <td className="p-2 py-4 flex flex-wrap gap-1 items-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                    <span>13.6K ETH</span> 
                    <span className="text-[#00FF39]">{`(113.34%)`}</span>
                </td>
                <td className="p-2 py-4">31st August, 2023.</td>
                <td className="p-2 py-4">360</td>
                <td className="p-2 py-4">2nd January, 2023.</td>
            </tr>
            <tr className="nunito ">
                <td className="p-2 py-4">Adventure fund</td>
                <td className="p-2 py-4 flex flex-wrap gap-1 items-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                    <span>13.6K ETH</span> 
                    <span className="text-[#00FF39]">{`(113.34%)`}</span>
                </td>
                <td className="p-2 py-4">31st August, 2023.</td>
                <td className="p-2 py-4">360</td>
                <td className="p-2 py-4">2nd January, 2023.</td>
            </tr>
        </tbody>
     </table>
     <section className="flex flex-col items-center gap-4">        
        <div className="flex sm:hidden gap-4 sm:px-12 bg-white text-black w-full  items-center p-4 rounded-xl">
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
                            
                        <p className="uppercase tracking-tighter text-[.60rem]"> Collateral fee</p>
                        <p className="uppercase tracking-tighter text-[.60rem]">Next contribution day</p>
                        <p className="uppercase tracking-tighter text-[.60rem]">No of members</p>
                        <p className="uppercase tracking-tighter text-[.60rem]">Date created</p>        
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
                        <p className="text-[.60rem] flex items-center">
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                            <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                            <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="black"/></svg> 
                            <span className="text-[.60rem] ">13.6K ETH</span> 
                            <span className="text-[.60rem] text-[#00FF39]">{`(113.34%)`}</span>
                        </p>
                        <p className="text-[.60rem] ">31st August, 2023.</p>
                        <p className="text-[.60rem] ">360</p>
                        <p className="text-[.60rem] ">2nd January, 2023.</p>
                    </div>  
                </div> 
            </div>
        </div>
        <div className="flex sm:hidden gap-4 sm:px-12 bg-white text-black w-full  items-center p-4 rounded-xl">
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
                            <p className="uppercase tracking-tighter text-[.60rem]"> Collateral fee</p>
                            <p className="uppercase tracking-tighter text-[.60rem]">Next contribution day</p>
                            <p className="uppercase tracking-tighter text-[.60rem]">No of members</p>
                            <p className="uppercase tracking-tighter text-[.60rem]">Date created</p>        
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
                            <p className="text-[.60rem] flex items-center">
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                                <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                                <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="black"/></svg> 
                                <span className="text-[.60rem] ">13.6K ETH</span> 
                                <span className="text-[.60rem] text-[#00FF39]">{`(113.34%)`}</span>
                            </p>
                            <p className="text-[.60rem] ">31st August, 2023.</p>
                            <p className="text-[.60rem] ">360</p>
                            <p className="text-[.60rem] ">2nd January, 2023.</p>
                        </div>  
                    </div> 
                </div>
        </div>
        <div className="flex sm:hidden gap-4 sm:px-12 bg-white text-black w-full  items-center p-4 rounded-xl">
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
                    <p className="uppercase tracking-tighter text-[.60rem]"> Collateral fee</p>
                    <p className="uppercase tracking-tighter text-[.60rem]">Next contribution day</p>
                    <p className="uppercase tracking-tighter text-[.60rem]">No of members</p>
                    <p className="uppercase tracking-tighter text-[.60rem]">Date created</p>        
                </div>
                <svg width="2" height="73" viewBox="0 0 2 73" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="73.0068" x2="1" y2="-1.52588e-05" stroke="url(#paint0_linear_2023_1115)"/>
                <defs>  <linearGradient id="paint0_linear_2023_1115" x1="1.5" y1="36.5034" x2="2.5" y2="36.5034" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#0C617E"/>
                </linearGradient>
                </defs>
                </svg>

                <div className="flex flex-col gap-1">
                    <p className="text-[.60rem] flex items-center">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                        <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white"/></svg> 
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                        <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="black"/></svg> 
                        <span className="text-[.60rem] ">13.6K ETH</span> 
                        <span className="text-[.60rem] text-[#00FF39]">{`(113.34%)`}</span>
                    </p>
                    <p className="text-[.60rem] ">31st August, 2023.</p>
                    <p className="text-[.60rem] ">360</p>
                    <p className="text-[.60rem] ">2nd January, 2023.</p></div>  
                </div> 
            </div>
        </div>
     </section>
    </>    
    );
}