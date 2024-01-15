import React from 'react';
import footerImg from '/images/footerlg.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-black mt-auto">
      <div className="mx-auto lg:w-[40%] pt-8 flex flex-col justify-center items-center">
        <img src={footerImg} alt="" className="w-40 pb-4" />
        <p className="text-[#999999] font-teko mb-2">
          © 2022 KRAFTON, Inc. All rights reserved.
        </p>
      </div>

      <div className="text-[#999999] flex justify-center items-center mx-auto lg:w-[40%] pb-5 font-teko text-[12px]">
        <Link
          to="privacy-page"
          className="px-2 hover:text-white"
          onClick={() => {
            window.scrollY(0);
          }}
        >
          Privacy Policy
        </Link>
        <span className="divider"></span>
        <Link
          to="terms-of-services"
          className="px-2 hover:text-white"
          onClick={() => {
            window.scrollY(0);
          }}
        >
          Terms of Service
        </Link>
        <span className="divider"></span>
        <Link
          to="rules-of-conduct"
          className="px-2 hover:text-white"
          onClick={() => {
            window.scrollY(0);
          }}
        >
          Rules of Conduct
        </Link>
        <span className="divider"></span>
        <Link
          to="official-community-page"
          className="px-2 hover:text-white"
          onClick={() => {
            window.scrollY(0);
          }}
        >
          Official Community Policy
        </Link>
      </div>
    </div>
  );
}
