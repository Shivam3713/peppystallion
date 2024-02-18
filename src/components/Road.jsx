import React, { useState } from 'react';
import pin1 from '../static/media/Road/Road0002.png';
import pin2 from '../static/media/Road/Road0005.png';
import pin3 from '../static/media/Road/Road0006.png';
import pin4 from '../static/media/Road/Road0004.png';
import pin5 from '../static/media/Road/Road0003.png';
import team from '../static/media/Team.png';
import callout1 from '../static/media/Callout0001.png';

const Road = () => {
  const roadmap = [
    {
      percentage: '25',
      description: 'The sum amount will be allocated among the NFT artists and team members contributing to the project.',
    },
    {
      percentage: '50',
      description: "SAMABHAVA: Supports abandoned animals through adoption, education, and donations. Connect for animal welfare. Visit",
      link: 'https://samabhava.org/cms/',
    },
    {
      percentage: '75',
      description: 'Will be launching a catchy comic about Peppy Stallion',
    },
    {
      percentage: '100',
      description: 'Will be disclosed soon (something big coming up)',
    },
  ];

  const [percentage, setPercentage] = useState(roadmap[0].percentage);
  const [description, setDescription] = useState(roadmap[0].description);
  const [visitLink, setVisitLink] = useState('');

  const handleMouseOver = (index) => {
    setPercentage(roadmap[index].percentage);
    setDescription(roadmap[index].description);
    if (index === 1) {
      setVisitLink(roadmap[index].link);
    } else {
      setVisitLink('');
    }
  };

  return (
    <div className="md:mt-24" id="road">
      <h1 className="text-5xl md:text-7xl text-white font-extrabold w-1/2 mx-auto text-left pb-12 font-xyz">Roadmap</h1>
      <div className="h-screen text-8xl bbb md:block hidden">
        <div className="h-full flex w-full mx-auto items-center justify-center md:flex-row flex-col">
          <div className="md:w-1/2 text-center h-full">
            <div className="relative h-full">
              <img src={pin1} alt="" className="absolute right-[48%] hover:animate-bounce" />
              <img src={pin2} alt="" className="absolute right-[30%] top-[5%] hover:animate-bounce" onMouseEnter={() => handleMouseOver(0)} />
              <img src={pin3} alt="" className="absolute right-[15%] top-[20%] hover:animate-bounce" onMouseEnter={() => handleMouseOver(1)} />
              <img src={pin4} alt="" className="absolute right-[75%] top-[40%] hover:animate-bounce" onMouseEnter={() => handleMouseOver(2)} />
              <img src={pin5} alt="" className="absolute right-[10%] top-[60%] hover:animate-bounce" onMouseEnter={() => handleMouseOver(3)} />
            </div>
          </div>
          <div className="w-1/2 text-center pb-36">
            <img src={team} alt="" className="h-[570px] mx-auto" style={{ transform: 'scale(0.7)' }} />
            <div className="relative">
              <div className="absolute top-[-790px] right-[180px]">
                <img src={callout1} alt="" className="h-80" />
                <div className="absolute top-20">
                  <div className="w-1/2 mx-auto mt-[-1.5rem]">
                    <h1 className="text-3xl font-bold">@{percentage}%</h1>
                    <p className="text-base pt-2 w-5rem font-abc">
                      {description} {visitLink !== '' ? <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">SAMABHAVA</a> : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-9/12 mx-auto">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-[16px] ring-[#c04040] dark:ring-gray-900 dark:bg-[#c04040]">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-3xl font-semibold text-gray-900 dark:text-white pl-4">Progress @ 25% </h3>
            <p className="mb-4 pl-4 text-lg font-normal text-gray-500 dark:text-gray-300">The sum amount will be allocated among the NFT artists and team members contributing to the project.</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-[16px] ring-[#c04040] dark:ring-gray-900 dark:bg-[#c04040]">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-3xl pl-4 font-semibold text-gray-900 dark:text-white">Progress @ 50%</h3>
            <p className="text-lg pl-4 font-normal text-gray-500 dark:text-gray-300">
  SAMABHAVA: Supports abandoned animals through adoption, education, and donations. Connect for animal welfare. 
  Visit {' '}
  <a href="https://samabhava.org/cms/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
    SAMABHAVA
  </a>
</p>


          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-[16px] ring-[#c04040] dark:ring-gray-900 dark:bg-[#c04040]">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-3xl pl-4 font-semibold text-gray-900 dark:text-white">Progress @ 75%</h3>
            <p className="text-lg pl-4 font-normal text-gray-500 dark:text-gray-300">Will be launching a catchy comic about Peppy Stallion</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-[16px] ring-[#c04040] dark:ring-gray-900 dark:bg-[#c04040]">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-3xl pl-4 font-semibold text-gray-900 dark:text-white">Progress @ 100%</h3>
            <p className="text-lg pl-4 font-normal text-gray-500 dark:text-gray-300">Will be disclosed soon (something big coming up)</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Road;
