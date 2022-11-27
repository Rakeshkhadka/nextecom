
import { useState } from "react";
import Navbar from "./Navbar";

export default function MainLayout({children}) {
  
  return (
    <div>
      <Navbar />
      <div className="w-full mx-">

      {children}
      </div>
      
    </div>
  );
}



{/* <x></x> */}