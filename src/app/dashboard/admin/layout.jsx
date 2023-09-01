import DashNav from "@/components/dashboard/DashNav";


export const metadata = {
    title: "BubbleDubble | Admin Dashboard",
    description: "Welcome to the admin dashboard",
  };

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className='absolute left-0 top-0 z-50 light_bg dark:bg-black flex w-full gap-1'>
        
            <DashNav/>
       
        <div className='flex-1 min-h-screen'>
            
        {children}
        </div>
   
      </section>
    )
  }