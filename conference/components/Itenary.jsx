import React from 'react';
import styles, { layout } from '../../src/style'

const Itenary = () => {
  return (
     <section id="letter" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} items-center`}>
        <h2 className={`${styles.heading2}  text-white text-center `}>
          Itenary
        </h2>
        <div className={`${layout.section} flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-black text-[30px]">Day 1</span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
            >
              <div className="relative overflow-x-auto shadow-md rounded-[20px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-formal">
        <thead className=" text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b text-[20px] ">
            <tr>
                <th scope="col" className="px-6 py-4 text-[18px]">
                      Time
                </th>
                <th scope="col" className="px-6 py-4 text-[18px]">
                    Event
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                07:30 AM - 08:00 AM
                </th>
                <td className="px-6 py-4">
                Reporting
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                   08:00 AM - 08:40 AM
                </th>
                <td className="px-6 py-4 ">
                Opening Ceremony
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    09:00 AM - 11:00 AM
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                    Committee Session 1
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    11:00 AM - 11:20 AM
                </th>
                <td className="px-6 py-4">
                    Recess Break
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    11:20 AM - 01:20 PM
                </th>
                <td className="px-6 py-4">
                    Committee Session 2
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    01:20 PM - 2:20 PM
                </th>
                <td className="px-6 py-4">
                    Lunch Break
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    02:20 PM - 03:20 PM
                </th>
                <td className="px-6 py-4">
                    Committee Session 3
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    03:20 PM - 03:40 PM
                </th>
                <td className="px-6 py-4">
                    Recess Break
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    03:40 PM - 05:00 PM
                </th>
                <td className="px-6 py-4">
                    Committee Session 4
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-black text-[30px]">Day 2</span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
            >
              <div className="relative overflow-x-auto shadow-md rounded-[20px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-formal">
        <thead className=" text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b text-[20px] ">
            <tr>
                <th scope="col" className="px-6 py-4 text-[18px]">
                      Time
                </th>
                <th scope="col" className="px-6 py-4 text-[18px]">
                    Event
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    07:30 AM - 08:00 AM
                </th>
                <td className="px-6 py-4">
                    Reporting
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    08:00 AM - 10:00 AM
                </th>
                <td className="px-6 py-4">
                    Committee Session 5
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    10:00 AM - 10:20 AM
                </th>
                <td className="px-6 py-4">
                    Recess Break
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    10:20 AM - 12:00 PM
                </th>
                <td className="px-6 py-4">
                    Committee Session 6
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    12:00 PM - 01:30 PM
                </th>
                <td className="px-6 py-4">
                   Lunch
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    01:30 PM - 02:30 PM
                </th>
                <td className="px-6 py-4">
                    Committee Session 7
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    02:30 PM - 04:00 PM
                </th>
                <td className="px-6 py-4">
                    Socials
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    04:00 PM - 05:00 PM
                </th>
                <td className="px-6 py-4">
                    Closing Ceremony
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

     </section>
  )
}
export default Itenary