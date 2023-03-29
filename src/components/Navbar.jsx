import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/viber.jpg";
import { useSelector, useDispatch } from "react-redux";
import { arabic, english, kurdish } from "../slice/SliceLanguge";
import { dark, light } from "../slice/themeSlice";
function Navbar() {
  const navbar = useSelector((state) => state.lang.navbar);
  const isDark = useSelector((state) => state.theme.value);
  const [menuBtn, setMenuBtn] = useState(true);
  const dispatch = useDispatch();
  function handlClick() {
    if (!isDark) {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  }
  return (
    <nav
      className={`flex w-full justify-between items-start p-[0.5rem]   ${
        isDark ? `text-big-stone-100 bg-big-stone-900` : ` text-big-stone-900 `
      }`}
    >
      <div className="flex justify-start items-center ">
        <img
          src={logo}
          alt="yahya hiwa image"
          className="w-[30px] h-[30px] ml-2
           md:w-[40px] md:h-[40px] md:ml-4 rounded-[50%]
           border p-[0px] border-big-stone-900 hover:border-big-stone-600 transition-all"
        />
        <h1
          className={`uppercase font-semibold text-xs
          sm:text-sm md:text-lg md:font-bold
         ml-1 ${
           isDark
             ? `text-big-stone-100 hover:text-big-stone-200`
             : `text-big-stone-900 hover:text-big-stone-600`
         } `}
        >
          yahya hiwa
        </h1>
      </div>
      <div className="flex items-start justify-center">
        <button
          className="ml-2 md:scale-125 md:ml-3 pt-[7px] mr-1 sm:mr-2"
          type="button"
          onClick={handlClick}
        >
          {isDark ? (
            <span className="text-big-stone-100 font-semibold">
              <i
                className="fa-solid fa-lightbulb 
            text-yellow-300 mr-1"
              ></i>
            </span>
          ) : (
            <span className="text-big-stone-900 font-semibold">
              <i className="fa-regular fa-lightbulb mr-1"></i>
            </span>
          )}
        </button>
        <div
          className={`flex flex-col items-center ${
            menuBtn ? `h-8` : ``
          } overflow-hidden gap-2 `}
        >
          <button
            onClick={() => {
              if (!menuBtn) setMenuBtn(true);
              else setMenuBtn(false);
            }}
          >
            <i className="fa-solid fa-bars  scale-125 mt-3"></i>
          </button>
          <select
            className="md:mt-0 rounded ml-2 bg-transparent outline-none font-semibold "
            onChange={(e) => {
              if (e.target.value === "English") {
                dispatch(english());
              } else if (e.target.value === "کوردی") {
                dispatch(kurdish());
              } else if (e.target.value === "عربي") {
                dispatch(arabic());
              }
            }}
          >
            {navbar.langName.map((value, index) => {
              return (
                <option
                  className="bg-[#f7f7f7] outline-none font-semibold rtl"
                  key={index}
                >
                  {value}
                </option>
              );
            })}
          </select>
          {navbar.link.name.map((value, index) => {
            return (
              <Link key={index} to={navbar.link.to[index]}>
                <span className="text-xs rounded md:text-lg  font-semibold inline-block uppercase">
                  {value}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
