import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

function Index() {
  return (
    <MainLayout>
      <div className="mx-40">
        <div className="container grid gap-6 pt-4 pb-6 lg:grid-cols-2">
          <div>
            <div>
              <img
                id="main-img"
                src="images/products/product9.jpg"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div>
                <img
                  src="images/products/product9.jpg"
                  className="w-full border cursor-pointer single-img border-primary"
                />
              </div>
              <div>
                <img
                  src="images/products/product1.jpg"
                  className="w-full border cursor-pointer single-img"
                />
              </div>
              <div>
                <img
                  src="images/products/product8.jpg"
                  className="w-full border cursor-pointer single-img"
                />
              </div>
              <div>
                <img
                  src="images/products/product12.jpg"
                  className="w-full border cursor-pointer single-img"
                />
              </div>
              <div>
                <img
                  src="images/products/product11.jpg"
                  className="w-full border cursor-pointer single-img"
                />
              </div>
            </div>
          </div>
          {/* <!-- product image end -->
            <!-- product content --> */}
          <div>
            <h2 className="mb-2 text-2xl font-medium uppercase md:text-3xl">
              Italian L Shape Sofa
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="ml-3 text-xs text-gray-500">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="space-x-2 font-semibold text-gray-800">
                <span>Availability: </span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="space-x-2">
                <span className="font-semibold text-gray-800">Brand: </span>
                <span className="text-gray-600">Apex</span>
              </p>
              <p className="space-x-2">
                <span className="font-semibold text-gray-800">Category: </span>
                <span className="text-gray-600">Sofa</span>
              </p>
              <p className="space-x-2">
                <span className="font-semibold text-gray-800">SKU: </span>
                <span className="text-gray-600">BE45VGRT</span>
              </p>
            </div>
            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-xl font-semibold text-primary">
                $450.00
              </span>
              <span className="text-base text-gray-500 line-through">
                $500.00
              </span>
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              exercitationem quaerat excepturi labore blanditiis
            </p>
            {/* <!-- size --> */}
            <div className="mt-4">
              <h3 className="mb-1 text-base text-gray-800">Size</h3>
              <div className="flex items-center gap-2">
                {/* <!-- single size --> */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    for="size-xs"
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    XS
                  </label>
                </div>
                {/* <!-- single size end -->
                            <!-- single size --> */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    for="size-s"
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    S
                  </label>
                </div>
                {/* <!-- single size end -->
                            <!-- single size --> */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                    checked
                  />
                  <label
                    for="size-m"
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    M
                  </label>
                </div>
                {/* <!-- single size end -->
                            <!-- single size --> */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    for="size-l"
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    L
                  </label>
                </div>
                {/* <!-- single size end -->
                            <!-- single size --> */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    for="size-xl"
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    XL
                  </label>
                </div>
                {/* <!-- single size end --> */}
              </div>
            </div>
            {/* <!-- size end -->
                    <!-- color --> */}
            <div className="mt-4">
              <h3 className="mb-1 text-base text-gray-800">Color</h3>
              <div className="flex items-center gap-2">
                {/* <!-- single color --> */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-red"
                    checked
                  />
                  <label
                    for="color-red bg-red"
                    style={{ backgroundColor: "red" }}
                    className="flex items-center justify-center w-5 h-5 text-xs border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  ></label>
                </div>
                {/* <!-- single color end -->
                            <!-- single color --> */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-white"
                  />
                  <label
                    for="color-white"
                    style={{ backgroundColor: "white" }}
                    className="flex items-center justify-center w-5 h-5 text-xs border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  ></label>
                </div>
                {/* <!-- single color end -->
                            <!-- single color --> */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-black"
                  />
                  <label
                    for="color-black"
                    style={{ backgroundColor: "black" }}
                    className="flex items-center justify-center w-5 h-5 text-xs border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  ></label>
                </div>
                {/* <!-- single color end --> */}
              </div>
            </div>
            {/* <!-- color end -->
                    <!-- quantity --> */}
            <div className="mt-4">
              <h3 className="mb-1 text-base text-gray-800">Quantity</h3>
              <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
                <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">
                  -
                </div>
                <div className="flex items-center justify-center w-10 h-8">
                  4
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">
                  +
                </div>
              </div>
            </div>
            {/* <!-- color end -->
                    <!-- add to cart button --> */}
            <div className="flex gap-3 pb-5 mt-6 border-b border-gray-200">
              <a
                href="#"
                className="flex items-center px-8 py-2 text-sm font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                <span className="mr-2">
                  <i className="fas fa-shopping-bag"></i>
                </span>{" "}
                Add to cart
              </a>
              <a
                href="#"
                className="px-8 py-2 text-sm font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:bg-transparent hover:text-primary"
              >
                <span className="mr-2">
                  <i className="far fa-heart"></i>
                </span>{" "}
                Wishlist
              </a>
            </div>
            {/* <!-- add to cart button end -->
                    <!-- product share icons --> */}
            <div className="flex mt-4 space-x-3">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* <!-- product share icons end --> */}
          </div>
          {/* <!-- product content end --> */}
        </div>
        {/* <!-- product view end --> */}

        {/* <!-- product details and review --> */}
        <div className="container pb-16">
          {/* <!-- detail buttons --> */}
          <h3 className="pb-3 font-medium text-gray-800 border-b border-gray-200 font-roboto">
            Product Details
          </h3>
          {/* <!-- details button end --> */}

          {/* <!-- details content --> */}
          <div className="pt-6 lg:w-4/5 xl:w-3/5">
            <div className="space-y-3 text-gray-600">
              <p>
                Incredible graphics performanceMacBook Air can take on more
                graphics-intensive projects than ever. For the first time,
                content creators can edit and seamlessly play back multiple
                streams of full‑quality 4K video without dropping a frame.
              </p>
              <p>
                Incredible graphics performanceMacBook Air can take on more
                graphics-intensive projects than ever. For the first time,
                content creators can edit and seamlessly play back multiple
                streams of full‑quality 4K video without dropping a frame.
              </p>
              <p>
                Apps on MacBook Air can use machine learning (ML) to
                automatically retouch photos like a pro, make smart tools such
                as magic wands and audio filters more accurate at
                auto‑detection, and so much more. That’s not just brain power —
                that’s the power of a full stack of ML technologies.
              </p>
            </div>
            {/* <!-- details table --> */}
            <table>
              <tr>
                <td>he</td>
              </tr>
            </table>
            {/* <!-- details table --> */}
          </div>
          {/* <!-- details content end --> */}
        </div>
        {/* <!-- product details and review end --> */}

        {/* <!-- related products --> */}
        <div className="container pb-16">
          <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase md:text-3xl">
            related products
          </h2>
          {/* <!-- product wrapper --> */}
          <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
            {/* <!-- single product --> */}
            <div className="overflow-hidden bg-white rounded shadow group">
              {/* <!-- product image --> */}
              <div className="relative">
                <img src="images/products/product9.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <a
                    href="view.html"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              {/* <!-- product image end -->
                        <!-- product content --> */}
              <div className="px-4 pt-4 pb-3">
                <a href="view.html">
                  <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl font-semibold text-primary font-roboto">
                    $45.00
                  </p>
                  <p className="text-sm text-gray-400 line-through font-roboto">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {/* <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span> */}
                  </div>
                  <div className="ml-3 text-xs text-gray-500">(150)</div>
                </div>
              </div>
              {/* <!-- product content end -->
                        <!-- product button --> */}
              <a
                href="#"
                className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                Add to Cart
              </a>
              {/* <!-- product button end --> */}
            </div>
            {/* <!-- single product end -->
                    <!-- single product --> */}
            <div className="overflow-hidden bg-white rounded shadow group">
              {/* <!-- product image --> */}
              <div className="relative">
                <img src="images/products/product1.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <a
                    href="view.html"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              {/* <!-- product image end -->
                        <!-- product content --> */}
              <div className="px-4 pt-4 pb-3">
                <a href="view.html">
                  <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl font-semibold text-primary font-roboto">
                    $45.00
                  </p>
                  <p className="text-sm text-gray-400 line-through font-roboto">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {/* <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span> */}
                  </div>
                  <div className="ml-3 text-xs text-gray-500">(150)</div>
                </div>
              </div>
              {/* <!-- product content end -->
                        <!-- product button --> */}
              <a
                href="#"
                className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                Add to Cart
              </a>
              {/* <!-- product button end --> */}
            </div>
            {/* <!-- single product end -->
                    <!-- single product --> */}
            <div className="overflow-hidden bg-white rounded shadow group">
              {/* <!-- product image --> */}
              <div className="relative">
                <img src="images/products/product8.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <a
                    href="view.html"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              {/* <!-- product image end -->
                        <!-- product content --> */}
              <div className="px-4 pt-4 pb-3">
                <a href="view.html">
                  <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl font-semibold text-primary font-roboto">
                    $45.00
                  </p>
                  <p className="text-sm text-gray-400 line-through font-roboto">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {/* <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span> */}
                  </div>
                  <div className="ml-3 text-xs text-gray-500">(150)</div>
                </div>
              </div>
              {/* <!-- product content end -->
                        <!-- product button --> */}
              <a
                href="#"
                className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                Add to Cart
              </a>
              {/* <!-- product button end --> */}
            </div>
            {/* <!-- single product end -->
                    <!-- single product --> */}
            <div className="overflow-hidden bg-white rounded shadow group">
              {/* <!-- product image --> */}
              <div className="relative">
                <img src="images/products/product12.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <a
                    href="view.html"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              {/* <!-- product image end -->
                        <!-- product content --> */}
              <div className="px-4 pt-4 pb-3">
                <a href="view.html">
                  <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl font-semibold text-primary font-roboto">
                    $45.00
                  </p>
                  <p className="text-sm text-gray-400 line-through font-roboto">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {/* <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span>
                                    <span:key="n"><i className="fas fa-star"></i></span> */}
                  </div>
                  <div className="ml-3 text-xs text-gray-500">(150)</div>
                </div>
              </div>
              {/* <!-- product content end -->
                        <!-- product button --> */}
              <a
                href="#"
                className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                Add to Cart
              </a>
              {/* <!-- product button end --> */}
            </div>
            {/* <!-- single product end --> */}
          </div>
          {/* <!-- product wrapper end --> */}
        </div>
        {/* <!-- related products end --> */}
      </div>
    </MainLayout>
  );
}

export default Index;
