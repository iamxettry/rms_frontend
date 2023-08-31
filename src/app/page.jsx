import ExploreMenu from "@/components/ExploreMenu";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import BackLight from "@/components/backLight/Backlight";
import DashLineLeft from "@/components/dashedlined/DashLineLeft";
import DashLineRight from "@/components/dashedlined/DashLineRight";

export default function Home() {
  return (
    <main >
      {/* hero section */}
      <div className="mt-4">
        <Hero />
      </div>
      <div className="py-20">
        
          <InfoCard/>
      
      </div>
      {/* Explore Menu */}
      <section className='w-full py-2 bg-green-50 dark:bg-black relative'>
        <DashLineLeft/>
        <BackLight style={"w-32 h-32 bg-gradient-to-r from-white/75 to-white left-32 bottom-64 blur-[100px]"} />
        <ExploreMenu/>
        <DashLineRight/>
      </section>
    </main>
  );
}
