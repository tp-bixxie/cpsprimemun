import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, unsc1, unsc2 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
            <img src={unsc1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' />
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
               Atul Raj Sokhi (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify">
            Hey guys, I’m atul raj sokhi, currently studying in Manipal Institute of Technology and a proud of alumni of CPS group of institutions. As an experienced and dynamic individual I possess an innate ability to inspire and lead. With an unparalleled passion for international affairs and diplomacy, I am poised to chair the CPS Prime MUN with utmost professionalism and expertise. Armed with a comprehensive understanding of global issues and a remarkable ability to foster collaboration, I hope I steer the conference towards meaningful and impactful discussions. My unwavering dedication to promoting constructive dialogue and finding solutions to complex problems makes him an invaluable asset in guiding delegates towards productive debate. I can make sure delegates can expect an engaging and enlightening MUN experience that will empower them to become effective advocates for change on the world stage.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={unsc2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
       
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center'>
            Ryan Rewins (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Ryan Kidangan is a seasoned delegate and chair with experience in over fourteen Model United Nations (MUN) conferences and winning several national and international debates. His expertise lies in various fields, including public speaking and negotiation.
            <br></br><br></br>
            Despite his vibrant and fast-paced exterior, Ryan holds a perceptive belief that "The universe bends to a still mind, peace be still," quoting Ab-Soul. This assertion reflects his understanding that a calm and focused mind has the power to influence and shape the world around it.
            <br></br><br></br>
            When not engaged in MUN activities, Ryan can be found behind the laptop, making music. His musical preferences span a diverse range, encompassing artists like Kendrick Lamar and Armand Hammer. This eclectic taste in music further highlights his open-mindedness and appreciation for different genres and styles.
            <br></br><br></br>
            In summary, Ryan Kidangan is a multifaceted individual, adept at navigating the world of MUNs and national debates. With his experience and expertise, he understands the importance of reliability as a prerequisite for trust, and he appreciates the power of a still mind in influencing the universe.


            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb