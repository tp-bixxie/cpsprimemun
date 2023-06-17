import React from 'react';
import styles from '../src/style';
import { Navbar, Footer } from '../src/components'; 
import { Content, Banner, Map, Bgguide, Rop } from './components'; 




const App = () => {
  return (
    
    <div className='bg-primary w-full overflow-hidden'>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <Navbar />
        
        </div>
        
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner />
        </div>
      </div>
    
     
      
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Rop />
        
       
        
       
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Bgguide /> 
        </div>
      </div>
      
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>        
        <Map />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App