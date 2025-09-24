import React from "react";
import Hobby from "../components/Hobby";
import AuthForm from "./AuthForm";

const Hero = () => {
  return (
    <div className="bg-[#f6f5f8] flex flex-col sm:flex-row sm:items-start  ">
      <Hobby />
      <AuthForm />
    </div>
  );
};

export default Hero;
