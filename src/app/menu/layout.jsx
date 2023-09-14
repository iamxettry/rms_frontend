import SearchBar from "@/components/SearchBar";
import BackLight from "@/components/backLight/Backlight";
import DashLineCenter from "@/components/dashedlined/DashLineCenter";
import DashLineRight from "@/components/dashedlined/DashLineRight";
import Sidebar from "@/components/sidebar/Sidebar";

export default function MenuLahout({ children }) {
  return (
    <main className=" ">
      <div className="z-10 py-10 relative after:absolute after:z-0  after:contents-[*]  md:after:w-[600px] after:h-96 md:after:bg-hero-11 after:bg-contain after:bg-no-repeat md:after:blur-sm md:after:opacity-50 lg:after:blur-none after:top-0 after:right-0 ">
        <div className="flex  justify-center items-center flex-col h-48 gap-10 z-40 relative ">
          <h1 className="text-4xl md:text-6xl font-bold">Main Menu</h1>
          <p className="text-lg text-black/60 dark:text-white/70">
            Experience the Magic of Bubbles at BubbleDubble.
          </p>
        </div>
        <DashLineCenter />

        <BackLight
          style={
            "w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-orange-500 to-green-700 left-32 top-20 blur-[60px] md:blur-[100px] "
          }
        />
        <DashLineRight />
      </div>

      {/* search component */}
      <div className="mt-10 relative z-10">
        <SearchBar />
      </div>

      {children}
    </main>
  );
}
