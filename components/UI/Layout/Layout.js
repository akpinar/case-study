import React from "react";
import { Montserrat } from "next/font/google";

import Topbar from "../Topbar/Topbar";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"] });

function Layout({ children }) {
  return (
    <div className={`h-full w-full min-h-screen bg-gray-100 ${montserrat.className}`}>
      <Topbar />
      <div className="px-12 py-8">{children}</div>
    </div>
  );
}

export default Layout;
