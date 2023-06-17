import React from 'react';
import styles, { layout } from "../../src/style";

const Rop = () => {
  const downloadLinks = [
    { committeeName: 'Rules of Procedure', guideLink: 'https://example.com/guide1.pdf' },
    { committeeName: 'Position Paper', guideLink: 'https://example.com/guide1.pdf' },
   
  ];

  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    
    <section
    id="letter"
    className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}
  >
    
    <div
      className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
    >
      <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
             <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-white text-[30px]">
               Reference Documents
              </span>
            </p>
    <div className="relative overflow-x-auto shadow-md rounded-[20px] bg-white items-center mb-6 ">
    
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-formal ">
        <thead className="text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b text-[20px]">
          <tr>
            <th scope="col" className="px-6 py-4 text-[18px]">
            Document
            </th>
            <th scope="col" className="px-6 py-4 text-[18px]">
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {downloadLinks.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-black text-center">{item.committeeName}</td>
              <td className="px-6 py-4 text-black text-center">
                <button className=' text-white font-bold py-2 px-6 bg-primary rounded-full' onClick={() => handleDownload(item.guideLink)}>
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Rop;
