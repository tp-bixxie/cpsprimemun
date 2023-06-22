import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, unhrc1, unhrc2 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
            <img src={unhrc1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Rohith R. Raman (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Majoring in Criminology, Rohith has committed to studying in the University of Texas at Dallas' class of 2027. A couple things about Rohith, he goes by 'Rogi' everywhere, loves pointlessly staring at well-built men pose (he watches the Olympia, yes.). 
            <br></br><br></br>
            Having chaired way more MUNs than necessary, Rohith loves correcting personal pronouns, finding syntax errors in MUN Resolutions, and laughing at  chits asking a speaker to repeat their GSL on paper. A professional boxer, you're likely to find Rohith wake up at 4:30AM running to the mitts to train. Either that, or at the gym trying to compensate for his laughable lack of height (5'5).

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
            <img src={unhrc2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Vaishnavi Balasubramaniam (Vice-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"> <br></br>
Vaishnavi Balasubramaniam is a spirited sixteen year old who has carved not only her own path into the MUN circuit in Chennai, but has also initiated her school into the possibilities that MUNs represent. Having been part of Model United Nations in all its facets - as a delegate, a member of the Executive Board, an organising committee member and Director-General, Vaishnavi believes herself to be well equipped to be the co-chairperson of UNHRC and is very
excited to engage with this event and its delegates.<br></br><br></br>

 While her involvement in MUNs have allowed her to understand macro-level impact, she also believes in sustained on-ground impact having been a volunteer in Kanavu, a non-profit organisation that specialises in rural education. Apart from her academic and co-curricular engagements, Vaishnavi enjoys writing, discovering music and exploring her surroundings. If you’re looking for brownie points, you shouldn’t be.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb