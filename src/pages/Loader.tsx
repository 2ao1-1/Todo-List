export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full inset-0 z-50">
      <div className="newtons-cradle relative flex items-center justify-center w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
        <div className="dot first"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot last"></div>
      </div>
    </div>
  );
}
