import { Order } from "../components/Order";

export const SecondSectionOrder = () => {
  return (
    <div className="h-fit w-fit  flex flex-col lg:flex lg:flex-row lg:h-fit lg:w-fit">
      <div>
        <Order
          pictures="/pictures/image 10.png"
          desc="Яг одоо захиалаад авах."
        />
      </div>
    </div>
  );
};
