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
      <main className="">
        <div className="py-10 relative">
          <div className="flex  justify-center items-center flex-col h-48 gap-10 z-40">
            <h1 className="text-4xl md:text-6xl font-bold">Main Menu</h1>
            <p className="text-lg text-black/60 dark:text-white/70">
              Experience the Magic of Bubbles at BubbleDubble.
            </p>
          </div>
          <DashLineCenter />
         
          <BackLight style={'w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-orange-500 to-green-700 left-32 top-20 blur-[50px]'}/>
          <DashLineRight />
        </div>

        {/* search component */}
        <div className="my-6">
          <SearchBar />
        </div>
       
        <div className="my-5">
            <MenuList/>
        </div>
      </main>
    </>
  );
};

export default Menu;
