import Link from "next/link"
const NavCard = ({item}) => {
  return (
   <>
   {
      <Link
      href={`${item.path}`}
       className='flex gap-5 items-center  text-black px-4 py-2 rounded-md my-4 text-xl relative text-opacity-80 cursor-pointer bg-transparent'>
          <i><item.icon/></i>
          <h1>{item.title}</h1>
        
      </Link>
   }
   </>
  )
}

export default NavCard