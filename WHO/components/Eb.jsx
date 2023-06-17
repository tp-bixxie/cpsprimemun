import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo , who1} from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={who1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 

        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Kritheega Devi Ramanathan (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Kritheega is currently pursuing Medicine and started MUN-ing five years ago, developing a passionate interest that has endured over time. She has actively participated in both national and international conferences, enriching her experience in the field.
            <br></br><br></br>
            In addition to her dedication to Model United Nations, Kritheega is an avid reader who finds joy in exploring different literary works. She also has a love for travel, eagerly embracing opportunities to immerse herself in new cultures and languages. Kritheega's fondness for dogs adds another layer of warmth and compassion to her character.
            <br></br><br></br>
            For Kritheega, every MUN serves as a fresh learning experience, and she eagerly anticipates the forthcoming conference with great enthusiasm.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card3 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={who1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
   
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Yohan Tarakan (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify">
                 Assessing the Sustainability of Post-Pandemic Economic Recovery Models with Emphasis on Global cooperation.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb