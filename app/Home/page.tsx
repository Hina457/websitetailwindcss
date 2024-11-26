

import Image from "next/image";
import banner2 from "@/components/public/banner2.webp"
export default function Home(){
    return(
        <div>
        
             {/* hero section */}

             <div className="w-[1300px] h-[600px] ">
             <Image src={banner2} alt="bannerpicture" height={600}/>

         </div>

         <div className="w-[1300px] h-[300px] ">
            <h1 className="text-center text-5xl font-serif pt-24">Dr.Rashel Official</h1>
            <p className="text-center font-serif text-2xl">Dr Rashel Cosmetics provides solutions for all types of skin concerns. All products are dermatologically tested and is safe to use, Contains natural ingredients and is Cruelty-free.</p>
         </div>
   


        </div>
    )
}