import React from 'react';
import styles, { layout } from '../style'

const Letter = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white`}>
      <div className={`mr-[20px] ml-[20px] md:mr-[300px] md:ml-[300px] ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}  text-black `}>
          Welcome to CPS Prime MUN
        </h2>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        <span className='font-bold'>Dear Delegates and Advisors,</span>
        </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>Greetings to all!</p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
              As the Secretary-General of CPS Prime Model United Nations, I am thrilled to announce the second iteration of our conference, taking place on July 21 and 22, 2023. CPS Prime MUN offers a dynamic and immersive experience, focusing on addressing pressing global issues through stimulating debates and negotiations. We aim to inspire, empower, and transform delegates, providing comprehensive training programs and inclusive committee environments.


              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
              This year, we are introducing new initiatives, including Pre-Conference Training Workshops, to enhance the overall experience. Our refreshed documents, such as Rules of Procedure and position paper guidelines, ensure every delegate has an enriching time. We strive to bridge the gap between committee discussions and the outside world, hosting a Community Fair to showcase student initiatives and nonprofit organizations.


              </p>
              
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify `}>
              To secure your seat, please register soon and feel free to reach out to our team for any assistance. Thank you for your support, and we look forward to a successful conference in July. Welcome to CPS Prime MUN!
              </p>

              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              Nitin Balaji
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              Secretary-General
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              CPS Prime Model United Nations
              </p>
      </div>

     </section>
  )
}
export default Letter