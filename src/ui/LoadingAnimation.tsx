export default function LoadingAnimation() {
  return (
    <div className="flex flex-col animate-pulse px-2 justify-center w-full h-full bg-sky-200 rounded">
      <div className="wrap w-[70%] m-auto space-y-3">
        <div className="round">
          <div className="h-20 w-20 bg-gray-300 rounded-full"></div>
        </div>

        <h3 className="h-4 bg-gray-300 rounded-full w-[70%]"></h3>

        <ul className="mt-5 space-y-3 mx-auto">
          <li className="w-full h-4 bg-gray-300 rounded-full"></li>
          <li className="w-full h-4 bg-gray-300 rounded-full"></li>
          <li className="w-full h-4 bg-gray-300 rounded-full"></li>
          <li className="w-full h-4 bg-gray-300 rounded-full"></li>
        </ul>
      </div>
    </div>
  );
}
