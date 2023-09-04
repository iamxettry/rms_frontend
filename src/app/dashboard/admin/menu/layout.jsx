

export const metadata = {
    title: "Menu | Admin Dashboard",
    description: "Welcome to the admin dashboard",
  };

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className=' light_bg dark:bg-black  w-full '>
        <header className='text-2xl font-semibold py-4  border-b my-2 pl-4 md:pl-10'>
          <h1 className='text-black text-opacity-70 dark:text-white px-2'>Menu</h1>
          <p className='text-base text-opacity-50  text-black dark:text-white mb-4 flex flex-wrap px-2'>Manages and view the created menu easily </p>
          
        </header>
        <div className="pl-1 xs:pl-2 md:pl-4" >
            
        {children}
        </div>
   
      </section>
    )
  }