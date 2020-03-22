import React from "react";
import Header from "./header";

export default function Page(props) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {props.children}
    </div>
  );
}
