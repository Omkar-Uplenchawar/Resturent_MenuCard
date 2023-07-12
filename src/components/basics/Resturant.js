import React,{ useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCart from "./menuCart";
import Navbar from "./Navbar";

const uniqueList =  [
  ... new Set(
  Menu.map((curEle) => {
    return curEle.category;
  })
  ),
  "All",
];

 

const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);

  const filterMenu = (category) => {
      if (category ==="All") {
        setMenuData(Menu)
        return;
      }

      const uniqueList = Menu.filter((curEle) =>{
        return curEle.category === category
      });
      setMenuData(uniqueList);
  };

  return (
    <>
      <Navbar filterMenu={filterMenu} menuList={menuList} />
      <MenuCart menuData={menuData}/>
    </>
  );
};

export default Resturant;
   