import React from 'react';
import faq from '../static/media/FAQ.png';
const FAQs = () => {
  return (
    <div className="h-auto pb-10 font-xyz" id="faq">
      <div className="h-auto flex w-full mx-auto items-center justify-center md:flex-row flex-col-reverse">
        <div className="md:w-1/2 text-center">
          <img src={faq} className="md:h-[600px] mx-auto" alt="About Peppy" />
        </div>
        <div className="md:w-1/2 text-center">
          <div className="w-11/12 md:w-9/12 mx-auto text-left">
            <h1 className="text-7xl text-white font-extrabold pb-6">FAQs</h1>
            <div className="text-white text-2xl">
              <div>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">What is Peppy Stallion?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      Peppy Stallion is a character developed by a group of zoophiles. It consists of 10,000 supplies in ERC-721 blockchain. Each token consisting of a unique trait which is created in Procreate.
                    </p>
                  </div>
                </details>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">What is our commitment?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      Peppy stallion is committed to making a difference in the lives of working animals. We work in the protection, well-being, and welfare of animals, as well as creating awareness among individuals regarding the rights of animals to live in peace, health, and dignity in the same manner as human beings.
                    </p>
                  </div>
                </details>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">What is Digital Comics?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      A digital comic series is going to be published showcasing the story of Peppy Stallion for the community.
                    </p>
                  </div>
                </details>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">What is Peppy Stallion game?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      Yes, we are working on it and it's going to be adventurous.
                    </p>
                  </div>
                </details>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">How many traits have been used?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      A total sum of 700 unique traits including Skin, Expressions, Cloths, Accessories, Hair Types, and Backgrounds are designed.
                    </p>
                  </div>
                </details>
                <details className="p-4 rounded-lg">
                  <summary className="font-semibold bg-[#BF4040] rounded-full px-4 py-2 text-lg">How do I contact the team?</summary>
                  <div className="py-2 px-4 mx-7 border-l-[2px] border-b-[2px] border-r-[2px] rounded-b-xl">
                    <p className="text-base leading-6 text-white">
                      We kindly request you to open a ticket in Discord - <a target="_blank" rel="noopener" href="https://discord.gg/gs9H24AgeX">link</a>
                      <br />Or<br />
                      Write us at - <a target="_blank" rel="noreferrer" >support@peppystallion.com</a>
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
