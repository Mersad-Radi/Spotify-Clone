import React from "react";
import cardImg from "../../utils/cardImg.jpg";
import playButton from "../../utils/playButton.png"

const MusicCard = () => {
  return (
    <div className="group backdrop-blur w-[178px] h-[256px] xs:w-[150px] xs:h-[215px] rounded-[10px] hover:bg-[#28282883] hover:cursor-pointer transition duration-[350ms] ease-in-out">
      <div className=" p-4">
        <div>
          <div className="w-[146px] h-[146px] mb-4 xs:mb-2 xs:w-[123px] xs:h-[123px]">
            <div className=" relative">
              <img src={cardImg} className=" rounded-lg" />
            </div>
            <div>
            <img src={playButton} className="w-[45px] h-[45px] xs:w-[38px] xs:h-[38px] absolute top-[110px] right-[23px] xs:top-[92px] xs:right-[19px] opacity-0 transform translate-y-full transition-all duration-[350ms] group-hover:opacity-100 group-hover:translate-y-0" />              
            </div>
          </div>
        </div>
        <div>
          <p className=" text-white">Notorious B.I.G</p>
          <p className=" text-sm">Greatest hits</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
