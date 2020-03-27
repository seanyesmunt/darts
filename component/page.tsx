import React from "react";
import Header from "./header";

export default function Page(props) {
  return (
    <div className="h-full min-h-screen  flex flex-col bg-gray-900">
      <Header />
      {props.children}
    </div>
  );
}
