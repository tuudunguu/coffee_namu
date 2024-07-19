import { Button } from "../components/button";

export const Order = ({ pictures, desc }) => {
  return (
    <div className="w-full h-fit  border-2 border-red-700">
      <img src={pictures} className="h-[531px] w-full object-cover relative" />
      <div className="h-full w-full flex justify-end items-center pr-40 absolute">
        <div className="h-full w-52 flex flex-col items-start justify-center  ">
          <h2 className="text-[32px] font-bold">{desc}</h2>
          <Button
            title="Захиалах"
            color="text-[#AA714A]"
            background="bg-white"
            TextSize="text-xs"
            icon="/pictures/Vector.png"
          />
        </div>
      </div>
    </div>
  );
};
