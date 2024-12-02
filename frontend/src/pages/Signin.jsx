import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { Bottom } from "../components/Bottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
const  navigate= useNavigate()
  const[username , firstName]=useState("");
  const[password,setPassword]= useState("")
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max- px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter you Information to create new Acccount"} />
          <Input label={"Email"} placeholder={"Ram1008@gmail.com"} />
          <Input label={"Password"} placeholder={" 12345678"} />
          <div className="pt-5 m-2">
            <ButtonSignIn   onClick={async()=>{
try {
  const responese =await axios.post("http://localhost:3000/api/v1/user/signin",{
    username,
    password
  })

  const token = responese.data
  localStorage.setItem("token",token)
  navigate("/dashboard")
} catch (error) {
  console.log("error while loggin in ")
}
            }} label={"Sign in"} />
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
