

import Home from "./Home/page"
import MegaDeals from "./Mega/page"
import Makeup from "./Makeup/page"
import Skincare from "./Skincare/page"
import Customer from "./CustomerReviews/page"

export default function Main(){
  return(
    <div>
     <Home/>
     <MegaDeals/>
     <Makeup/>
     <Customer/>
     <Skincare/>
    </div>
  )
}