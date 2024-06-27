export const ThreeThings = ({ image, words }) => {
  return (
    <div className="w-fit h-fit py-3">
      <div className="w-fit h-fit flex flex-row justify-between items-end gap-x-1">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src={image} className="h-6 h-6" />
        </div>
        <h4 className="text-xs text-[#28282A] font-semibold">{words}</h4>
      </div>
    </div>
  );
};
