import Footer from "@/components/footer/Footer";
import WrapperTransition from "@/components/framer/WrapperTransition";
import Navbar from "@/components/layout/Navbar";
export const dynamic = 'force-dinamic'

import React from "react";

interface Props {
  children: React.ReactElement;
}

const layout = ({ children }: Props) => {
  
  
  return (
    <main className="m-auto">
    
      <Navbar />
     
      {children}
     
      <Footer/>
    </main>
  );
};

export default layout;
