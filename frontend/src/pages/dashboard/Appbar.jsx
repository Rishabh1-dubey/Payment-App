import { IMG_LOGO } from "../../constent";
import { User } from "./Users";

export function Appbar({user}){

    return(
        <div className="shadow-md h-16 flex justify-between mt-2  ">
        <div className="flex flex-col justify-center h-full ml-4">
           <div className="">

            <img className="h-full w-24" src={IMG_LOGO}/>
           </div>
           
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1  mr-4">
                <div className="flex flex-col justify-center h-full text-xl ">
                <div>
       U
      </div>
                </div>
            </div>
        </div>
    </div>
    )
}