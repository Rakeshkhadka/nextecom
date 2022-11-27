import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="">
      <header className="py-4 bg-pink-100 shadow-sm lg:mx-40 lg:bg-white">
        <div className="container flex items-center justify-between">
          {/* <!-- logo --> */}
          <Link href="/" className="block w-32">
            <h1>Ecom</h1>
          </Link>
          {/* <a href="#" className="block w-32">
                <img src="images/logo.svg" alt="logo" className="w-full"/>
                
            </a> */}
          {/* <!-- logo end --> */}

          {/* <!-- searchbar --> */}
          <div className="relative hidden w-full xl:max-w-xl lg:max-w-lg lg:flex">
            <span className="absolute text-lg text-gray-400 left-4 top-3">
              <i className="fas fa-search"></i>
            </span>
            <input
              style={{
                border: "1px solid red",
                ":focus": {
                  border: "30px solid red",
                },
              }}
              type="text"
              className="w-full px-3 py-3 pl-12 ring-0 rounded-l-md focus:ring-0 focus:ring-red-700 hover:ring-red-700 focus:border-4 focus:border-red-700"
              placeholder="search"
            />
            <button
              type="submit"
              className="px-8 font-medium text-white transition bg-red-500 border border-red-500 rounded-r-md hover:bg-transparent hover:text-red-500"
            >
              Search
            </button>
          </div>
          {/* <!-- searchbar end --> */}

          {/* <!-- navicons --> */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="relative block text-center text-gray-700 transition hover:text-primary"
            >
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-0 -top-1 bg-primary">
                5
              </span>
              <div className="text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </a>
            <a
              href=""
              className="relative hidden text-center text-gray-700 transition lg:block hover:text-primary"
            >
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-1 bg-primary">
                3
              </span>
              <div className="text-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
            </a>
            <a
              href=""
              className="block text-center text-gray-700 transition hover:text-primary"
            >
              <div className="text-2xl">
                <i className="far fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
          {/* <!-- navicons end --> */}
        </div>
      </header>
      <nav className="hidden bg-gray-800 lg:block">
        <div className="container pl-1">
          <div className="flex mr-40 ml-28">
            {/* <!-- all category --> */}
            <div className="relative flex items-center px-8 py-4 cursor-pointer bg-primary group">
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
              <span className="ml-2 text-white capitalize">All categories</span>

              <div className="absolute left-0 z-50 invisible w-full py-3 ml-10 transition duration-300 bg-white divide-y divide-gray-300 shadow-md opacity-0 top-full group-hover:opacity-100 group-hover:visible divide-dashed">
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/bed.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Bedroom</span>
                </a>
                {/* <!-- single category end --> */}
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/sofa.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Sofa</span>
                </a>
                {/* <!-- single category end --> */}
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/office.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Office</span>
                </a>
                {/* <!-- single category end --> */}
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/terrace.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Outdoor</span>
                </a>
                {/* <!-- single category end --> */}
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/bed-2.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Mattress</span>
                </a>
                {/* <!-- single category end --> */}
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                >
                  <img
                    src="images/icons/restaurant.svg"
                    className="object-contain w-5 h-5"
                  />
                  <span className="ml-6 text-sm text-gray-600">Sofa</span>
                </a>
                {/* <!-- single category end --> */}
              </div>
            </div>
            {/* <!-- all category end --> */}

            {/* <!-- nav menu --> */}
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 text-base capitalize">
                <Link
                  href="/"
                  className="text-gray-200 transition hover:text-white"
                >
                  Home
                </Link>

                <a
                  href=""
                  className="text-gray-200 transition hover:text-white"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition hover:text-white"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition hover:text-white"
                >
                  Contact us
                </a>
              </div>
              <a
                href="#"
                className="ml-auto text-gray-200 transition justify-self-end hover:text-white"
              >
                Login/Register
              </a>
            </div>
            {/* <!-- nav menu end --> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
