import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { CiTrash } from "react-icons/ci";

export default function Items() {
  return (
    <div className="flex">
      <div
        className="max-w-[240px] h-[1124px] item
     bg-white border-t-2 mt-2  ml-2 rounded-lg"
      >
        <div className=" w-full flex flex-start px-4 py-2">
          <ul className="">
            <li className="w-[220px] p-3  font-semibold bg-blue-600 text-white rounded-lg mb-2  ">
              sales
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              {" "}
              products
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              services
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              purchase
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              Questions
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              Expenses
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              Customers
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              People
            </li>
            <li className="w-[140px] py-1  font-semibold   rounded-lg mb-2  ">
              Product
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-10 mt-4 bg-white w-full">
        <h3 className="px-7 pt-4 text-md font-semibold">Create Invoice...</h3>
        <div>
          <p className="px-7 py-4 text-md font-semibold whitespace-nowrap">
            Add company Logo
          </p>
          <div className="flex justify-center items-center flex-col border-2 py-5 mx-3 rounded-lg border-blue-200 bg-white">
            <MdOutlineFileUpload className="text-2xl text-blue-600" />
            <p className="text-sm text-slate-400 font-semibold mb-1">
              Max, file size 5MB
            </p>
            <span className="text-sm text-slate-400 font-semibold">
              Drap & Drop your file or{" "}
              <a href="#" className="text-blue-600 font-semibold ml-1">
                Browse
              </a>
            </span>
          </div>
        </div>

        <div className="mt-4 px-4">
          <h3 className="text-md font-semibold mb-4 underline border-gray-400">
            Customer Details
          </h3>
          <div className="flex justify-evenly items-center">
            <div className="flex-2">
              <p className="text-sm font-semibold text-slate-500 mb-2">
                Customer Name
              </p>
              <div className="flex items-center border-2 px -4 py-2 rounded-lg border-blue-400 w-[320px] ">
                <input
                  type="text"
                  placeholder="Search customers"
                  className="outline-none border-none text-md w-[280px] px-4"
                />
                <MdOutlineSearch className="text-lg text-slate-400 " />
              </div>
            </div>

            <div className="flex-1 ml-8 justify-center items-center">
              <p className="text-sm text-gray-500 fo font-semibold mb-2">
                Invoice
              </p>
              <input
                type="text"
                placeholder=""
                className="outline-none border-2 border-gray-300 px-3 py-2 rounded-lg"
              />
            </div>

            <div className="flex-1 ml-8 justify-center items-center">
              <p className="text-sm text-gray-500 fo font-semibold mb-2">
                Order Number
              </p>
              <input
                type="text"
                placeholder=""
                className="outline-none border-2 border-gray-300 px-3 py-2 rounded-lg"
                value={"1234567"}
              />
            </div>

            <div className="flex-1 ml-8 justify-center items-center">
              <p className="text-sm text-gray-500 fo font-semibold mb-2">
                invoice Number
              </p>
              <input
                type="date"
                placeholder=""
                className="outline-none border-2 border-gray-300 px-3 py-2 rounded-lg"
              />
            </div>

            <div className="flex-1 ml-8 justify-center items-center">
              <p className="text-sm text-gray-500 fo font-semibold mb-2">
                Due Date
              </p>
              <input
                type="date"
                placeholder=""
                className="outline-none border-2 border-gray-300 px-3 py-2 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 px-5">
          <h3 className="text-md font-semibold underline mb-4">
            Product Details
          </h3>
          <div className="flex gap-6 items-center">
            <div>
              <p className="text-sm font-semibold text-slate-500  ">
                Select Products
              </p>
              <input
                type="text"
                className="w-[320px] border-2 mt-2 px-3 py-2 outline-none rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Quality </p>
              <input
                type="number"
                className="border-2 px-3 py-2 mt-2 rounded-lg outline-none"
                placeholder="Quality..."
              />
            </div>
            <div className="bg-blue-600 px-7 py-2 rounded-lg text-white font-semibold mt-6">
              <span>+</span>
              <button className="ml-2">Add to Bill</button>
            </div>
          </div>
          <div>
            <div className="flex justify-evenly items-center mt-6 bg-slate-100 py-2 rounded-lg text-sm font-semibold">
              <h3>Product Name</h3>
              <h3>Quality</h3>
              <h3>Unit Price</h3>
              <h3>Discount(Total Amount)</h3>
              <h3>Net Amount</h3>
            </div>
            <div className=" flex items-center border-2 border-gray-100 mt-1 px-3 py-2 rounded-lg">
              <input
                type="text"
                className="w-[320px] outline-none border-none"
              />
              <input
                type="number"
                className="w-[100px] ml-2 px-3 py-2 border-2 border-gray-200 rounded-lg outline-none"
              />
              <input
                type="number"
                className="w-[100px] ml-20 px-3 py-2 border-2 border-gray-200 rounded-lg outline-none"
              />
              <input
                type="text"
                className="w-[180px] ml-20 px-3 py-2 border-2 border-gray-200 rounded-lg outline-none"
              />
              <p className="ml-28 font-semibold text-sm ">233335.00</p>
              <CiTrash className=" ml-24 text-xl text-red-500" />
            </div>
          </div>
          <div className="mt-6 mb-6 flex gap-4  items-center justify-evenly ">
            <div>
              <p className="text-md font-semibold mb-1  ">Customers News</p>
              <textarea className="w-[550px] h-[100px] rounded-lg px-4 py-3 border-2 border-gray-200 outline-none resize-none"></textarea>
            </div>
            <div className="w-full border-2 border-blue-100 rounded-lg bg-blue-100 p-4 mt-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold">Sub Total</p>
                <span>45346.00</span>
              </div>
              <div className="flex items-center gap-20 mb-6">
                <p>Discount</p>
                <input
                  type="number"
                  className="w-[150px] outline-none border-2 border-gray-200 p-1 rounded-md"
                />
              </div>
              <div className="flex gap-4 items-center mb-5">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-sm font-semibold ">TDS Applicable ?</p>
              </div>
              <div className="flex gap-4 items-center">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-sm font-semibold ">TCS Applicable ?</p>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  className="w-[250px] px-3 py-2 mt-4 rounded-lg "
                  placeholder="Select..."
                />
                <p>-400.00</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-lg font-semibold ">Total Amount :</p>
                <span className="text-md font-semibold">22600.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 flex gap-3 ml-[900px]">
          <button
            type="button"
            className="p-3 w-[100px] border-2 border-gray-200 text-slate-300s rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="p-3 w-[180px] border-2 bg-blue-600 border-blue-200 text-slate-300s rounded-md text-white"
          >
            Save and Send
          </button>
        </div>
      </div>
    </div>
  );
}
