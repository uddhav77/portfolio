import React, { useState } from "react";
import { SiUbiquiti } from "react-icons/si";
import { SiDisroot } from "react-icons/si";
import { FaHouzz } from "react-icons/fa";
import { FaAmilia } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { BsMenuButtonWide } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toogleNavbar = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div className="flex p-8 justify-between items-center bg-black text-white">
        <div className="text-2xl flex gap-1">
          <SiUbiquiti /> <SiDisroot /> <SiDisroot /> <FaHouzz /> <FaAmilia />{" "}
          <FaVimeoV />
        </div>
        <div className="flex flex-col items-end">
          <ul className="md:flex hidden gap-6 text-md cursor-pointer">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
          <div className="md:hidden">
            <button onClick={toogleNavbar}>
              {isOpen ? <AiOutlineCloseCircle /> : <BsMenuButtonWide />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
