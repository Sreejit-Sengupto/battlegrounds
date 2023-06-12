import { NavLink, Outlet } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import cover from "/images/logo_navbar.png";
import BurgerMenu from "./BurgerMenu";
import Footer from "./Footer";
function Navbar() {
  const activeStyle = {
    color: "#f2a900",
  };
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-black lg:flex justify-between items-center font-teko text-xl hidden sticky top-0 left-0">
        <div className="p-3 flex justify-between w-[70%]">
          <div className="flex justify-center items-center">
            <img src={cover} alt="Bgmi logo" className="p-3" />
            <ul className="hidden lg:block text-[rgba(255,255,255,0.50)] mt-2">
              <NavLink
                className="mx-4 px-4 hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                HOME
              </NavLink>
              <NavLink
                className="mr-4 px-4 hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="/news"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                NEWS
              </NavLink>
              <NavLink
                className="mr-4 px-4 hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="/redeem"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                REDEEM
              </NavLink>
              <NavLink
                className="mr-4 px-4 hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="https://esports.battlegroundsmobileindia.com/"
                target="_blank"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                ESPORTS
              </NavLink>
              <NavLink
                className="mr-4 px-4 hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="https://help.battlegroundsmobileindia.com/hc/en/4-support/"
                target="_blank"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                SUPPORT
              </NavLink>
              <NavLink
                className="hover:text-white transition-all text-[1.5rem] cursor-pointer"
                to="/game_responsibly"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                GAME RESPONSIBLY
              </NavLink>
            </ul>
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

        <div className="hidden lg:flex w-[30%]">
          <a
            href="https://apps.apple.com/app/id1526436837?mt=8"
            className="bg-[#eca800] h-[6.4rem] py-[2.5rem] mr-[2px] w-[50%] text-center text-[2rem] font-bold text-[#333] cursor-pointer"
          >
            IOS Download
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pli=1"
            className="bg-[#eca800] h-[6.4rem] py-[2.5rem] w-[50%] text-center text-[2rem] font-bold text-[#333] cursor-pointer"
          >
            AOS Download
          </a>
        </div>
      </nav>
      <BurgerMenu />

      <Outlet />
      <Footer />
    </div>
  );
}
export default Navbar;
