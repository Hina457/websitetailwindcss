   



import Image from "next/image";
import foun1 from "@/components/public/foun1.jpeg"
import foun2 from "@/components/public/foun2.jpeg"
import foun3 from "@/components/public/foun3.jpeg"
import foun4 from "@/components/public/foun4.jpeg"
import lip from "@/components/public/lipstick.jpeg"
import lip2 from "@/components/public/lipsstick2.jpeg"
import lip3 from "@/components/public/lipstick.jpeg"
import lip4 from "@/components/public/lipstick4.jpeg"
import lip5 from "@/components/public/lipstick5.jpeg"
import lip6 from "@/components/public/lipstick6.jpeg"
import lip7 from "@/components/public/lipstick7.jpeg"
import lip8 from "@/components/public/lipsstick2.jpeg"
import Lipstick from "@/components/public/lipstick123.jpg"
import banner4 from "@/components/public/banner4.jpeg"
import shadow12 from "@/components/public/shadow456.jpg"


export default function Makeup(){
    return(
        <div>
            {/* hero */}
            <div className="w-[1300px] h-auto bg-yellow-300">
                <Image src={Lipstick} alt="banner" height={500} width={1300}/>

            </div>
            
           
            
                {/* ------- makeup-------- */}
                <div className="flex items-center mt-24">
                <span className="flex-1 h-[2px] bg-slate-700"></span>
                <span className=" text-4xl font-bold font-serif text-black">Make-Up</span>
                <span className="flex-1 h-[2px] bg-slate-700"></span>
               </div>
            

            {/* boxes */}
             

        <div className="w-[1300px] h-auto  mt-10 grid grid-cols-4 gap-9">
            <div className="w-[300px] h-[350px] shadow-2xl">
            <Image src={foun1} alt="foun1 " width={300}/>
            <h1 className="font-serif text-gray-500 text-2xl">Foundation color-154</h1>
            <p className="font-bold">Rs.1,299.00</p>
            </div>

            <div className="w-[300px] h-[350px]  shadow-2xl">
            <Image src={foun2} alt="foun2" width={300}/>
            <h1 className="font-serif text-gray-500 text-2xl">Foundation color-843</h1>
            <p className=" font-bold">Rs.1,299.00</p>
            </div>

            <div className="w-[300px] h-[350px]  shadow-2xl">
            <Image src={foun3} alt="foun3" width={300}/>
            <h1 className="font-serif text-gray-500 text-2xl">Foundation color-1209</h1>
            <p className="font-bold">Rs.1,299.00</p>
            </div>

            <div className="w-[300px] h-[350px] shadow-2xl">
            <Image src={foun4} alt="foun4" width={300}/>
            <h1 className="font-serif text-gray-500 text-2xl">Foundation color-147</h1>
            <p className=" font-bold">Rs.1,299.00</p>
            </div>
    
        </div>
        <h1 className="text-6xl mt-16 font-serif font-bold">LipStick</h1>

        
            {/* boxes  lipstick*/}
             

            <div className="w-[1300px] h-auto mt-10 grid grid-cols-5 gap-10 shadow-2xl">
            <div className="w-[200px] h-[200px] "> <Image src={lip4} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip3} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={banner4} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip6} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip7} alt="make2"/></div>
        </div>


        <div className="w-[1300px] h-auto  mt-10 grid grid-cols-5 gap-10 shadow-2xl">
            <div className="w-[200px] h-[200px] b"><Image src={lip8} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip2} alt="make2"/></div>
            <div className="w-[200px] h-[200px] "><Image src={lip5} alt="make2"/></div>
            <div className="w-[200px] h-[200px]"><Image src={lip7} alt="make2"/></div>
        </div>

         <h1 className="text-5xl font-serif mt-20 font-bold">EYESHADOW...</h1>
         <Image src={shadow12} alt="shadowbanner" width={1300}/>

         

         
         <div className="justify-center items-center ml-[40%] mt-24">
                            <button className="w-[250px] h-16 border border-black rounded-[5px] pt-2 pb-2 mb-28">Show more</button>
                        </div>

           </div>

          
        
      
                 

          
    )

}