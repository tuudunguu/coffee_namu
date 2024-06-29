"use client";

import { Container } from "../components/container";
import { ThreeThings } from "../components/Navbar-three-things";
import { Button } from "../components/button";
import { Drawer } from "../components/drawer";
import { useState } from "react";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Container>
      <div className="w-full h-[70px] px-6 py-3 flex flex-row items-center border-2 border-blue-800 lg:w-full lg:h-fit lg:px-20 lg:py-3 lg:flex lg:flex-row lg:items-center lg:border-2 lg:border-blue-800">
        <div className="w-full h-full flex flex-1 flex-row ">
          <img
            src="/pictures/image 20.png"
            className="w-12 h-12 lg:w-16 lg:h-16"
          ></img>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-sm text-[#28282A] font-bold lg:text-xl lg:text-[#28282A] lg:font-bold">
              Coffee namu
            </h2>
            <h4 className="text-sm text-[#28282A] lg:text-xl lg:text-[#28282A] ">
              {" "}
              mongolia
            </h4>
          </div>
        </div>
        <div className=" hidden lg:w-full lg:h-full lg:flex lg:flex-1 lg:flex-row lg:py-[18px] lg:justify-end lg:gap-x-12">
          <div className="w-fit h-fit flex flex-row justify-between items-center gap-x-5">
            <ThreeThings image="/pictures/free_breakfast.png" words="Меню" />
            <ThreeThings image="/pictures/gift.png" words="Бонус" />
            <ThreeThings image="/pictures/cart.png" words="Бонус" />
          </div>
          <div className="flex flex-row justify-between items-center gap-x-3">
            <Button
              title="Нэвтрэх"
              color="text-[#AA714A]"
              background="bg-white"
            />
            <Button
              title="Бүртгүүлэх"
              color="text-[#FFFFFF]"
              background="bg-[#AA714A]"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-7 lg:hidden">
          <img
            src="/pictures/Icon.Button.png "
            className="w-6 h-6"
            onClick={handleDrawer}
          ></img>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawer} />
    </Container>
  );
};
