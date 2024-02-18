import React from 'react';
import About1 from '../static/media/About.png'
import About2 from '../static/media/Why.png'
const About = () => {
  return (
    <div className="h-auto pb-10 font-xyz" id="about" >
      <div className="h-auto flex w-full mx-auto items-center justify-center md:flex-row flex-col">
        <div className="md:w-1/2 text-center">
          <div className="w-11/12 md:w-9/12 mx-auto text-left">
            <h1 className="pt-6 md:pt-6 text-3xl md:text-7xl text-white font-extrabold pb-6">What is Peppy Stallion?</h1>
            <p className="text-white md:text-2xl text-lg text-justify">
              A collection of exclusive, expressive and inspirational NFTs of a stallion proudly named Peppy. The brainchild
              of passionate artists, game developers, web3 developers and crypto-enthusiasts, our charismatic Peppy Stallion
              was conceived out of the idea ‘dream big, work hard and don’t forget to have fun, and you will emerge
              victorious in quest of your goal’. Peppy Stallion is fun, stylish and here to shake up the NFT universe!
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <img src={About1} alt="About Peppy" />
        </div>
      </div>
      <div className="h-auto flex w-full mx-auto items-center justify-center md:flex-row flex-col-reverse">
        <div className="md:w-1/2 text-center">
          <img src={About2} alt="About Peppy" className="md:h-[800px] mx-auto" />
        </div>
        <div className="md:w-1/2 text-center">
          <div className="w-11/12 md:w-9/12 mx-auto text-left">
            <h1 className="pt-6 md:pt-6 text-3xl md:text-7xl text-white font-extrabold pb-6">Why Peppy Stallion?</h1>
            <p className="text-white md:text-2xl text-lg text-justify">
              We believe that art can be both inspirational and FUN. We hope to elevate this experience through our art,
              more specifically through Peppy. Each piece of artwork in Peppy Stallion's MEGA NFT pack is hand-drawn, bold
              and unique in theme, and created to encourage you to explore a world of possibilities. In a world that has
              opportunities galore, anyone can become whatever they’d like to be – and we’ve transformed Peppy into
              everything that he wants to be. We wish to build a community that evolves, inspires and where members
              encourage one another to follow their dreams and passion. We know Peppy has got your back!{' '}
              <span className="font-extrabold">#ridewithpeppy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
