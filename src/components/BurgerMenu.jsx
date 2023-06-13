import React from "react";
import { NavLink, Link } from "react-router-dom";
import cover from "/images/logo_navbar.png";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

function BurgerMenu() {
  const activeStyle = {
    color: "#f2a900",
  };
  const [show, setShow] = React.useState(false);
  function handleClick() {
    setShow((prevState) => !prevState);
  }
  console.log(show);
  return (
    <>
      <nav className="bg-black flex justify-between items-center font-teko text-xl sticky top-0 lg:hidden">
        <div className="p-3 flex justify-between w-[70%]">
          <div className="flex justify-center items-center">
            <img src={cover} alt="Bgmi logo" className="p-3" />
          </div>

          <div className="flex justify-center items-center">
            <a href="facebook">
              <RiFacebookFill className="text-white text-2xl mr-4" />
            </a>
            <a href="instagram">
              <BsInstagram className="text-white text-2xl mx-4" />
            </a>
            <a href="youtube">
              <FiYoutube className="text-white text-2xl mx-4" />
            </a>
          </div>
        </div>
        <button
          className="flex flex-col justify-center items-center w-[5rem] h-[3.5rem] bg-transparent border-none cursor-pointer"
          onClick={handleClick}
        >
          <span className="block w-10 h-[4px] bg-white mb-1"></span>
          <span className="block w-10 h-[4px] bg-white mb-1"></span>
          <span className="block w-10 h-[4px] bg-white mb-1"></span>
        </button>
      </nav>
      {show && (
        <div className="flex flex-col justify-center items-center bg-black font-teko text-white">
          <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                HOME
              </NavLink>
              <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="/news"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                NEWS
              </NavLink>
              <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="/redeem"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                REDEEM
              </NavLink>
              <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="https://esports.battlegroundsmobileindia.com/"
                target="_blank"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                ESPORTS
              </NavLink>
              <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="https://help.battlegroundsmobileindia.com/hc/en/4-support/"
                target="_blank"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                SUPPORT
              </NavLink>
              <NavLink
                className=" hover:text-white transition-all text-[1.5rem] cursor-pointer w-full flex justify-center items-center border border-[#666] p-2"
                to="/game_responsibly"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                GAME RESPONSIBLY
              </NavLink>
              <NavLink
                className="text-black transition-all text-[1.5rem] cursor-pointer bg-[#f2a900] w-full h-12 flex justify-center items-center mb-[1px]"
                to="https://play.google.com/store/apps/details?id=com.pubg.imobile"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                AOS DOWNLOAD
              </NavLink>
              <NavLink
                className="text-black transition-all text-[1.5rem] cursor-pointer bg-[#f2a900] w-full h-12 flex justify-center items-center"
                to="https://apps.apple.com/app/id1526436837?mt=8"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                onClick={() => {setShow(false)}}
              >
                IOS DOWNLOAD
              </NavLink>
        </div>
      )}
    </>
  );
}
export default BurgerMenu;
