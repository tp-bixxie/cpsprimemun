import React from "react";
import styles, { layout } from "../style";
import { mainlogo, bw, redbox, sandburg, br, ovp, dm} from "../assets";

const Sponsor = () => {
  const images = [
    bw,
    redbox,
    sandburg,
    br,
    ovp,
    dm
  ];
  return (
    <section id="sponsor" className={`${layout.section}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px]`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-formal font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] item-center text-center">
            Our Stalls
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px]`}
      >
      <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[60%]  rounded-full"
          />
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default Sponsor;
