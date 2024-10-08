import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { Bottom } from "../components/Bottom";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <br></br>
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max- px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter you Information to create new Acccount"} />
          <Input
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            label={"FirstName"}
            placeholder={" Enter your FirstName"}
          />
          <Input
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            label={"Lastname"}
            placeholder={" Enter your lastName"}
          />
          <Input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            label={"Email"}
            placeholder={"Ram1008@gmail.com"}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"firstName"}
            placeholder={" 12345678"}
          />
          <div className="pt-5 m-2">
            <ButtonSignIn
              onClick={async() => {
                const responese =  await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    firstName,
                    lastName,
                    username,
                    password,
                  }
                );

                localStorage.setItem("token", responese.data.token);
                navigate("/dashboard")
              }}
              label={"Sign up"}
            />
          </div>
          <Bottom
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
