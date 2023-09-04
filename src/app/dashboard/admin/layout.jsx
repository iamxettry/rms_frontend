import DashNav from "@/components/dashboard/DashNav";
import Link from "next/link";


export const metadata = {
    title: "BubbleDubble | Admin Dashboard",
    description: "Welcome to the admin dashboard",
  };

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className='absolute left-0 top-0 z-50 light_bg dark:bg-black flex w-full '>
        
            <DashNav/>
            <div className="absolute right-5 top-3">
              <Link href={"/"}>Home</Link>
            </div>
       
        <div className='flex-1 min-h-screen'>
            
        {children}
        </div>
   
      </section>
    )
  }