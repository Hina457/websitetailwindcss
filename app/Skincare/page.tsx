
import skin56 from "@/components/public/skin56.jpg"
import skin1 from "@/components/public/skin1.svg"
import skin2 from "@/components/public/skin2.svg"
import skin3 from "@/components/public/skin3.webp"
import skin4 from "@/components/public/skin4.webp"
import Image from "next/image"
import Drrashel from "@/components/public/dr Rashel.webp"
import dr1 from "@/components/public/dr1.png"
import dr2 from "@/components/public/dr2.png"
import dr3 from "@/components/public/dr3.jpeg"
export default function Skincare (){
    return(
        <div>
            <div className="w-[1300px] h-auto bg-red-700">
                <Image src={skin56} alt="pic" width={1300} />
             
            </div>
            <h1 className="text-semibold text-4xl text-center font-serif mt-11">Recently Viewed Products</h1>
            <p className="font-sans text-lg text-center">Dr Rashel Cosmetics provides solutions for all types of skin concerns.<br/> All products are dermatologically tested and is safe to use, Contains natural ingredients and is Cruelty-free</p>

            <div className="w-[1300px] h-auto flex gap-6 mt-10">
                <div className="w-[300px] h-[300px] ">
                    <Image src={skin1} alt="pic1"/>
                </div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin2} alt="pic1"/></div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin3} alt="pic1"/></div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin4} alt="pic1"/></div>

                <div className="w-[300px] h-[300px] ">
                    <Image src={skin1} alt="pic1"/>
                </div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin2} alt="pic1"/></div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin3} alt="pic1"/></div>
                <div className="w-[300px] h-[300px] ">  <Image src={skin4} alt="pic1"/></div>


            </div>
           <div className=" flex gap-9 justify-center">
            <Image src={dr1} alt="dr1" width={110} height={110}/>
            <Image src={dr2} alt="dr2" width={130} height={130}/>
            <Image src={dr3} alt="dr3" width={110} height={110}/>
           </div>
            <Image src={Drrashel} alt="bannerr" width={1300}/>
            <div className="w-[1300px] h-[300px] ">
            <h1 className="text-center text-5xl font-serif pt-24">Dr.Rashel Official</h1>
            <p className="text-center font-serif text-2xl">Dr Rashel Cosmetics provides solutions for all types of skin concerns. All products are dermatologically tested and is safe to use, Contains natural ingredients and is Cruelty-free.</p>
         </div>
   
            

            
        </div>
    )
}