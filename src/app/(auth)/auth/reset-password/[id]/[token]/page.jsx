"use client";

import { useResetPasswordMutation } from "@/redux/services/users/userApi";
import Logo from "@/utils/Logo";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiCheck, BiInfoCircle } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { toast } from "react-toastify";


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ResetPassword = ({params}) => {
 
  //password usestate
  const [newPassword, setNewPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  
  // confirm password usestate
  const [confPassword, setConfPassword] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

  const [enable, setEnable] = useState(false);

  const [resetPassword] =useResetPasswordMutation()
  const router=useRouter()
  const {id, token}=params
 
  useEffect(() => {
    const result = PWD_REGEX.test(newPassword);
    setValidPwd(result);
    const match = newPassword === confPassword;
    setValidMatch(match);
  }, [newPassword, confPassword]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button is somehow enable
    const v1 = PWD_REGEX.test(password);
    if ( !v1) {
      toast.error("Invalid Entry!")
      return;
    }
    //function to reset password
    const res = await resetPassword({ newPassword,confPassword, id, token });
    if (res.data) {
        console.log(res.data);
       router.push("/auth/login");
      toast.success(res.data.msg);
    }

    if (res.error) {
        if (res.error.error) {
            
            toast.error(res.error.error);
        }else{

            toast.error(res.error.data.errors.non_field_errors[0]);
        }

    }
  
  };
  useEffect(() => {
    if ( !validPwd || !validMatch ) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [ validPwd, validMatch]);


  return (
    <>
      <section className="bg-gray-50 dark:bg-black">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0">
          <Logo />
          <div className="shadow-gray-700 w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:bg-opacity-70 dark:border-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handleSubmit}>
                
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password:
                    <BiCheck
                      className={
                        validPwd
                          ? "inline-block text-lime-600 text-2xl "
                          : "hidden"
                      }
                    />
                      <RiCloseFill
                      className={
                        validPwd || !newPassword
                          ? "hidden"
                          : "inline-block text-xl text-red-600"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={newPassword}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                  />
                     <p
                    id="pwdnote"
                    className={
                      pwdFocus && newPassword && !validPwd
                        ? "rounded-md text-xs bg-green-100 text-black p-2 relative -bottom-2"
                        : "absolute -left-[999px]"
                    }
                  >
                    <BiInfoCircle />
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a
                    special caharacter. <br />
                    Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hastag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password:
                    <BiCheck
                      className={
                        validMatch && confPassword
                          ? "inline-block text-lime-600 text-2xl "
                          : "hidden"
                      }
                    />
                    <RiCloseFill
                      className={
                        validMatch || !confPassword
                          ? "hidden"
                          : "inline-block text-xl text-red-600"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="conmfirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                  />
                  <p
                    id="conmfirmnote"
                    className={
                      matchFocus && !validMatch
                        ? "rounded-md text-xs bg-green-100 text-black p-2 relative -bottom-2"
                        : "absolute -left-[999px]"
                    }
                  >
                    <BiInfoCircle />
                    Must match the first password field
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={enable}
                  className="disabled:bg-slate-400 disabled:text-slate-200 disabled:dark:bg-slate-500 disabled:dark:text-black/30 w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
