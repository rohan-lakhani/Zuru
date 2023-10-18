import React from "react";
import "./navbarMenu.css";
import { Link } from "react-router-dom";

const NavbarMenu = ({ title, menubarItem }) => {
  return (
    <li className="nav_item">
      <span className="nav_link" style={{ cursor: "pointer" }}>
        {title}
      </span>

      <div className="menu_items_container">
        <ul className="menu_items">
          {menubarItem.map((item) => (
            <li className="menu_item" key={item}>
              <Link to={`/${title.replaceAll(" ", "_").toLowerCase()}/${item.replaceAll(" ", "_").toLowerCase()}`} className="menu_link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavbarMenu;
