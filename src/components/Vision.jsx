import React from 'react';
import vision from '../static/media/Vision.png';
import mission from '../static/media/Mission.png';

const Vision = () => {
  return (
    <div className="h-auto pb-10 font-xyz" id="vision">
      <div className="h-auto flex w-full mx-auto items-center justify-center md:flex-row flex-col-reverse">
        <div className="md:w-1/2 text-center">
          <img src={vision} className="md:h-[600px] mx-auto" alt="About Peppy" />
        </div>
        <div className="md:w-1/2 text-center">
          <div className="w-11/12 md:w-9/12 mx-auto text-left">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold pb-6">Vision</h1>
            <p className="text-white md:text-2xl text-lg text-justify">
              Through Peppy Stallion, we hope to create awareness within the community (and far beyond) that animals have
              the same right as humans to be treated with care and kindness and to peacefully co-exist with dignity.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto flex w-full mx-auto items-center justify-center md:flex-row flex-col">
        <div className="md:w-1/2 text-center">
          <div className="w-11/12 md:w-9/12 mx-auto text-left">
            <h1 className="text-7xl text-white font-extrabold pb-6">Mission</h1>
            <p className="text-white md:text-2xl text-lg text-justify">
              With technological advancements coming to the fore one after the other, our lives have progressed for the
              better. But are we doing enough so as to not endanger the balance between nature, humans and animals?
            </p>
            <p className="text-white md:text-2xl text-lg pt-10 text-justify">
              We believe that protecting the rights of animals, their welfare and well-being is key to maintaining the
              natural balance and providing a better world to live in for future generations.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <div className="mx-auto">
            <img src={mission} className="md:h-[600px] mx-auto" alt="About Peppy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
