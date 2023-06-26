import { useState } from "react";
import "./DetailPageMenu.css";
import Print from "./Print";

const DetailPageMenu = ({ onCloseMenu }) => {
  const menuItemClick = () => {
    onCloseMenu();
  };
  return (
    <>
      <div className="menu-window-container">
        <Print onClick={menuItemClick} />
      </div>
    </>
  );
};

export default DetailPageMenu;
