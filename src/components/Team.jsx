import React, { useState } from 'react';
import t01 from '../static/media/Teams0001.png'
import t02 from '../static/media/Teams0002.png'
import t03 from '../static/media/Teams0003.png'
import t04 from '../static/media/Teams0004.png'
import t05 from '../static/media/Teams0005.png'
import t06 from '../static/media/Teams0006.png'
import mainImage from '../static/media/RoadMap.png'
import callOut from '../static/media/Callout0002.png'
const Team = () => {
  const teamMembers = [
    {
      name: 'Om Prakash Raju',
      title: 'Captain Creative',
      description:
        'Leads the creative pack. Has over 15 years treasured experience in Game Art Design. Has launched over a dozen games on Google Play that have been downloaded at least 10 MILLION times.',
    },
    {
      name: 'Arun HM',
      title: 'The Architect',
      description:
        'Strategic Business Analyst adept at problem-solving, with a background in requirements, process improvement, and stakeholder management for digital solutions.',
    },
    {
      name: 'Anil Kumar',
      title: 'Pencil King',
      description:
        'Chief artist skilled in bringing historical stories and characters to life. With over two decades of freelance work, specializing in character art, design, and illustrations.',
    },
    {
      name: 'Hrithik Kariyappa',
      title: 'Star Tech',
      description:
        'Discord Manager and Head of Problem Solving. Has a degree in computer science engineering, a diploma in 3D and VFX and over 5 years\' experience working in the IT industry.',
    },
    {
      name: 'Shivam',
      title: 'La Scholar',
      description:
        'Web3 developer. Computer science engineer. Known within the group as being brainier than most. When not developing softwares, backpacks and travels on his beloved bike to feed his spiritual intellect.',
    },
    {
      name: 'Rachita Wesley',
      title: 'The Octopus',
      description:
        'Not just an artist with a Masters degree in Fine Art. Has her fingers . . . oops, tentacles . . . in several pies. Over a decade\'s experience in designing characters, designing/developing games and graphics for games.',
    },
  ];
  const [name, setName] = useState(teamMembers[0].name);
  const [title, setTitle] = useState(teamMembers[0].title);
  const [description, setDescription] = useState(teamMembers[0].description);
  // const defaultMember = {
  //   name: 'Om Prakash Raju',
  //   title: 'Captain Creative',
  //   description:
  //     'Leads the creative pack. Has over 15 years\' treasured experience in Game Art Design. Has launched over a dozen games on Google Play that have been downloaded at least 10 MILLION times.',
  // };

  // const [dataChange, setDataChange]= useState(defaultMember);
  const handleMouseOver=(member)=>{
    // console.log(member.name);
    // setDataChange(member);
    setName(member.name);
    setTitle(member.title);
    setDescription(member.description);

  }
  return (
    <div className="h-auto md:h-screen" id="team">
      <div className="h-full flex w-full mx-auto items-center justify-center md:flex-row flex-col">
        <div className="md:w-1/2 w-full text-center">
          <h1 className="text-5xl text-white font-extrabold pb-10">Team</h1>
          <div className="flex justify-evenly">
            <div>
              <img
                src={t01}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[0])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Om</h1>
            </div>
            <div>
              <img
                src={t02}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[1])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Arun</h1>
            </div>
            <div>
              <img
                src={t03}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[2])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Anil</h1>
            </div>
          </div>
          <div className="flex justify-evenly pt-10 pb-16 md:pb-16">
            <div>
              <img
                src={t04}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[3])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Hrithik</h1>
            </div>
            <div>
              <img
                src={t05}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[4])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Shivam</h1>
            </div>
            <div>
              <img
                src={t06}
                alt=""
                className="md:h-48 h-28 hover:shadow-2xl rounded-3xl hover:scale-110 transition-all duration-500"
                onMouseOver={() => handleMouseOver(teamMembers[5])}
              />
              <h1 className="pt-2 text-xl text-white font-bold">Rachita</h1>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center mt-36">
          <div className="relative"><div>
            <img
              src={mainImage}
              className="h-[650px] mx-auto pb-16 md:pb-0 transform scale-x-[-1]"
              alt=""
            />
          </div>
            <div className="absolute md:top-[-130px] top-[-190px]">
              <img
                src={callOut}
                alt=""
                className="md:h-96 h-72"
              />
              <div className="absolute md:top-20 top-10">
                <div className="w-10/12 mx-auto">
                  <h1 className="md:text-3xl text-xl font-abc">{name}</h1>
                  <h2 className="md:text-xl text-lg">
                    <span className="font-abc italic">aka</span> {title}
                  </h2>
                  <p className="md:text-[16px] text-[12px] pt-1 font-abc">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
