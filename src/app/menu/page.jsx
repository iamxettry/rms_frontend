import SearchBar from "@/components/SearchBar";
import DashLineCenter from "@/components/dashedlined/DashLineCenter";
import DashLineRight from "@/components/dashedlined/DashLineRight";
import MenuList from "@/components/menu/MenuList";



import BackLight from "@/components/backLight/Backlight";

export const metadata = {
  title: "BubbleDubble | Menu",
  description: "Welcome to the menu page",
};

const Menu = () => {
  return (
    <>
      <div className="py-6 relative  after:absolute after:z-0  after:contents-[*] md:after:w-[300px] after:h-52 md:after:bg-hero-13 after:bg-cover after:bg-no-repeat md:after:blur-2xl md:after:opacity-50  after:top-80 after:left-40 ">
            <MenuList/>
        </div>
    </>
  );
};

export default Menu;
