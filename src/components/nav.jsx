import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Nav({show}) {
  const inactiveLink = 'flex gap-4 p-2 pr-24 text-white hover:bg-highlight rounded-l-xl open_sans text-[1rem] w-max';
  const activeLink = inactiveLink+' bg-pink-700 text-white   hover:bg-pink-700  ';
  const inactiveIcon = 'w-6 h-6 text-gray';
  const activeIcon = inactiveIcon + ' text-white';
  const router = useRouter();
  const {pathname} = router;
  return (
    <aside className={(show?'left-0 fixed':'-left-full')+" top-0   text-gray-500   pt-2 fixed w-max    p-10 pl-4 pr-0  rounded-r-lg md:static  transition-all bg-[#011717] z-[999999999999999999]"}>
      <div className="mb-2 mr-4  w-full flex items-center  justify-between">
        <div className="flex items-center gap-2">
          <Image
          src="/mchango logo.png"
          width="24"
          height="24"
          alt="icon"
          />
          <h1 className="text-[white] text-[1.2rem] nunito ">Mchango_</h1>
          </div>        
      </div>
      <nav className="flex flex-col  gap-4 sm:gap-0 justify-center ">
        <Link href={'/home'} className={inactiveLink}>
        <svg width="28" height="28" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9997 3.63833L17.833 8.88833V18H15.4997V11H8.49967V18H6.16634V8.88833L11.9997 3.63833ZM11.9997 0.5L0.333008 11H3.83301V20.3333H10.833V13.3333H13.1663V20.3333H20.1663V11H23.6663L11.9997 0.5Z" fill="#008080"/>
        </svg>
          Home
        </Link>
        <Link href={'/chats'} className={inactiveLink}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66634 2.66659H21.333V16.6666H4.03134L2.66634 18.0316V2.66659ZM2.66634 0.333252C1.38301 0.333252 0.344674 1.38325 0.344674 2.66659L0.333008 23.6666L4.99967 18.9999H21.333C22.6163 18.9999 23.6663 17.9499 23.6663 16.6666V2.66659C23.6663 1.38325 22.6163 0.333252 21.333 0.333252H2.66634ZM4.99967 11.9999H14.333V14.3333H4.99967V11.9999ZM4.99967 8.49992H18.9997V10.8333H4.99967V8.49992ZM4.99967 4.99992H18.9997V7.33325H4.99967V4.99992Z" fill="#008080"/>
        </svg>
          Chats
        </Link>
        <Link href={'/groups'} className={inactiveLink}>
        <svg width="28" height="28" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49967 11.0416C5.76967 11.0416 0.333008 12.4066 0.333008 15.1249V17.1666H16.6663V15.1249C16.6663 12.4066 11.2297 11.0416 8.49967 11.0416ZM3.06301 14.8333C4.04301 14.1566 6.41134 13.3749 8.49967 13.3749C10.588 13.3749 12.9563 14.1566 13.9363 14.8333H3.06301ZM8.49967 8.99992C10.7513 8.99992 12.583 7.16825 12.583 4.91658C12.583 2.66492 10.7513 0.833252 8.49967 0.833252C6.24801 0.833252 4.41634 2.66492 4.41634 4.91658C4.41634 7.16825 6.24801 8.99992 8.49967 8.99992ZM8.49967 3.16659C9.46801 3.16659 10.2497 3.94825 10.2497 4.91658C10.2497 5.88492 9.46801 6.66658 8.49967 6.66658C7.53134 6.66658 6.74967 5.88492 6.74967 4.91658C6.74967 3.94825 7.53134 3.16659 8.49967 3.16659ZM16.713 11.1116C18.0663 12.0916 18.9997 13.3983 18.9997 15.1249V17.1666H23.6663V15.1249C23.6663 12.7683 19.583 11.4266 16.713 11.1116ZM15.4997 8.99992C17.7513 8.99992 19.583 7.16825 19.583 4.91658C19.583 2.66492 17.7513 0.833252 15.4997 0.833252C14.8697 0.833252 14.2863 0.984919 13.7497 1.24159C14.4847 2.27992 14.9163 3.55159 14.9163 4.91658C14.9163 6.28159 14.4847 7.55325 13.7497 8.59158C14.2863 8.84825 14.8697 8.99992 15.4997 8.99992Z" fill="#008080"/>
        </svg>
        Groups
        </Link>
        <Link href={'/upgrade'} className={inactiveLink}>
        <svg width="28" height="28" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.66634 17.0001V19.3334H0.333008V17.0001H9.66634ZM3.83301 5.32175V14.6667H6.16634V5.32175H9.66634L4.99967 0.666748L0.333008 5.32175H3.83301Z" fill="#008080"/>
        </svg>
          Upgrade
        </Link>
        <Link href={'/profile'} className={inactiveLink}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 19.5C2 18.1739 2.52678 16.9021 3.46447 15.9645C4.40215 15.0268 5.67392 14.5 7 14.5H17C18.3261 14.5 19.5979 15.0268 20.5355 15.9645C21.4732 16.9021 22 18.1739 22 19.5C22 20.163 21.7366 20.7989 21.2678 21.2678C20.7989 21.7366 20.163 22 19.5 22H4.5C3.83696 22 3.20107 21.7366 2.73223 21.2678C2.26339 20.7989 2 20.163 2 19.5Z" stroke="#008080" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 9.5C14.0711 9.5 15.75 7.82107 15.75 5.75C15.75 3.67893 14.0711 2 12 2C9.92893 2 8.25 3.67893 8.25 5.75C8.25 7.82107 9.92893 9.5 12 9.5Z" stroke="#008080" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
          Profile
        </Link>
        <div className="h-[5rem]"></div>
        <div className="msbox rounded-2xl w-[200px] flex flex-col items-center gap-2 py-4">
          <Image
          src="/microsoftteams.png"
          width="100"
          height="150"
          alt="icon"
          className="mt-[-6rem]"/>
          <p className="text-white p-2 text-center text-[.75rem]">Want to upgrade to pro to get
          more exciting features?</p>
          <Link href="/upgrade" className="text-white bg-black p-2 px-4 text-[.75rem] rounded-2xl">Upgrade</Link>
        </div>
      </nav>
    </aside>
  );
}