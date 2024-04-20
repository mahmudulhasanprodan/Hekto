import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { TbUser } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Flex from '../../CommonComponent/Flex/Flex';


const Header = () => {
  return (
    <>
      <div className="bg-HeaderColor py-3">
        <div className="container">
          <Flex
            className={
              "items-center justify-between cursor-pointer text-CommonColor"
            }
          >
            <Flex className={"items-center gap-x-12"}>
              <div className="flex items-center gap-x-2">
                <span>
                  <MdOutlineEmail />
                </span>
                <p className="font-JosefinFont text-sm font-semibold">
                  mhhasanul@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <BiPhoneCall />
                </span>
                <p className="font-JosefinFont text-sm font-semibold">
                  (12345)67890
                </p>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-6"}>
              <div className="flex items-center gap-x-1">
                <p className="font-JosefinFont text-sm font-semibold">
                  English
                </p>
                <span className="text-sm">
                  <FaChevronDown />
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-JosefinFont text-sm font-semibold">USD</p>
                <span className="text-sm">
                  <FaChevronDown />
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-JosefinFont text-sm font-semibold">Login</p>
                <span>
                  <TbUser />
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-JosefinFont text-sm font-semibold">
                  Wishlist
                </p>
                <span className="text-sm">
                  <FaHeart />
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <span className="ml-2">
                  <FaShoppingCart />
                </span>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Header
