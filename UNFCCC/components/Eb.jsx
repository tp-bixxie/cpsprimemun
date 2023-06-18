import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, unfccc2, unfccc1 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={unfccc1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full ' /> 
      
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Mohamed Azhar (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Azhar, a budding journalist with a keen interest in Indian politics, is known for his penetrating arguments and impressive lobbying abilities. With a Bachelor's degree in Journalism and nearly three years of professional experience, he has established himself as a respected figure in the field. Azhar's dedication to his craft and his ability to provide insightful analysis have earned him recognition among his peers and readers. His exceptional observational skills and meticulous reporting have made him a trusted source of information in the realm of Journalism. <br></br><br></br>
            Azhar's soft-spoken nature and humble demeanor further contribute to his reputation as a respected journalist. As he continues to excel in his career, Azhar remains committed to staying at the forefront of political developments and providing valuable insights to his audience. With his strong background in journalism and his deep understanding of Indian politics, Azhar is poised to make a lasting impact in the field and continue to be a driving force in shaping public discourse.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={unfccc2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 mt-4 text-center'>
            Kaushal Rishab Kumar (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Kaushal, an accomplished high school graduate from The PSBB Millennium School, embarked on his MUN journey in the 9th grade, accumulating a remarkable record of over 12 MUNs as a delegate and 3 MUNs as an executive board member. His adeptness in diplomatic speaking and fervent delegation is complemented by the intellectual humility he brings to every conference. 
            <br></br><br></br>
            With a passion for aerospace engineering and astrophysics, Kaushal has accepted his enrollment at the University of Michigan, Ann Arbor, to further his academic pursuits. Anticipating interactions with delegates, he seeks quality, to-the-point speeches and authentic, practical solutions to the unwavering issue at hand. As the UNFCCC chair at the CPS PRIME MUN'23, he considers it a great honor and looks forward to a fruitful and mutually beneficial experience.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb