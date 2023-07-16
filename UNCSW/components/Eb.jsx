import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, uncsw1, uncsw2, uncsw5, uncsw4 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={uncsw4} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
               Tharun Pranav Sakthivel (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Tharun Pranav Sakthivel is a captivating individual, excelling in various domains. With 56 MUNs attended, he embodies diplomatic prowess, winning numerous awards and guiding others as a chair. Leading the Ignite Debate Society, he orchestrates captivating MUN events, fostering lively discourse. As a University of British Columbia undergraduate, he balances academics and engaging in debates and programming. Alongside his secret athletic prowess, he conquers intellectual and physical challenges as a district-level athlete. His research accomplishments span 14 countries, earning an IEEE honorable mention. TP's sharp mind, charming wit, and undeniable charisma pave the way for his unrivaled success.
            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
      
            <img src={uncsw5} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Niranjana Mahesh (Vice-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            An eager and ardent orator, Niranjana Mahesh is a person who loves participating in public speaking competitions. Her foray into MUNs began in the past year and she has won multiple awards for the same. She has been debating for quite a while now and has received recognition for it like when  she represented the state of Tamil Nadu in IDL and by participating in many international debates. She is also a person of culture, and listens to Nirvana, Arctic Monkeys and Radiohead. She loves reading, especially books by Kazuo Ishiguro and Taylor Jenkins Reid. She aspires to be a lawyer and is looking forward to making the conference a memorable one.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb