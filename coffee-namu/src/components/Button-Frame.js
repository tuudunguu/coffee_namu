const ButtonFrame = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[40px] h-[40px] rounded-[50%] dark:hover:bg-slate-800 hover:bg-slate-200 flex justify-center items-center"
    >
      {children}
    </div>
  );
};
