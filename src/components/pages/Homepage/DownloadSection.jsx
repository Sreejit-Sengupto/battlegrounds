import React from "react";
import logo from "../../../assets/pubg-logo.png";
import appStoreIcon from "../../../assets/btn_appstore_202.png";
import googlePlayIcon from "../../../assets/btn_googleplay_202.png";

export default function DownloadSection() {
  return (
    <div className="bg-downloadImg bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center pt-16 pb-4">
        <img src={logo} alt="Pubg logo" />
        <p className="font-teko text-[1.5rem] lg:text-[2rem] font-bold text-[#333] pt-4">
          INDIA KA BATTELGROUND IS HERE
        </p>
        <p className="font-teko text-[1.5rem] lg:text-[2rem] font-bold text-[#333]">
          DOWNLOAD NOW!
        </p>
      </div>

      <div className="flex justify-center items-center pb-16">
        <a href="https://apps.apple.com/app/id1526436837?mt=8" target="_blank">
          <img src={appStoreIcon} alt="" className="w-[10rem] mr-2 " />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile" target="_blank">
          <img src={googlePlayIcon} alt="" className="w-[10rem]" />
        </a>
      </div>
    </div>
  );
}
