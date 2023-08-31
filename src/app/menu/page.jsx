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
      <main className=" ">
        <div className="z-10 py-10 relative after:absolute after:z-0  after:contents-[*] after:w-[600px] after:h-96 md:after:bg-hero-11 after:bg-contain after:bg-no-repeat md:after:blur-sm md:after:opacity-50 lg:after:blur-none after:top-0 after:right-0 ">
          <div className="flex  justify-center items-center flex-col h-48 gap-10 z-40 relative ">
            <h1 className="text-4xl md:text-6xl font-bold">Main Menu</h1>
            <p className="text-lg text-black/60 dark:text-white/70">
              Experience the Magic of Bubbles at BubbleDubble.
            </p>
          </div>
          <DashLineCenter />
         
          <BackLight style={'w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-orange-500 to-green-700 left-32 top-20 blur-[60px] md:blur-[100px] '}/>
          <DashLineRight />
        </div>

        {/* search component */}
        <div className="mt-10 ">
          <SearchBar />
        </div>
       
        <div className="py-6 relative after:absolute after:z-0  after:contents-[*] after:w-[300px] after:h-52 md:after:bg-hero-13 after:bg-cover after:bg-no-repeat md:after:blur-2xl md:after:opacity-50  after:top-80 after:left-40 ">
            <MenuList/>
        </div>
      </main>
    </>
  );
};

export default Menu;
