import React from "react";
import MenuNav from "./MenuNav";
import MenuItem from "./MenuItem";

const MenuList = () => {
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
            <MenuItem  title="Seafood Salad" />
            <MenuItem  title="Momo" />
            <MenuItem  title="Avocada salad"/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
            <MenuItem  title="Fish "/>
        </div>
      </div>
    </>
  );
};

export default MenuList;
