import React from "react";

const Navbar = ({ filterMenu, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curEle) => {
            return (
              <nav
                className="btn-group__item"
                onClick={() => filterMenu( curEle )}>
                {curEle}
              </nav>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
