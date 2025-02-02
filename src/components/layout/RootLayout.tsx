import React from "react";
import Navbar from "../Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    // <main className="max-h-screen fixed w-full overflow-auto">
    //   <Navbar />
    //   {children}
    // </main>
    <main className="h-screen w-full flex flex-col">
      {/* Navbar with fixed height */}
      <Navbar className="h-16 flex-shrink-0" />

      {/* Children container takes full height minus navbar height */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </main>
  );
};

export default RootLayout;
