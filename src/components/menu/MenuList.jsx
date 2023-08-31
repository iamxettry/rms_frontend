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
            <MenuItem id={1} title="Seafood Salad" />
            <MenuItem id={2} title="Momo" />
            <MenuItem id={3} title="Avocada salad"/>
            <MenuItem id={4} title="Fish "/>
        </div>
      </div>
    </>
  );
};

export default MenuList;
