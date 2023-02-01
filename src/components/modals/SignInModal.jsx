import React, { useState, useEffect } from "react";
import { close } from "../Svgs";
import { InputLabel, InputField, InputCheckbox } from "../Inputs";
import { Btn1 } from "../Buttons";

export default function SignInModal(props) {
  const [form, setForm] = useState({
    emailPhone: "",
    password: undefined,
  });

  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[600px] sm:max-w-[420px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative mb-[30px] flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">
            Sign in
          </h2>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
            onClick={props.close}
          >
            {close}
          </div>
        </div>

        {/*<div className="relative flex w-full justify-center">
          <div className="my-5 h-[0.5px] w-full bg-[#757575]"></div>
          <div className="absolute top-[6px] bg-white">or</div>
        </div>
        */}

        {/* form */}
        <div>
          <div className="">
            <InputLabel>Email address / Phone number</InputLabel>
            <InputField
              type="text"
              onChange={(e) => setForm({ ...form, emailPhone: e.target.value })}
            />
          </div>

          <div className="mt-5">
            <InputLabel>Password</InputLabel>
            <InputField
              type="text"
              onChange={() => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="mt-5 flex justify-between">
            <div className="flex flex-row">
              <span>
                <InputCheckbox
                  label=""
                  name=""
                  value=""
                  checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                />
              </span>
              <span className="mr-1 font-sans text-sm font-bold leading-6 text-black">
                Remember me
              </span>
            </div>

            <span
              className="cursor-pointer text-center font-sans text-sm leading-5 text-[#757575] hover:underline"
              onClick={() => props.setRegisterModalToggle()}
            >
              Forgot your password?
            </span>
          </div>

          <div className="mt-5">
            <Btn1>Sign in</Btn1>
          </div>
          <div className="mt-[10px] text-center">
            <span className="mr-1 font-sans text-sm leading-6 text-black">
              Not a member yet?
            </span>
            <span
              className="cursor-pointer text-center font-sans text-sm font-bold leading-5 text-[#757575] hover:underline"
              onClick={() => props.setRegisterModalToggle()}
            >
              Register now
            </span>
          </div>
          <div className="mt-5">
            <p className="text-center font-sans text-xs leading-5 text-[#757575]">
              By signing in, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
