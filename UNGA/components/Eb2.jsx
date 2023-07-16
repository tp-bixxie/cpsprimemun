import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, uncsw1, uncsw2, uncsw3, unsc4 } from '../../src/assets';

const Eb2 = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={unsc4} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Poojitha K (Vice-Chair)

            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            She is an impeccable MUNner and a seasoned debater – Introducing Poojitha Kapalavayi, the Moderator for UNGA. With having 4 MUNs' worth of experience, she has secured a High Commendation and a Special Mention. She has swept multiple awards at the Bard's Beacon and is an ISDS regional qualifier too! Not leaving academics also behind, she has indeed managed to excel in every interest of hers.
            She picks interest in reading sci-fi novels, watching movies, baking, trying different cuisines, and creating colourful, eye-catching and abstract portraits. As she finds excitement in exploring new places, she intends to even explore the 'space', one day!
            An 'ideal' MUN experience for the Executive Board, as she believes, is when the delegates are knowledgeable, well-prepared, and interactive. She would urge the delegates to be well-versed in RoPs and have sufficient knowledge about the agenda. She expects the delegates to be diplomatic and grab the fullest of this precious opportunity.
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