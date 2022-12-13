import React from "react";
import Header from "../Header";
import Footer from "../Footer";
export default function WebApp(props) {
  return (
    <div className="w-full ">
      <div className="mx-auto max-w-page-mx px-4 md:px-14">
        <Header />
        <main>{props.children}</main>
      </div>

      <Footer />
    </div>
  );
}
