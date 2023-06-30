import React from 'react';
import styles, { layout } from "../../src/style";

const Bgguide = () => {
  const downloadLinks = [
    { committeeName: 'UNGA (SPECPOL)', guideLink: 'https://drive.google.com/file/d/1vPnCROhFwWSYhT9XQYs26Sle3dNnFrU-' },
    { committeeName: 'UNHRC', guideLink: 'https://drive.google.com/file/d/1AORypxJK220F84gsZRozHOuQeaPKjCPB' },
    { committeeName: 'UNCSW', guideLink: 'https://drive.google.com/file/d/1gPKHhZeHrIUH6pNHd3glvrubdZKa7iqS' },
    { committeeName: 'UNSC', guideLink: 'https://drive.google.com/file/d/1XHimtTG6pWzKhpUMo1bhtnbkMCuyND0N' },
    { committeeName: 'G20', guideLink: 'https://drive.google.com/file/d/1ei8Nbp69Zx3iQMyq-uTybRTCfodJCxB5' },
    { committeeName: 'IP', guideLink: 'https://drive.google.com/file/d/1MDKA7Rw7982F1TiPmJWBl0yK4o9RGzgg' },
    { committeeName: 'ECOSOC', guideLink: 'https://drive.google.com/file/d/10W5ZsVlOEy5yEd2vmZjWrgaq3-94pW8F' },
    { committeeName: 'UNFCCC', guideLink: 'https://drive.google.com/file/d/1iRD8lbjpA0KusonNt2_-AnK3RVfehr9B' },
    { committeeName: 'WHO', guideLink: 'https://drive.google.com/file/d/1sVjxCGbG6CYvKe9OMas3SSLItSwrVFMc' },
  ];

  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section
    
  >
    <hr style={{ width: '100%', borderWidth: '10', borderBottom: '1px solid black items-center' }} />
    <div id="letter"
    className={`${layout.section}  flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
    >
      <div
            className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
          >
             <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-black text-[30px]">
                Backgroud Guides
              </span>
            </p>
    <div className="relative overflow-x-auto shadow-md rounded-[20px] bg-white items-center mb-6 ">
    <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
             <div
            className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
          >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-formal ">
        <thead className="text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b text-[20px]">
          <tr>
            <th scope="col" className="px-6 py-4 text-[18px] ">
              Committee Name
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
              <td className="px-6 py-4 text-center">
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
    </div>
    </div>
    </div>
    </section>
  );
};

export default Bgguide;
