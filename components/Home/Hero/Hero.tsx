import Slider from "@/components/helper/Slider";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/* Define grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#0b162e] font-bold uppercase ">
            dapatkan diskon <span className="text-[#F0010A]">Special</span> sampai
            dengan <span className="text-[#F0010A]">70%</span>!!!
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black opacity-70 mt-4">
            ~Website Safari Pigora adalah platform yang menjual berbagai jenis
            pigora dan sejenisnya dengan harga spesial. Temukan berbagai pilihan
            pigora berkualitas tinggi hanya di Safari.
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button
              size={"lg"}
              className="bg-[#F0010A] border-2 border-[#F0010A] hover:bg-[#F5F5F5] hover:text-[#F0010A] hover:border-solid hover:border-[#F0010A] hover:border-2 font-bold duration-500"
            >
              Beli Sekarang
            </Button>
            <Button
              size={"lg"}
              className="bg-[#F5F5F5] text-[#F0010A] border-solid border-2 border-[#F0010A] hover:bg-[#F0010A] hover:text-[#F5F5F5] font-bold duration-500 "
            >
              Selengkapnya
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className=" lg:block justify-self-end ">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
