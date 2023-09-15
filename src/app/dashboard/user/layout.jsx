import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
    children, 
  }) {
    return (
      <div className="relative min-h-screen w-screen -left-[15%] ">
        <section className='absolute left-3  flex w-full gap-1'>
        
        <div className="pl-4 md:p-0">
        <Sidebar/>
        </div>
        <div className='flex-1 min-h-screen'>
            
        {children}
        </div>
   
      </section>
      </div>
    )
  }