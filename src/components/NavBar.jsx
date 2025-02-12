import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useState } from "react";
const NavBar = () => {
  const NavBarItem = ({ title, classprops }) => {
    return <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;AiOutlineClose
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="" className="w-32 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden justify-between items-center list-none flex-row flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
          return <NavBarItem title={item} key={item}/>;
        })}

        <li
          className={`mx-4 cursor-pointer bg-[#2952e3] rounded-full py-2 px-7 hover:bg-[#2546bd]`}
        >
          Login
        </li>
      </ul>

      <div className=" flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            size={28}
            className="text-white md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {/* {toggleMenu && (
          <AiOutlineClose
            size={28}
            className="text-white md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        )} */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
