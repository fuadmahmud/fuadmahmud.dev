import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 dark:text-white">
      <Header />
      <main className="min-h-[calc(100vh-4rem)] p-8 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
