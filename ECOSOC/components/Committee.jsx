import React from 'react';
import styles, { layout } from '../../src/style';
import { ecosoc } from '../../src/assets';


const Committee = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
     <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
     <div className="flex-[1] flex flex-col justify-start ">
  
     <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
    
         <img src={ecosoc} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
 
     <div className='flex-1 flex flex-col ml-3'> 
            <h2 className='font-formal font-semibold text-white text-[30px] leading -[23.4px] mb-1 text-center'>
            United Nations Economic and Social Council
            </h2>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px]">
                 <span className='font-bold'>Agenda:</span>  Assessing the Sustainability of Post-Pandemic Economic Recovery Models with Emphasis on Global cooperation.
            </p>
        </div>    
           
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Committee