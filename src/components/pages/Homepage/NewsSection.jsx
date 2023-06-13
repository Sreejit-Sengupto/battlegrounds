import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data";

export default function NewsSection() {
  const [show, setShow] = React.useState(false);

  function handleClick() {
    setShow((prevState) => !prevState);
  }

  return (
    <div className="bg-homeNews bg-cover pb-16">
      <h1 className="font-oswald text-center text-5xl font-bold text-[#333] tracking-tight pt-20">
        NEWS
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row w-[80%] mx-auto flex-wrap">
        <Link to={`news/${data[0].id}`} className="lg:w-80 my-4 lg:m-8 bg-white font-teko">
          <img src={data[0].img} alt="" />
          <p className="ml-4 mt-2 text-xl text-[#999]">{data[0].type}</p>
          <p className="ml-4 text-2xl tracking-wide">{data[0].title}</p>
          <p className="my-4 ml-4 text-xl text-[#999]">{data[0].date}</p>
        </Link>

        <Link to={`news/${data[1].id}`} className="lg:w-80 my-4 lg:m-8 bg-white font-teko">
          <img src={data[1].img} alt="" />
          <p className="ml-4 mt-2 text-xl text-[#999]">{data[1].type}</p>
          <p className="ml-4 text-2xl tracking-wide">{data[1].title}</p>
          <p className="my-4 ml-4 text-xl text-[#999]">{data[1].date}</p>
        </Link>

        <Link to={`news/${data[2].id}`} className="lg:w-80 my-4 lg:m-8 bg-white font-teko">
          <img src={data[2].img} alt="" />
          <p className="ml-4 mt-2 text-xl text-[#999]">{data[2].type}</p>
          <p className="ml-4 text-2xl tracking-wide">{data[2].title}</p>
          <p className="my-4 ml-4 text-xl text-[#999]">{data[2].date}</p>
        </Link>
      </div>

      {!show && (
        <button
          onClick={handleClick}
          className=" border-2 border-[#d5d5d5] text-[#666] text-center w-52 h-12 font-medium font-teko block mx-auto mt-4 hover:border-black hover:text-black"
        >
          VIEW MORE
        </button>
      )}

      {show && (
        <div className="flex flex-col lg:flex-row w-[80%] mx-auto flex-wrap justify-center items-center">
          <Link to={`news/${data[3].id}`} className="lg:w-80 my-4 lg:m-8 bg-white font-teko">
            <img src={data[3].img} alt="" />
            <p className="ml-4 mt-2 text-xl text-[#999]">{data[3].type}</p>
            <p className="ml-4 text-2xl tracking-wide">{data[3].title}</p>
            <p className="my-4 ml-4 text-xl text-[#999]">{data[3].date}</p>
          </Link>

          <Link to={`news/${data[4].id}`} className="lg:w-80 my-4 lg:m-8 bg-white font-teko">
            <img src={data[4].img} alt="" />
            <p className="ml-4 mt-2 text-xl text-[#999]">{data[4].type}</p>
            <p className="ml-4 text-2xl tracking-wide">{data[4].title}</p>
            <p className="my-4 ml-4 text-xl text-[#999]">{data[4].date}</p>
          </Link>

          {/* <Link to={data[5].id} className="w-80 m-4 lg:m-8 bg-white font-teko">
        <img src={data[5].img} alt="" />
        <p className="ml-4 mt-2 text-xl text-[#999]">{data[5].type}</p>
        <p className="ml-4 text-2xl tracking-wide">{data[5].title}</p>
        <p className="my-4 ml-4 text-xl text-[#999]">{data[5].date}</p>
      </Link> */}
        </div>
      )}

      {show && (
        <Link
          to="news"
          className="w-52 h-12 bg-[#333] block mx-auto mt-4 text-center text-white font-teko text-xl font-medium pt-[0.6rem] hover:bg-[#f2a900] hover:text-[#333]"
          onClick={() => {
            window.scrollY(0);
          }}
        >
          NEWS
        </Link>
      )}
    </div>
  );
}
