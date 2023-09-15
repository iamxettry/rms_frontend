import { Btn } from "@/utils/Btn";
import { CardInfo } from "@/constant";
import BackLight from "./backLight/Backlight";
import Link from "next/link";

const InfoCard = () => {
  return (
    <>
      <div className="z-10 md:grid grid-cols-2 lg:grid-cols-3 relative after:absolute after:z-0  after:contents-[*] after:w-[600px] after:h-96 md:after:bg-hero-8   after:bg-contain after:bg-no-repeat after:bottom-0 after:right-0 md:after:blur-sm lg:after:blur-none">
        {CardInfo.map(({ title, id, desc, btn, logo, path ,available}) => (
          <div className="p-4 z-10 relative" key={id}>
            <div className=" md:w-auto md:max-w-xs px-4 py-4 bg-white border hover:border-orange-400 border-gray-200 rounded-lg shadow dark:bg-black dark:bg-opacity-50 dark:border-gray-600 dark:hover:border-green-400 dark:shadow dark:shadow-white  drop-shadow-md flex flex-col gap-5 justify-center items-center dark:hover:">
              <h1 className="w-full flex justify-center items-center text-3xl">
                {logo}
              </h1>

              <h5 className="mb-2 text-2xl md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>

              <p className="mb-3 text-center md:text-left font-normal text-gray-500 dark:text-gray-400">
                {desc.d1}
                <br className="hidden md:flex" />
                {desc.d2}
                <br className="hidden md:flex" />
                {desc.d3}
              </p>
              <div className="w-full flex justify-center items-center">
                <Link href={path} type="button" disabled className={`${available?"":" cursor-not-allowed disabled:bg-opacity-20"} relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800`}>
                  <span className="relative px-5 py-2.5  bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                    <Btn title={btn} available={available} />
                  </span>
                </Link>
              </div>
              <div className={`absolute ${available?"hidden":"bottom-12 right-0 border  rounded-md bg-orange-500 font-bold px-4 dark:border-white"}`}>

                <h1>* Soon</h1>
              </div>
            </div>
          </div>
        ))}

       <BackLight style={"w-32 h-32 bg-gradient-to-r from-orange-500 to-white right-32 bottom-64 blur-[100px]"}/>
      </div>
    </>
  );
};

export default InfoCard;
