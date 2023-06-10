import GPlay from "../../../assets/btn_googleplay_202.png";
import AppStr from "../../../assets/btn_appstore_202.png";

function HeroSection() {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:flex justify-center items-center h-screen">
        <div className="w-[50%] h-screen bg-[#fce5c4] flex flex-col justify-center">
          <p className="font-teko font-extrabold text-[100px] leading-[2px] pl-8 text-[#530C0A]">
            INDIA KA
          </p>
          <p className="font-teko font-extrabold text-[100px] pl-8 text-[#530C0A]">
            BATTLEGROUNDS
          </p>
          <div className="flex justify-start items-center ml-8">
            <a href="ios" className="pr-4">
              <img src={AppStr} alt="" />
            </a>
            <a href="aos">
              <img src={GPlay} alt="" />
            </a>
          </div>
        </div>

        <div className="bg-hero bg-cover bg-no-repeat bg-center w-[50%] h-screen"></div>
      </div>
      {/* Code for desktop view ends here */}

      {/* For Mobile View */}
      <div className="lg:hidden bg-hero_mob h-[39rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end">
        <p className="font-teko font-extrabold text-[50px] leading-[2px]  text-[#530C0A] pt-[25rem]">
          INDIA KA
        </p>
        <p className="font-teko font-extrabold text-[50px] text-[#530C0A]">
          BATTLEGROUNDS
        </p>
        <div className="flex justify-center items-center mb-7">
          <a href="https://apps.apple.com/app/id1526436837?mt=8">
            <img src={AppStr} alt="" className="w-36 mr-2" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile">
            <img src={GPlay} alt="" className="w-36 ml-2" />
          </a>
        </div>
      </div>
      {/* Code for mobile view ends here */}
    </>
  );
}
export default HeroSection;
