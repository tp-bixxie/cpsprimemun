import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, g202, g201 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={g201} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 

        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Joshua M Sudeep (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Joshua M. Sudeep, a dynamic and accomplished individual, embodies charisma, and a relentless drive for success. Joshua's impressive journey of accomplishment began as the Head Boy of Chennai Public School TMZ, where he showcased exceptional leadership skills and played a vital role in organizing notable events, including Wisteria 2019. Graduating as the valedictorian for the class of 2021, Joshua's academic excellence has been matched by his prowess in debates and Model United Nations conferences across the state, consistently emerging victorious. <br></br><br></br>
            
            Recently, he chaired the United Nations General Assembly at CPS PRIME MUN, displaying his diplomatic finesse and the ability to foster meaningful discussions. Joshua's diverse talents extend beyond academia; he has also judged the Shark Tank competition for CPS Wisteria and worked as a copywriting freelancer at a digital marketing agency. Currently pursuing B.Com Accounting and Finance and CMA US at Loyola College, Joshua's leadership acumen continues to shine as the elected Joint Secretary of the B.Com Accounting and Finance department.



            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={g202} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full ' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Lauhith S Kumar (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Attempting to craft a bio befitting his inflated ego. Lauhith fancies himself a master of many things, including Model United Nations, Debating, athletics, and boxing. But perhaps what he's truly a master of is his insufferable arrogance and biting sarcasm, which he wields with recklessness in committee's. <br></br><br></br>
            
            As a Ted Ed speaker at the young age of 11, he no doubt enjoys pontificating on subjects he believes he knows everything about. When he's not busy basking in the glory of his own achievements or writing a position paper, he can often be found hitting the gym or beat boxing, which he's sure he believes he's also a master of.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb