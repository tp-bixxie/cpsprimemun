import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo, unga1, unga2 } from '../../src/assets';

const Eb = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>

            <img src={unga1} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
   
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Atheeb Hussain (Chair) 
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Atheeb has an impressive range of accomplishments across multiple fields. With extensive experience in Model United Nations, he has won many best delegate awards and has been recognized for his exceptional public speaking skills, including a Best Speaker Award at a panel debate (National Level) and for his thesis paper 3rd best among the countries India, Nigeria, and Saudi Arabia. Before this, he has also been a Director General of CPS PRIME MUN (best MUN). <br></br><br></br>
            
            When he's not busy designing the batmobile he utilizes his exemplary engineering skills to build really fast tiny cars, one of them was fast enough to earn him a spot in the F1 in Schools World Finals, Singapore. As Mclovin from Superbad, he has created several applications and web3 websites as a freelancer, demonstrating his expertise in this field. <br></br><br></br>
            
            Atheeb's talents are not limited to academics and technology; he's a multi-instrumentalist and he can bore you in, up to seven languages. As if these many achievements were not enough to warrant Atheeb looking down on you, Atheeb stands at an astonishing 6'1 to ensure that even if you dwarf him in achievements, you will never dwarf him in real life.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
       
            <img src={unga2} alt="icon" className='w-[40%] h-[40%] object-contain rounded-full' /> 
 
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center mt-4'>
            Yohan Sumodh (Co-Chair)
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px] text-justify"><br></br>
            Meet Yohan, the self-proclaimed master of words and weights, who's about to take the world by storm! With a passion for debating that rivals even the most seasoned politicians, Yohan can turn a simple conversation into a fierce battleground of wits and arguments. Just don't challenge him unless you're armed with a dictionary and a quick wit!
            <br></br><br></br>
            But that's not all—Yohan's love for debates is only matched by his obsession with the gym. He's a gym freak in the truest sense, pumping iron with a determination that would make even Hercules envious. You'll often find him flexing his muscles and engaging in deep intellectual discussions simultaneously, proving that brains and brawn can coexist in perfect harmony.
            <br></br><br></br>
            As Yohan bids you farewell with an au revoir and good luck, remember that his razor-sharp tongue and bulging biceps are a force to be reckoned with. So, brace yourself for the whirlwind of laughter, eloquence, and physical prowess that accompanies this debater extraordinaire. Yohan is ready to take on the world—one debate and one rep at a time!

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Eb