export const Container = ({ children }) => {
  return (
    <div className="bg-[#FDFDFD] w-screen h-screen">
      <div className="max-w-[1440px] m-auto">{children}</div>
    </div>
  );
};
