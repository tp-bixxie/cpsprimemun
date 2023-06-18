import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, ecosoc1, ecosoc2 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={ecosoc1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
        
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Krishna Raman (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Greetings Delegates! Krishna Venkata Raman is incredibly honored and excited to Chair the UNECOSOC committee at CPS PRIME MUN 2023.<br></br><br></br>

            Throughout his MUN and Debate journey, Krishna Venkata Raman has been fortunate to achieve significant milestones and garner recognition for his expertise in these fields. He has honed his skills in public speaking, critical analysis, and strategic negotiation, allowing him to contribute effectively to the global discourse on pressing issues.<br></br><br></br>

            Currently pursuing a Computer Science degree at the University of Toronto, Krishna Venkata Raman aims to bring a unique perspective to the UNECOSOC committee by incorporating technology and innovation with economic and social issues.<br></br><br></br>

            As your Chair, his utmost priority is to foster an inclusive and empowering environment where every delegate can actively participate and contribute their insights. Krishna Venkata Raman eagerly looks forward to facilitating fruitful discussions and quality debates that promote cooperation and understanding.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
     
            <img src={ecosoc2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full ' /> 
    
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Rohan.SVS  (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            An incoming student at Ashoka University, Rohan.SVS has been part of MUNs and debating since he was 13. Having received the highest awards at multiple competitions nationally and internationally like the Harvard MUN India, CHINMUN, IMUN, CMMUN and ILMUNC, to name a few, he's one for constructive discussion and collaboration.<br></br><br></br>
            If you don't find him at debates, you'll find him deep in thought about the last cinematic masterpiece he saw, rewatching cricket matches, or ditching plans to watch an F1 grand prix.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb