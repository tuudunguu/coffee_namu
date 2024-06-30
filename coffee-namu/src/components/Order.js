import { Button } from "../components/button";

export const Order = ({ pictures, desc }) => {
  return (
    <div
      className="flex flex-col justify-center items-center
     h-fit w-fit lg:w-fit lg:h-fit  lg:border-2 lg:border-blue-600 lg:relative"
    >
      <img
        src={pictures}
        className=" w-full h-full lg:w-[1440px] lg:h-[531px]  lg:cover lg:absolute"
      />
      <div className="lg:h-full lg:w-full lg:flex lg:justify-end lg:items-center lg:pr-40 lg:absolute ">
        <div className="lg:h-full lg:w-52 lg:flex lg:flex-col lg:items-start lg:justify-center  ">
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
