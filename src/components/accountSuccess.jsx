import Link from "next/link";

export default function AccountSuccess() {
  
  return (
   <>
    <div className="bg-transparent absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white flex flex-col gap-4 text-black w-[20rem] m-auto text-center p-8 rounded-xl h-max">
            <svg width="92" height="89" viewBox="0 0 92 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[-5rem] m-auto">
            <path d="M90.5 44.5C90.5 68.2018 70.6239 87.5 46 87.5C21.3761 87.5 1.5 68.2018 1.5 44.5C1.5 20.7982 21.3761 1.5 46 1.5C70.6239 1.5 90.5 20.7982 90.5 44.5Z" fill="#00FFFF" stroke="#A87BFF" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M70 26.6621L41.9974 67L20 45.8785L24.1505 40.1405L41.0636 56.3757L64.9416 22L70 26.6621Z" fill="white"/>
            </svg>

            <h4 className="font-bold text-2xl ">Success</h4>
            <p className="text-sm">You have successfully created an account on Mchango_. Let's explore different savings group now. </p>
            <div className="">
                <Link href="/home" className="msbox p-2 px-4 rounded-lg text-white ">Go to your dashboard</Link>
            </div>
        </div>
    </div>
   </>
  );
}