import React from 'react'
import Header from './components/Header/Header'
import Example from './components/Darwer/Drawer'
import { FaRegUser } from "react-icons/fa6";
import { TbShoppingBagExclamation } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { RiUser4Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Header />
      <div className="head flex justify-center justify-between">
        <div className="sidebar w-1/5 bg-blue-600 h-100%">
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Customers</a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Sellers </a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Property</a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Tenants</a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Projects</a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Contract</a>
          </div>
          <div className="section mt-4">
            <a href="#" className='bg-white flex items-center rounded-lg text-2xl font-bold m-2 p-3 ps-10 shadow-2xl'> <FaRegUserCircle className='text-2 me-5 text-gray-800' /> Users</a>
          </div>


        </div>
        <div className="container w-5/6 h-100% bg-red-300">
          <div className="top flex justify-around mt-10">
            <div className="graph shadow-md cursor-pointer w-64 bg-blue-600 h-28 rounded-2xl overflow-hidden flex justify-evenly items-center">
              <FaRegUser className='text-4xl  text-white' /> <h2 className="text-2xl font-bold text-white">Profiles</h2>
            </div>
            <div className="graph shadow-md cursor-pointer w-64  bg-blue-600 h-28 rounded-2xl overflow-hidden flex justify-evenly items-center">
              <TbShoppingBagExclamation className='text-4xl  text-white' /> <h2 className="text-2xl font-bold text-white">Seller's</h2>
            </div>
            <div className="graph shadow-md cursor-pointer w-64  bg-blue-600 h-28 rounded-2xl overflow-hidden flex justify-evenly items-center">
              <GoProjectRoadmap className='text-4xl  text-white' /> <h2 className="text-2xl font-bold text-white">Projects </h2>
            </div>
            <div className="graph shadow-md cursor-pointer w-64  bg-blue-600 h-28 rounded-2xl overflow-hidden flex justify-evenly items-center">
              <RiUser4Line className='text-4xl  text-white' /> <h2 className="text-2xl font-bold text-white">Customer</h2>
            </div>
          </div>
          <div className="top flex justify-around mt-10">
            <div className="graph w-3/4 shadow-2xl  bg-green-30  h-96 rounded-3xl overflow-hidden">
              <img src="src\assets\liner.png" alt="scale" className='h-full w-full ' />
            </div>
            <div className="scale w-1/5 shadow-2xl  bg-yellow-30   h-96 rounded-3xl overflow-hidden">
              <img src="src\assets\circle.png" alt="scale" className='h-full w-full ' />
            </div>
          </div>
          <div className="top flex justify-around mt-10">
            <div className="shadow-2xl bg-blue-500 graph w-1/4 rounded-3xl flex flex-col items-center  justify-center">

              <img src="src\assets\profile.png" alt="profile" className='w-40 h-40' />
              <h2 className='text-4xl text-center font-bold'>Alex</h2>
              <p className='text-center text-white mb-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi minima iste laborum, fugiat deserunt.</p>
              <button className="btn bg-slate-200 px-10">profile</button>

            </div>
            <div className="shadow-2xl bg-blue-500 scale w-2/3   h-96 rounded-3xl overflow-hidden">
            <img src="src\assets\liner.png" alt="scale" className='h-full w-full ' />
            </div>
          </div>
          <div className="shadow-2xl  top flex justify-around my-10">
            <div className="shadow-2xl bg-blue-800 scale w-11/12   h-96 rounded-3xl overflow-hidden">
            <img src="src\assets\liner.png" alt="scale" className='h-full w-full ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App