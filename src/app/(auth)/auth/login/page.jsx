"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/redux/services/users/userApi";
import Link from "next/link";
import { getToken, storeToken } from "@/redux/features/localStorage";
import Logo from "@/utils/Logo";
import { toast } from "react-toastify";
import Cookies from  'js-cookie'

export default function Login() {
  const userRef = useRef();


  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const [errorMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();
  const [login, { isLoading, isError }] = useLoginUserMutation();
  const router = useRouter();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Cookies.set("loggedin",true)

    const userData = await login({ email, password });
    if (userData.data) {
      storeToken(userData.data.token);
      // dispatch(setCredentials({email, access_token }));
      setEmail("");
      setPwd("");
      if (userData.data.superUser) {
        router.push("/dashboard/admin");
      }else{
        
        router.push("/");
        }
      toast.success("Login Successfully.");
    }

    if (userData.error) {
      toast.error(userData.error.data.detail);
      setEmail("");
      setPwd("");
    }
  
  };
  // let { access_token } = getToken()

  // useEffect(()=>{

  //   dispatch(setCredentials({ access_token, email:user }));

  // },[access_token,dispatch])
  return (
    <>
      <main className="bg-green-50 dark:bg-black ">
        <div className="flex flex-col items-center justify-center md:px-6 py-8 mx-auto md:h-[78vh] lg:py-0">
          <Logo />
          <div className="shadow-gray-700 w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:bg-opacity-70 dark:border-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* email field  */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    ref={userRef}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                    placeholder="Email"
                  />
                </div>

                {/* password field  */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus: focus:border-none block w-full p-1.5 dark:bg-transparent dark:border-gray-600  dark:placeholder:text-white/60 dark:text-white dark:focus: dark:focus:border-none"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  // disabled
                  className="disabled:bg-slate-400 disabled:text-slate-200 disabled:dark:bg-slate-500 disabled:dark:text-black/30 w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/auth/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
