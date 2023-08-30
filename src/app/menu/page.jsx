import MenuNav from "@/components/MenuNav";
import DashLineCenter from "@/components/dashedlined/DashLineCenter";
import DashLineRight from "@/components/dashedlined/DashLineRight";
import React from "react";

export const metadata = {
  title: 'BubbleDubble | Menu',
  description: "Welcome to the menu page"
}
 
const Menu = () => {
  return (
    <>
      <main className="">
        <div className="py-10 relative">
          <div className="flex  justify-center items-center flex-col h-80 gap-10 z-40">
            <h1 className="text-6xl font-bold">Main Menu</h1>
            <p className="text-lg text-black/60 dark:text-white/70">
              Experience the Magic of Bubbles at BubbleDubble.
            </p>
          </div>
          <DashLineCenter />
          <DashLineRight />
        </div>
          <div className="my-3">
          <MenuNav />
          </div>
      </main>
    </>
  );
};

export default Menu;
