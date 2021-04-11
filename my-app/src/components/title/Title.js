import React from "react";

export default function Title(props) {
  return (
    <div className="section-title pt-16 mb-20">
      <h2 className="text-normal tracking-widest text-3xl text-center mb-2">
        {props.title}
      </h2>
      <div className="w-24 h-1.5 bg-react m-auto"></div>
    </div>
  );
}
