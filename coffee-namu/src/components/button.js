export const Button = ({ title, color, background, TextSize, icon }) => {
 
  const check = () => {
    if (icon) {
      return <img src={icon} className="h-5 w-5" alt="icon" />;
    }
    return null;
  };

  return (
    <div
      className={`${background} cursor-pointer hover:opacity-50 hover:bg-slate-300 w-fit flex justify-center items-center px-4 py-2 rounded-xl border-2 border-[#AA714A]`}
    >
      <div className="flex flex-row items-center gap-2">
        
        <h2 className={`${color} ${TextSize}`}>{title}</h2>
        {check()}
      </div>
    </div>
  );
};
