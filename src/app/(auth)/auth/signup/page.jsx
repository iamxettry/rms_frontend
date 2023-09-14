"use client";
import React, { useRef, useState, useEffect } from "react";
import { BiCheck, BiInfoCircle } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
import validator from "validator";
import Link from "next/link";
import Logo from "@/utils/Logo";
import { useRegisterUserMutation } from "@/redux/services/users/userApi";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  // username usestate
  const [username, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // email usestate
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailError, setEmailError] = useState("");

  //password usestate
  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // confirm password usestate
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [success, setSuccess] = useState(false);

  const [registerUser, { isError, isLoading, isSuccess }] =
    useRegisterUserMutation();

  const dispath = useDispatch();
  const router = useRouter();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);
  useEffect(() => {
    if (validator.isEmail(email)) {
      setValidEmail(email);
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Invalid Email!");
      setValidEmail("");
    }
  }, [email, validEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button is some how enabled
    const u1 = USER_REGEX.test(username);
    const v1 = PWD_REGEX.test(password);
    if (!u1 || !v1) {
      toast.error("Invalid Entry!");
      return;
    }
    //function for user register

    const res = await registerUser({ username, email, password });

    if (res.data) {
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
      router.push("/auth/login");
      toast.success("Register Successfully.");
    }

    if (res.error) {
      if (res.error.data.username) {
        toast.error("Register failed:" + res.error.data.username);
      } else if (res.error.data.email) {
        toast.error("Register failed:" + res.error.data.username);
      }
    }
  };
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    if (!validName || !validPwd || !validMatch || !validEmail) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [validName, validPwd, validEmail, validMatch]);

  return (
    <>
      <main className="bg-green-50 dark:bg-black  ">
        <div className="flex flex-col items-center justify-center md:px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo />
          <div className="shadow-gray-700 w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:bg-opacity-70 dark:border-white">
            <div className="p-6 my-2 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* username field  */}
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username :
                    <span
                      className={
                        validName ? " text-lime-600 text-2xl " : "hidden"
                      }
                    >
                      <BiCheck className="inline-block" />
                    </span>
                    <span
                      className={
                        validName || !username
                          ? "hidden"
                          : "text-xl text-red-600"
                      }
                    >
                      <RiCloseFill className="inline-block" />
                    </span>
                  </label>
                  <input
                    ref={userRef}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                    placeholder="Username"
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && username && !validName
                        ? "rounded-md text-xs bg-green-100 text-black p-2 relative -bottom-2"
                        : "absolute -left-[999px]"
                    }
                  >
                    <BiInfoCircle className="text-lg" />
                    4 to 24 characters. <br />
                    Must begin with a letter <br />
                    letter, numbers, underscores, hyphens allowed.
                  </p>
                </div>
                {/* Email field  */}

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                    <span
                      className={
                        validEmail ? " text-lime-600 text-2xl " : "hidden"
                      }
                    >
                      <BiCheck className="inline-block" />
                    </span>
                    <span
                      className={
                        validEmail || !email ? "hidden" : "text-xl text-red-600"
                      }
                    >
                      <RiCloseFill className="inline-block" />
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                    placeholder="name@example.com"
                  />
                  <p
                    id="uidnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "rounded-md text-xs bg-green-100 text-black p-2 relative -bottom-2"
                        : "absolute -left-[999px]"
                    }
                  >
                    <BiInfoCircle className="text-lg" />
                    {emailError}
                  </p>
                </div>
                {/* Password field  */}

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password :
                    <BiCheck
                      className={
                        validPwd
                          ? "inline-block text-lime-600 text-2xl "
                          : "hidden"
                      }
                    />
                    <RiCloseFill
                      className={
                        validPwd || !password
                          ? "hidden"
                          : "inline-block text-xl text-red-600"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && password && !validPwd
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
                {/* Conmfirm password field  */}

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password :
                    <BiCheck
                      className={
                        validMatch && matchPwd
                          ? "inline-block text-lime-600 text-2xl "
                          : "hidden"
                      }
                    />
                    <RiCloseFill
                      className={
                        validMatch || !matchPwd
                          ? "hidden"
                          : "inline-block text-xl text-red-600"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={matchPwd}
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="conmfirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    placeholder="••••••••"
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
                {/* Checkbox field  */}

                {/* submit button s */}
                <button
                  // type="submit"
                  disabled={enable}
                  className={`disabled:bg-slate-400 disabled:text-slate-200 disabled:dark:bg-slate-500 disabled:dark:text-black/30 w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800`}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="font-medium dark:text-white text-black hover:underline "
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
