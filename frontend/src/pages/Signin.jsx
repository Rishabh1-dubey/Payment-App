import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { Bottom } from "../components/Bottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { SetUser } from "../redux/userSlice";
import toast from "react-hot-toast";


const Signin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(()=>{
  //   const token= localStorage.getItem("token");
  //   if(token){
  //     navigate("/dashboard")
  //   }
  // },[navigate])
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="absolute bottom-[580px] leading-tight  text-6xl font-bold ml-10">
          <span className="text-orange-500">Pay{""}</span>
          <span className="text-blue-600">Easy</span>{" "}
        </div>
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max- px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter you Information to create new Acccount"} />
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
            placeholder={"Ram1008@gmail.com"}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={" 12345678"}
          />
          <div className="pt-5 m-2">
            <ButtonSignIn
              onClick={async () => {
                try {
                  const user = { username, password };
                  // console.log(user);
                  const response = await axios.post(
                    "http://localhost:3001/api/v1/user/signin",
                      user,
                    
                  );
                  console.log(response.data)
                  if (response.data.message) {
                    toast.success(`Welcome back ${response.data.user.
                      firstName}`);
                  }

                 dispatch(SetUser(response.data.user));
                  const token = response.data.token;

                  localStorage.setItem("token", token);
                  navigate("/dashboard");
                } catch (error) {
                  console.log(error)
                  console.log("error while loggin in ");
                  toast.error(error.response.data.message);
                }
              }}
              label={"Sign in"}
            />
          </div>
          <Bottom
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
