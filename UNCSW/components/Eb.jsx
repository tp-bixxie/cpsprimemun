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
            Tharun Pranav Sakthivel, also known as TP, is a truly captivating individual known for his remarkable ability to wear multiple hats. With an impressive tally of 56 MUNs attended, he effortlessly embodies the true essence of diplomatic prowess, leaving a trail of admiration in his wake. Not only does he clinch numerous awards in these Model United Nations conferences, but he also gracefully assumes the role of a chair, expertly guiding others on the path to success. Leading the Ignite Debate Society, he orchestrates captivating MUN events with a masterful touch, igniting minds and fostering lively discourse that lingers in the hearts of participants. 
            <br></br><br></br>
            As an undergraduate student at the prestigious University of British Columbia, Canada, Tharun Pranav Sakthivel effortlessly balances his academic pursuits while passionately engaging in exhilarating debates and programming endeavors. Oh, and have I mentioned his secret athletic prowess? This young scholar gracefully glides through intellectual and physical challenges, proving his agility and determination as a district-level athlete. 
            <br></br><br></br>
            His prowess knows no bounds, as he reaches remarkable heights in the research domain, earning an honorable mention from IEEE for his groundbreaking journal publication that spanned 14 countries.
            <br></br><br></br> 
            TP's sharp mind and charming wit are the secrets behind his unrivaled success, conquering every endeavor with an undeniable charisma that captivates all those who cross his path.

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
               Varnika Nahar (Vice-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            With unwavering dedication and a wealth of experience in the field of debates and Muns - we proudly present Varnika as a distinguished co-chair for UNCSW. Varnika's passion for international affairs and diplomacy has propelled her passion in the field of MUNs. As an astute observer, she brings a keen eye for detail, fairness, and critical analysis to the debates and the committee. <br></br><br></br>
            
            Her extensive knowledge of global issues, coupled with her exceptional communication skills, enables her to assess and evaluate the delegates' performances with precision.  Her humble nature and her impartiality towards delegates ensure a supportive environment that would inspire delegates to excel and foster a deep understanding of international relations because she firmly believes learning and putting in your best efforts is all that matters at the end of the day.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb