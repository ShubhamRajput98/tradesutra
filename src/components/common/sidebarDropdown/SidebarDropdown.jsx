/* eslint-disable react/prop-types */
import { useState } from "react";
import { ArrowIcon } from "../icons/Icons";
import { NavLink } from "react-router-dom";

export const SidebarDropdown = ({
  heading,
  menu,
  id,
  openId,
  setOpenId,
  Icon,
  path,
}) => {
  let [open, setOpen] = useState(true);

  // open and close dropdown
  function handleClick() {
    setOpenId(id);
    if (openId === id) {
      setOpen(!open);
      if (open) sessionStorage.removeItem("openId");
      else sessionStorage.setItem("openId", openId);
    } else {
      setOpen(true);
    }
  }

  return (
    <div
      className={`${
        openId === id && open ? "bg-bgDarkBlue" : "bg-bgBlue"
      } flex flex-col select-none`}
    >
      {/* dropdown heading */}
      <div
        className="flex cursor-pointer items-center justify-between gap-4 pl-6 pr-6 p-4"
        onClick={handleClick}
      >
        {/* icon */}
        <Icon
          className={openId === id && open ? "fill-textWhite" : "fill-textBlur"}
        />

        {/* name */}
        {heading !== "Dashboard" ? (
          <p
            className={`${
              openId === id && open ? "text-textWhite" : "text-textBlur"
            } font-heading flex-1 justify-self-start`}
          >
            {heading}
          </p>
        ) : (
          <NavLink
            className={`${
              openId === id && open ? "text-textWhite" : "text-textBlur"
            } font-heading flex-1 justify-self-start w-full h-full dashboard`}
            to={path}
            style={{ background: "transparent" }}
          >
            {heading}
          </NavLink>
        )}

        {/* arrow icon */}
        {heading !== "Dashboard" ? (
          <ArrowIcon
            className={
              openId === id && open
                ? "fill-textWhite rotate-0 transition-all duration-[0.3s]"
                : "fill-textBlur rotate-[-90deg] transition-all duration-[0.3s]"
            }
          />
        ) : (
          ""
        )}
      </div>

      {/* dropdown menus */}
      {menu ? (
        <div
          className={`${
            openId === id && open ? "dropdown-menu open" : "dropdown-menu close"
          } flex flex-col`}
        >
          <ul>
            {menu?.map((item) => (
              <li key={item.value} className="pl-6">
                <NavLink
                  to={item.path}
                  className='py-1 pl-9 pr-6 font-text relative block text-textGreayWhite cursor-pointer hover:bg-bgBlue hover:text-textWhite before:content-[""] hover:before:absolute hover:before:h-full hover:before:w-1 hover:before:bg-white hover:before:left-0 hover:before:top-0'
                >
                  {item.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
