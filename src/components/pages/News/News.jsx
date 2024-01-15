import React from 'react';
import { Outlet } from 'react-router-dom';

export default function News() {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="bg-newsBanner bg-cover bg-no-repeat bg-center h-[200px] lg:h-[300px] flex justify-center items-center mb-10">
        <p className="font-oswald font-bold text-5xl text-[#333] tracking-wide">
          NEWS
        </p>
      </div>
      <Outlet />
    </div>
  );
}
