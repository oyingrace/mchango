import Link from "next/link";

export default function GroupSuccess() {
  
  return (
   <>
    <div className="bg-transparent absolute top-0 left-0 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white flex flex-col gap-4 text-black w-max m-auto text-center p-8 rounded-xl h-max">
            <p className="">You have successfully created this group. . </p>
            <svg width="180" height="140" viewBox="0 0 204 164" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
            <path d="M102 14.0835L124.217 27.0965L151.717 27.0544L160.165 48.068L182.443 61.0129L173.896 82.0002L182.443 102.987L160.165 115.932L151.717 136.946L124.217 136.904L102 149.917L79.7829 136.904L52.2832 136.946L43.835 115.932L21.5565 102.987L30.1042 82.0002L21.5565 61.0129L43.835 48.068L52.2832 27.0544L79.7829 27.0965L102 14.0835Z" fill="#008080" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M72.3958 82.0002L93.5416 98.9793L135.833 65.021" fill="#008080"/>
            <path d="M72.3958 82.0002L93.5416 98.9793L135.833 65.021" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="">
                <Link href="/home" className="bg-[#008080] p-2 px-4 rounded-xl text-white ">Return home</Link>
            </div>
        </div>
    </div>
   </>
  );
}