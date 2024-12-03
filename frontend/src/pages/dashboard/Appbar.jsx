import { Link } from "react-router-dom";
import { IMG_LOGO } from "../../constent";


export function Appbar({ user }) {
  return (
    <div className="shadow-md h-16 flex justify-between mt-2  ">
      <div className="flex flex-col justify-center h-full ml-4">
        <div className="">
          <img className="h-full w-24" src={IMG_LOGO} />
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-12">
        <button  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5  mb-4 mt-2   text-center hover:cursor-pointer">
        <Link to={"/signin"}>Signout</Link>
        
        </button>
          <div className="flex flex-col justify-center h-full mr-4  pb-2">Hello</div>
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1  mr-4">
          <div className="flex flex-col justify-center h-full text-xl ">
            <div>U</div>
          </div>
        </div>
      </div>
    </div>
  );
}
