import React from 'react';
import Logo_01 from '../static/media/Logo_01.png'
import opensea from '../static/media/social-icon/opensea.png';
import discord from '../static/media/social-icon/discord.png';
import twitter from '../static/media/social-icon/twitter.png';
import { Link } from 'react-scroll';
const Navbar = () => {

  return (
    <nav className="z-10 w-full fixed bg-[#017777]">
      <div className="md:max-w-8xl w-auto md:mx-10 px-4 sm:px-6 lg:px-0 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex md:items-end w-full md:justify-between font-xyz">
            <div className="flex-shrink-0">
              <img className="h-9" src={Logo_01} alt="Workflow" />
            </div>
            <div className="hidden md:block self-center">
              <div className="ml-10 flex items-center space-x-4 align-middle justify-center">
                <Link to="video" spy
                  smooth
                  offset={-70}
                  duration={800} className="text-white hover:bg-[#BF4040] hover:text-white px-3 py-2 rounded-md text-lg font-medium ">Home</Link>
                <Link to="about" spy
                  smooth
                  offset={-45}
                  duration={800} className="text-white hover:bg-[#BF4040] hover:text-white px-3 py-2 rounded-md text-lg font-medium">About</Link>
                <Link to="team" spy
                  smooth
                  offset={-40}
                  duration={800} className="text-white hover:bg-[#BF4040] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Team</Link>
                <Link to="vision" spy
                  smooth
                  offset={-70}
                  duration={800} className="text-white hover:bg-[#BF4040] hover:text-white px-3 py-2 rounded-md text-lg font-medium">Vision</Link>
                <Link to="faq" spy
                  smooth
                  offset={-120}
                  duration={800} className="text-white hover:bg-[#BF4040] hover:text-white px-3 py-2 rounded-md text-lg font-medium">FAQs</Link>
                <div className="border border-[#8cc1c1] rounded-md bg-[#8cc1c1] p-3 flex items-center space-x-5 h-10">
                  <a href="https://twitter.com/PeppyStallion" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <img src={twitter} alt="Twitter" className="h-8 w-8" />
                  </a>
                  <a href="https://discord.gg/ZdHeY4pVUY" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <img src={discord} alt="Discord" className="h-7 w-7" />
                  </a>
                  <a href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <img src={opensea} alt="OpenSea" className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
