import Pagination from "./pagination";

export default function ParticipantsList() {
    return(<>
    <section className="py-12">
        <header className="mb-6">
            <h3 className="font-semibold text-3xl text-[#00F0FF]">Participants list</h3>
        </header>
        <table className="w-full overflow-hidden text-[.8em] sm:text-[1em]">
            <thead className="">
                <tr className="text-xs text-left text-gray-500 rounded-full border-b border-gray-300 border-solid">
                    <th className=""><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5099 6.35L13.5699 2.92C12.5999 2.36 11.3999 2.36 10.4199 2.92L4.48992 6.35C3.51992 6.91 2.91992 7.95 2.91992 9.08V15.92C2.91992 17.04 3.51992 18.08 4.48992 18.65L10.4299 22.08C11.3999 22.64 12.5999 22.64 13.5799 22.08L19.5199 18.65C20.4899 18.09 21.0899 17.05 21.0899 15.92V9.08C21.0799 7.95 20.4799 6.92 19.5099 6.35ZM11.9999 7.84C13.2899 7.84 14.3299 8.88 14.3299 10.17C14.3299 11.46 13.2899 12.5 11.9999 12.5C10.7099 12.5 9.66992 11.46 9.66992 10.17C9.66992 8.89 10.7099 7.84 11.9999 7.84ZM14.6799 17.16H9.31992C8.50992 17.16 8.03992 16.26 8.48992 15.59C9.16992 14.58 10.4899 13.9 11.9999 13.9C13.5099 13.9 14.8299 14.58 15.5099 15.59C15.9599 16.25 15.4799 17.16 14.6799 17.16Z" fill="#7E92A2"/>
                    </svg>
                    </th>
                    <th className=""> Name</th>
                    <th className="">Date Joined</th>
                </tr>
            </thead>
            <tbody>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1576_4241)">
                        <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                        <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1576_4241">
                        <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>
                <tr className="nunito border-b border-gray-300 border-solid ">
                    <td className="p-2 py-4"><svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1576_4241)">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="#EAEEF4"/>
                    <rect y="0.228516" width="27" height="29" rx="13.5" fill="#EAEEF4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1576_4241">
                    <rect y="0.228516" width="27" height="28.5429" rx="13.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </td>
                    <td className="p-2 py-4">Deanna Ademola</td>
                    <td className="p-2 py-4">23rd November, 1920</td>
                </tr>              
            </tbody>
        </table>
        <Pagination/>
    </section>
    </>
       

    );
}