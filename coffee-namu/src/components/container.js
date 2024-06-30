export const Container = ({ children }) => {
  return (
    <div className="bg-[#FDFDFD] w-screen h-screen">
      <div className=" lg:max-w-[1440px] lg:h-full lg:m-auto ">{children}</div>
    </div>
  );
};
