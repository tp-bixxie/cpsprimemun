import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, uncsw1, uncsw2, uncsw3, uncsw4 } from '../../src/assets';

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
      
            <img src={uncsw2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Varnika Rajesh (Vice-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            With dedication and experience in debates and MUNs, we present Varnika as a distinguished vice-chair for UNCSW. Her passion for international affairs fuels her MUN involvement. As an astute observer, she brings fairness, critical analysis, and attention to detail to the committee. With vast knowledge and exceptional communication skills, she assesses delegates' performances accurately. Her humility and impartiality create a supportive environment, inspiring delegates to excel and deepen their understanding of international relations. She firmly believes in learning and giving one's best efforts.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb