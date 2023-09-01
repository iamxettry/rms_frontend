

export const metadata = {
    title: "Menu | Admin Dashboard",
    description: "Welcome to the admin dashboard",
  };

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className=' light_bg dark:bg-black  w-full '>
        <header className='text-2xl text-gray-900 dark:text-white font-semibold py-4 border-b my-2 pl-10'>
          <h1 className='text-black text-opacity-70 '>Menu</h1>
          <p className='text-base text-opacity-50 text-black mb-4'>Manages and view the created menu easily</p>
        </header>
        <div className="px-10" >
            
        {children}
        </div>
   
      </section>
    )
  }