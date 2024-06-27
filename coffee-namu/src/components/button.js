export const Button = ({ title, color, background }) => {
  return (
    <div
      className={`${background} w-fit flex justify-center items-center  px-4 py-2 rounded-xl border-2 border-[#AA714A]`}
    >
      <h2 className={`${color} text-xs `}>{title}</h2>
    </div>
  );
};