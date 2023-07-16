import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, uncsw1, uncsw2, uncsw3, uncsw7 } from '../../src/assets';

const Eb2 = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={uncsw7} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
             Ajai Karthikesan(Rapporteur) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Ajai Karthikesan is a passionate debater and Model United Nations (MUN) enthusiast from Canada, currently studying at the University of British Columbia (UBC). With an unwavering love for debate, Ajai has honed his skills in persuasive discourse and global diplomacy. Known for his eloquence and critical thinking, he has excelled in various debate competitions. As an active member of the MUN community, Ajai has simulated international diplomacy and developed his negotiation skills. His involvement in MUN has deepened his understanding of global affairs and sparked his interest in international relations. Driven by intellectual curiosity, Ajai aims to contribute to constructive dialogue and promote peaceful resolutions to global challenges through his continued engagement in debates and MUN activities.
            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        

        </div>
        
        
    

     </section>
  )
}
export default Eb2