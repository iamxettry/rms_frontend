import Link from "next/link";
const NavCard = ({ item, toggle ,setToggle}) => {
  return (
    <>
      {
        <Link
          href={`${item.path}`}
          className={`flex gap-2 md:gap-5 items-center  text-black px-4 py-2 rounded-md my-4 text-xl relative group text-opacity-80 cursor-pointer bg-transparent dark:text-white/50 ${
            toggle ? " text-white text-opacity-100 md:text-black md:text-opacity-80" : "justify-center md:justify-start "
          }`}
          onClick={(prev)=>setToggle(!prev)}
        >
          <i>
            <item.icon />
          </i>
          <h1 className={` ${toggle ? " text-sm xs:text-base md:text-xl" : "hidden md:flex"}`}>{item.title}</h1>
          
        </Link>
      }
    </>
  );
};

export default NavCard;
