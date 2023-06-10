import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data";

export default function NewsCards() {
  const cards = data.map((item) => {
    return (
      <Link to={item.id} className="w-80 m-4 lg:m-8 bg-white font-teko">
        <img src={item.img} alt="" />
        <p className="ml-4 mt-2 text-xl text-[#999]">{item.type}</p>
        <p className="ml-4 text-2xl tracking-wide">{item.title}</p>
        <p className="my-4 ml-4 text-xl text-[#999]">{item.date}</p>
      </Link>
    );
  });
  return <div className="flex flex-col lg:flex-row w-[80%] mx-auto flex-wrap">{cards}</div>;
}
