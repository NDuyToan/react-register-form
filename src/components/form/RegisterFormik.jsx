import React from "react";
import InputFormik from "../input/inputFormik";

const RegisterFormik = () => {
  return (
    <form className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputFormik
          name="username"
          placeholder="Enter your username"
          id="username"
          type="text"
        ></InputFormik>
        <p className="text-red-500 text-sm">message error </p>
      </div>
      <button
        className={`w-full bg-blue-500 text-white rounded-lg mt-5 font-semibold p-5 `}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterFormik;
