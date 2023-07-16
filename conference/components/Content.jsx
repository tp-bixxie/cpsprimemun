import React from "react";
import styles, { layout } from "../../src/style";
import { mainlogo } from "../../src/assets";

const Content = () => {
  return (
    <section
      id="letter"
      className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}
    >
       <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-white text-[30px]">Conference Schedule & Dress Code</span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
            >
              <p className={`${styles.paragraph} max-w-[312px] text-justify `}>
                <span className="text-black text-[18px]">
                  <span>CPS Prime MUN's conference schedule and dress code for the event is, </span><br></br> <br></br>
                  <span className="mt-0">Traditional Attire </span>
                  
                  <br></br>
                  <span className="mt-4 text-bold">21st July, 2023 </span>
                  <br></br> <br></br>
                  <span className="mt-0">Western Business Attire </span>
                  
                  <br></br>
                  <span className="mt-4 text-bold">22nd July, 2023 </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-white text-[30px]">
                General Instructions
              </span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
            >
              <p className={`${styles.paragraph} max-w-[312px] text-justify `}>
                <span className="text-black text-[18px]">
                 Delegates can bring their gadgets along for convenience. However, kindly note that internet access will be strictly prohibited during committee sessions to ensure optimal focus and fair engagement. <br></br><br></br>

                  In terms of meals, delegates have the flexibility to either bring their own lunch or partake in the variety of food stalls available at the venue. It's important to mention that delegates are responsible for covering the costs associated with purchasing food from the stalls.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
     
      
    </section>
  );
};
export default Content;
