import React from "react";

export default function Header() {
  return (
    <div className=" w-full px-5 py-5 bg-white mx-auto flex justify-between items-center shadow-md">
      <div className="flex gap-1 items-center whitespace-nowrap  ml-5 ">
        <div className="text-sm font-semibold bg-blue-600 text-white rounded-full border-2 px-2 py-1  ">
          B
        </div>

        <p className="font-semibold text-sm mr-20">Belling web App</p>
      </div>
      <p className="mr-5 text-blue-200 font-semibold ">|</p>
      <div className="w-full flex justify-between items-center ">
        <h3 className="text-sm font-semibold">Sales</h3>
        <div className="text-sm flex gap-2 items-center ">
          <div className=" text-sm font-semibold bg-blue-100 rounded-full border-2 px-2 py-1">
            S
          </div>
          <p className="font-semibold ">silico Design</p>
        </div>
      </div>
    </div>
  );
}
