export const Container = ({ background, children }) => {
  return (
    <div className={`${background} w-screen`}>
      <div className="max-w-[1440px]  m-auto ">{children}</div>
    </div>
  );
};
