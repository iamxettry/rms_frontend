import { HiMoon } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentMode, setDarkMode } from "@/redux/features/darkModeSlice";
const DarkModeToggle = () => {
  let mode = useSelector(selectCurrentMode);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className="  flex  h-6 items-center justify-between p-1   rounded-full border-2 border-black/50 dark:border-white/70 relative cursor-pointer gap-2"
        onClick={() => dispatch(setDarkMode(!mode))}
      >
        <HiMoon className="text-black" />
        <MdOutlineLightMode className="text-white" />
        <div
          className={`w-4 h-4 rounded-full bg-black dark:bg-white absolute ${
            mode ? "left-1 " : "right-1"
          }`}
        />
      </div>
    </>
  );
};

export default DarkModeToggle;
