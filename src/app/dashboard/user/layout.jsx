import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className='absolute left-0  flex w-full gap-1'>
        
        <div>
        <Sidebar/>
        </div>
        <div className='flex-1 min-h-screen'>
            
        {children}
        </div>
   
      </section>
    )
  }