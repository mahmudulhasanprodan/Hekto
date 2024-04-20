import React from 'react'
import Logo from "../../assets/Logo.png"
import { NavLink } from "react-router-dom";
import Button from '../../CommonComponent/Button/Button';
import Flex from '../../CommonComponent/Flex/Flex';
import { IoSearch } from "react-icons/io5";


const Menu = () => {
  return (
    <>
      <div className="py-6">
        <div className="container">
            <Flex className={"items-center justify-between"}>
                <div>
                    <picture>
                        <img src={Logo} alt={Logo} />
                    </picture>
                </div>
                <Flex className={"items-center gap-x-8"}>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Home</NavLink>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Pages</NavLink>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Products</NavLink>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Blog</NavLink>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Shop</NavLink>
                    <NavLink to={"/"} className={"font-Lato text-base active:text-BtnColor"}>Contact</NavLink>
                </Flex>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="py-1 w-64 bg-SearchColor pl-3"/>
                    <Button
                    className={"py-2 px-4 bg-BtnColor text-CommonColor"}
                    title={<IoSearch />}
                    />
                </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default Menu
