import React, { useEffect, useReducer, useState } from "react";
import { ButtonSignIn } from "../../components/ButtonSignIn";
import axios from "axios";

const Users = () => {
  const [user, setuser] = useState([]);
  const[filter, setfilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).then((response) => {
      setuser(response.data.user);
    },[filter]);
  });
  return (
    <>
      <div className="font-bold mt-6 ml-2"> Users</div>
      <div>
        <div className=" my-3 ">
          <input
          onChange={(e)=>{setfilter(e.target.value)}}
            type="text"
            placeholder="Search...."
            className="w-full px-2 py-1 ml-3 border rounded border-slate-200"
          />
        </div>
      </div>
      <div>
        {user.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;

export function User({ user }) {
  return (
    <div className="  flex justify-between  ml-6">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-2 mr-2 mb-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
          </div>
          <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mr-10">
        <ButtonSignIn label={"Send Money"} />
      </div>
    </div>
  );
}
