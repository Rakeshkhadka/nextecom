import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layout/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <div className='lg:mr-40 lg:ml-36 pl-2'>
        <div className="container pb-16">
          <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase md:text-3xl">recomended for you</h2>
          {/* <!-- product wrapper --> */}
          <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product2.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product3.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product4.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product9.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product1.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product8.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product10.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
              {/* <!-- single product --> */}
              <div className="overflow-hidden bg-white rounded shadow group">
                  {/* <!-- product image --> */}
                  <div className="relative">
                      <img src="images/products/product11.jpg" className="w-full"/>
                      <div
                          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                          <a href="view.html"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="fas fa-search"></i>
                          </a>
                          <a href="#"
                              className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-primary hover:bg-gray-800">
                              <i className="far fa-heart"></i>
                          </a>
                      </div>
                  </div>
                  {/* <!-- product image end --> */}
                  {/* <!-- product content --> */}
                  <div className="px-4 pt-4 pb-3">
                      <a href="view.html">
                          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                              Guyer chair
                          </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                          <p className="text-xl font-semibold text-primary font-roboto">$45.00</p>
                          <p className="text-sm text-gray-400 line-through font-roboto">$55.00</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex gap-1 text-sm text-yellow-400">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="ml-3 text-xs text-gray-500">(150)</div>
                      </div>
                  </div>
                  {/* <!-- product content end --> */}
                  {/* <!-- product button --> */}
                  <a href="#"
                      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">
                      Add to Cart
                  </a>
                  {/* <!-- product button end --> */}
              </div>
              {/* <!-- single product end --> */}
          </div>
          {/* <!-- product wrapper end --> */}
      </div>
      </div>
    </MainLayout>
  )
}
