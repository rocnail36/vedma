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
    </main>
  );
};

export default layout;
