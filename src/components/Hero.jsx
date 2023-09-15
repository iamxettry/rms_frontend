import Image from "next/image";
import { hero } from "../../public/assets";
import { Btn } from "@/utils/Btn";
import { TbDiscount2 } from "react-icons/tb";
import DashLineRight from "./dashedlined/DashLineRight";
import DashLineMiddle from "./dashedlined/DashLineMiddle";
import DashLineLeft from "./dashedlined/DashLineLeft";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        {/* <!-- Carousel wrapper --> */}
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="flex-1 flex flex-col gap-5 relative">
            <h1 className="text-4xl md:text-6xl font-bold my-4 text-black/80 dark:text-white/80">
              it&apos;s not just Food,It&apos;s an Experience.
            </h1>
            <div className="w-full flex justify-start items-center">
              <Link href={'/menu'} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5  bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                  <Btn title="View Menu" path="/menu" available={true} />
                </span>
              </Link>
              {/* Book table */}
              {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <Btn title="Book A Table" path="/book-table" />
                </span>
              </button> */}
            </div>
            {/* dash line  */}
            <DashLineMiddle/>
           <DashLineLeft/>
          </div>
          {/* Image section */}
          <div className="flex-1 flex justify-center items-center relative">
            <Image
              src={hero}
              alt="Picture of the author"
              priority
            />
            <div className="absolute top-10 -left-5 ">
              <div className="bg-white dark:bg-black dark:bg-opacity-10  bg-opacity-50 p-2 rounded-md font-bold flex flex-col shadow-md shadow-gray-400 dark:shadow-gray-800 relative">
                <p className="m-0">5%</p>
                <TbDiscount2 className="absolute -top-2 right-10 text-2xl" />
                <p className="text-sm ">
                  {" "}
                  <span className="text-orange-500 font-bold">
                    Discount
                  </span>{" "}
                  for 1 week
                </p>
              </div>
            </div>

            <DashLineRight/>
          </div>
        </div>
        {/* <!-- Slider indicators --> */}

        {/* <!-- Slider controls --> */}
      </div>
    </>
  );
};

export default Hero;
