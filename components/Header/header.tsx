
import { AiOutlineShopping } from "react-icons/ai";
import { Bs0CircleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Link from "next/link"

export default function Header(){
    return(
        <div>
             <div className="navber3 w-[1300px] h-[40px] bg-black">
                <p className="text-center font-sans text-white pt-2 font-semibold">Rs.199 Delivery Charges All Over Pakistan</p>
               </div>
            <div className="navcenter w-[1300px] h-[100px] flex gap-80">
                <div className="left w-[300px] h-[80px] ml-14">
                    <p className="text-6xl font-serif mt-7">DR.Rashel</p>
                </div>
                <div className="right  w-[600px] h-[80px]  flex ml-12">
                    <div className="shop flex gap-3 pt-12">
                    <AiOutlineShopping className="size-[20px] mt-1"/>
                    <p className="text-[15px] font-serif text-gray-400 mt-1">Shopping cart</p>
                    <div className="pt-2 pl-3 text-red-400 mr-5">
                    <Bs0CircleFill />
                    </div>
                    
                    </div>
                    <div className="sign ml-5 mt-4 ">
                        <input className="border border-black rounded-[5px]" type="text" placeholder="search..." id="search-box"/>
                        <button id="search-button"><CiSearch /></button>
                        <p className="font-serif text-[15px] mt-3 text-gray-400">Sign In or Create an Account</p>

                    </div>
                </div>
            </div>
            <div className="navber3 w-[1300px] h-[60px] bg-black">

                <ul className="text-white flex justify-center gap-9 font-serif pt-4 ">
                    <li> <Link href="./Home" className="underline hover:text-gray-400 transition-colors duration-300">HOME</Link></li>
                    <li> <Link href="./Mega" className="underline hover:text-gray-400 transition-colors duration-300">MEGA DEALS</Link></li>
                    <li> <Link href="./Skincare" className="underline hover:text-gray-400 transition-colors duration-300">SKIN CARE</Link></li>
                    <li> <Link href="./Makeup" className="underline hover:text-gray-400 transition-colors duration-300">MAKEUP</Link></li>
                    <li> <Link href="./CustomerReviews" className="underline hover:text-gray-400 transition-colors duration-300">HONEST CUSTOMER REVIEWS</Link></li>
                </ul>
            </div>

        </div>
    )
}




