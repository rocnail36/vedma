import Footer from "@/components/footer/Footer";
import Navbar from "@/components/layout/Navbar";


import React from "react";

interface Props {
  children: React.ReactElement;
}

const layout = ({ children }: Props) => {
  
  
  return (
    <main className="max-w-screen-xl m-auto relative overflow-hidden">
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
};

export default layout;
