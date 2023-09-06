import React from "react";
import MenuNav from "./MenuNav";
import MenuItem from "./MenuItem";
import getMenu from "@/lib/getMenu";

const MenuList = async () => {
  const data =await getMenu()
  console.log(data);
  return (
    <>
      {/* menu nav category */}
      <div className="my-3">
        <MenuNav />
      </div>
      {/* menu list */}
      <div>
        <div className="grid grid-cols-2 rounded-lg md:grid-cols-3 lg:grid-cols-4">
          {/* map the items */}
          {
            data?.map((item)=>(

              <MenuItem key={item.key} item={item} />
            ))
          }
       
            
        </div>
      </div>
    </>
  );
};

export default MenuList;
