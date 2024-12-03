import React, { useEffect, useReducer, useState } from "react";
import { ButtonSignIn } from "../../components/ButtonSignIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [user, setuser] = useState([]);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    // Fetch users only when 'filter' changes
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
        setuser(response.data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [filter]); // Runs only when filter changes
  return (
    <>
      <div className="font-bold mt-6  ml-12"> Users</div>
      <div>
        <div className=" my-3 w-[400px] ml-4 ">
          <input
            onChange={(e) => {
              setfilter(e.target.value);
            }}
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
  const navigate= useNavigate()
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
        <ButtonSignIn onClick={(e)=>{navigate("/send?id=" + user._id +"&name="+user.firstName)}} label={"Send Money"} />
      </div>
    </div>
  );
}
