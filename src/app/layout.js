import { Nunito, Inter, Poppins, Outfit, Open_Sans} from "next/font/google";
import "./globals.css";

const inter_init = Inter({ subsets: ["latin"],variable: "--font-inter" });
const nunito_init = Nunito({ 
  subsets: ["latin"], 
  weight:["200", "300", "400", "500", "600","700","800","900","1000"], 
  variable: "--font-nunito" 
});
const poppins_init = Poppins({ 
  subsets: ["latin"], 
  weight:["200", "300", "400", "500", "600","700","800","900"], 
  variable: "--font-poppins" 
});
const outfit_init = Outfit({ 
  subsets: ["latin"], 
  weight:["200", "300", "400", "500", "600","700","800","900"], 
  variable: "--font-outfit" 
});
const open_sans_init = Open_Sans({ 
  subsets: ["latin"], 
  weight:["300", "400", "500", "600","700","800"], 
  variable: "--font-outfit" 
});

export const metadata = {
  title: "Mchango",
  description: "We are Mchango_.A crypto cooperative contribution platform company that utilizes blockchain technology to empower social groups to collectively save, borrow, and lend. The company addresses the problems of financial exclusion, financial discipline, and trustworthy financial cooperation. Mchango_ aims to provide a unique solution to these problems through its platform, which fosters financial inclusion, empowers users to reach financial objectives, and creates a transparent and trustworthy financial cooperative environment using smart contracts and blockchain technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter_init.variable} ${nunito_init.variable} ${poppins_init.variable} ${outfit_init.variable} ${open_sans_init.variable} relative nunito`} >
        {children}             
      </body>   
    </html>
  );
}
