import { MdExitToApp } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../components/button";
import { ButtonFrame } from "../components/Button-Frame";

export const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-[100%] ${
        isOpen ? "translate-x-[-300px]" : "translate-x-[0px]"
      } h-screen w-[300px] p-6 shadow-md bg-[#fff] dark:bg-[#000] duration-300 z-50 flex flex-col justify-start items-center gap-y-6`}
    >
      <div className=" h-fit w-full flex flex-row justify-end items center">
        <button onClick={closeDrawer}>
          <MdExitToApp size={24} color="black" />
        </button>
      </div>
      <div className="h-fit w-full flex flex-col items-center pb-9 border-b-2 border-gray-200 gap-y-10">
        <div className="h-fit w-full flex flex-row justify-start items-start pl-6 gap-x-4">
          <FaHome color="black" size={24} />
          <h2 className="text-black text-base">Меню</h2>
        </div>
        <div className="h-fit w-full flex flex-row justify-start items-start pl-6 gap-x-4">
          <FaGift color="black" size={24} />
          <h2 className="text-black text-base">Бонус</h2>
        </div>
        <div className="h-fit w-full flex flex-row justify-start items-start pl-6 gap-x-4">
          <FaShoppingCart color="black" size={24} />
          <h2 className="text-black text-base">Захиалга</h2>
        </div>
      </div>
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <Button title="Нэвтрэх" color="text-[#AA714A]" background="bg-white" />

        <Button
          title="Бүртгүүлэх"
          color="text-[#FFFFFF]"
          background="bg-[#AA714A]"
        />
      </div>
    </div>
  );
};
