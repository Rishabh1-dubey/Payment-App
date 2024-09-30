import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { Bottom } from "../components/Bottom";

const Signin = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max- px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter you Information to create new Acccount"} />
          <Input label={"Email"} placeholder={"Ram1008@gmail.com"} />
          <Input label={"FirstName"} placeholder={" 12345678"} />
          <div className="pt-5 m-2">
            <ButtonSignIn label={"Sign up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
