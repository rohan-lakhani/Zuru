import * as React from "react";
import "./selectMenu.css";
import Popper from "../../../../components/popper/Popper";

export default function SelectMenu({
  items,
  title,
  menuWidth,
  selectedValue,
  handleFilter,
  changeSelectedValue,
}) {
  const referenceElement = React.useRef();
  const [isSelectMenuOpen, setIsSelectMenuOpen] = React.useState(false);
  const selectedItem = items.find((item) => item.id === selectedValue);

  return (
    <div className="select_menu">
      <div className="select_menu_inner" ref={referenceElement}>
        <p
          className="selected"
          onClick={(e) => {
            e.stopPropagation();
            setIsSelectMenuOpen(!isSelectMenuOpen);
          }}
        >
          <span style={{ display: "flex" }}>
            {title === "country" && (
              <img
                src={`https://flagcdn.com/w20/${selectedItem?.id.toLowerCase()}.png`}
                alt="country_flag"
                style={{ marginRight: "10px" }}
              />
            )}
            {selectedItem?.name}
          </span>
          <span
            className="dropdown_icon"
            style={{
              transform: isSelectMenuOpen ? "rotate(90deg)" : "rotate(0)",
            }}
          ></span>
        </p>
      </div>

      <Popper
        referenceElement={referenceElement.current}
        isSelectMenuOpen={isSelectMenuOpen}
        width={menuWidth}
      >
        {title === "country" && (
          <div className="searchbar">
            <input
              type="text"
              className="search_input"
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => handleFilter(e.target.value)}
            />
          </div>
        )}
        <ul className="select_menu_items">
          {items.map((item) => {
            return (
              <li
                className={`select_menu_item ${
                  selectedItem.name === item.name ? "selected_item" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  changeSelectedValue(item);
                  setIsSelectMenuOpen(!isSelectMenuOpen);
                }}
              >
                {title === "country" && (
                  <img
                    src={`https://flagcdn.com/w20/${item?.id.toLowerCase()}.png`}
                    alt="country_flag"
                    style={{ marginRight: "10px" }}
                  />
                )}
                {item.name}
              </li>
            );
          })}
        </ul>
      </Popper>
    </div>
  );
}