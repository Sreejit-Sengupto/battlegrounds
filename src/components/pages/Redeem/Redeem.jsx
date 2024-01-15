import React from 'react';

export default function Redeem() {
  return (
    <div className="bg-bgRedeem bg-no-repeat bg-cover bg-center h-screen flex justify-center items-center">
      <div className="bg-white w-full lg:w-[30%] flex flex-col my-10">
        <p className="font-teko pt-8 px-8 text-3xl text-[#333]">
          BATTLEGROUNDS MOBILE INDIA
        </p>
        <h1 className="font-teko pb-10 px-8 text-5xl text-[#333] font-bold">
          CODE REDEMPTION
        </h1>

        <label
          htmlFor="character--id"
          className="font-teko text-2xl px-8 text-[#333]"
        >
          CHARACTER ID{' '}
        </label>
        <input
          type="text"
          placeholder="ENTER YOUR CHARACTER ID"
          className="mx-8 border-[1px] border-[#dddddd] w-[80%] h-[56px] font-teko placeholder:px-8"
        />

        <label
          htmlFor="redemption"
          className="font-teko text-2xl px-8 text-[#333] mt-8"
        >
          REDEMPTION CODE
        </label>
        <input
          type="text"
          placeholder="ENTER YOUR COUPON CODE"
          className="mx-8 border-[1px] border-[#dddddd] w-[80%] h-[56px] font-teko placeholder:px-8"
        />

        <label
          htmlFor="verification"
          className="font-teko text-2xl px-8 text-[#333] mt-8"
        >
          VERIFICATION CODE
        </label>
        <input
          type="text"
          placeholder="ENTER VERIFICATION CODE"
          className="mx-8 mb-8 border-[1px] border-[#dddddd] w-[80%] h-[56px] font-teko placeholder:px-8"
        />

        <button
          type="submit"
          className="w-[80%] font-teko text-4xl bg-[#eca800] p-3 mb-10 mx-8"
        >
          REDEEM
        </button>
      </div>
    </div>
  );
}
