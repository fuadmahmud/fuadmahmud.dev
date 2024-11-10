import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="bg-[#F3F3F1] dark:bg-zinc-900 dark:text-white">
      <Header />
      <main className="min-h-[calc(100vh-4rem)] p-4 lg:p-8 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
