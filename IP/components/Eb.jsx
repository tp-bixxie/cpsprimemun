import React from 'react';
import styles, { layout } from '../../src/style';
import { ip1, ip2, mainlogo } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        
            <img src={ip1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
        
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Daksh Rajora (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            We gather today to introduce Daksh, an extraordinary individual assuming the prestigious role of International Press Chair. With a background in visual storytelling and a passion for capturing the human experience, Daksh is an alumnus of Chennai Public School.
            <br></br><br></br>
            Daksh stands tall as a luminary in commercial photography and filmmaking. Over six years, he has pursued excellence, pushing the boundaries of visual storytelling. His keen eye for detail and commitment to artistic integrity inspire audiences worldwide.
            <br></br><br></br>
            Accolades from prestigious photography competitions reinforce Daksh's position as a visionary artist. But his ambitions extend beyond photography. He aspires to become a feature film cinematographer, blending art and technology to create immersive cinematic worlds.
            <br></br><br></br>
            Chennai Public School provided Daksh with a foundation for his creative journey. As International Press Chair, he brings unparalleled experience, commitment to excellence, and enthusiasm for capturing the world through his lens. We anticipate remarkable contributions in fostering a vibrant press committee that will document the Model United Nations conference.
            <br></br>
            Let us extend a warm welcome to Daksh, a luminary in visual storytelling, an alumnus of Chennai Public School, and a visionary artist. Together, under his guidance, we embark on a journey of exploration, truth-seeking, and impactful storytelling.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={ip2} alt="icon" className='w-[40%] h-[40%] object-contain  rounded-full' /> 
        
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Soniah Naren (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Soniah, a student pursuing BE CSE with a specialization in data science, is proficient in elocution and public speaking. She has actively participated in the Verbal Encounters debate competition on multiple occasions, showcasing her skills in these areas. Furthermore, Soniah had the honor of co-chairing the UNSCW at CPS Prime MUN 1.0 conference.
            <br></br><br></br>

            As the Vice Chair of IP, Soniah brings a keen interest in global affairs to her role. She aims to navigate the complex maze of international relations and communicate news and updates in a manner that is easily understandable, even for individuals unfamiliar with the subject matter. Soniah hopes that this conference will have a meaningful impact on all the reporters and photographers involved.
            <br></br><br></br>

            Outside of her academic pursuits, one can find Soniah enjoying the music of Ekkstacy and Bladee.
            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb