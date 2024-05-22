"use client";
import React from "react";
import { Icon } from "./indexIcon";
import Typewriter from "react-ts-typewriter";
{
  /* 
     This allows us to create the navbar itself
     We import our Icon from indexIcon so we can use boxIcons without any issue
     What we wanted was to create a traditonal navigation bart but what i decided to do was just impement a personal touch to the webpage
  */
}
const Navbar = () => {
  return (
    <>
      {/* 
            This creatse the divider where we have the darkness gradient color
        */}
        
      <div className="w-full flex-nowrap bg-gradient-to-r from-zinc-900 to-slate-700 sticky top-0">
        {/* 
            This creates another divider which is meant as a container
        */}

        <div className="container mx-auto flex justify-between items-center">
          {/* 
            This creates our name on the left of the screen
        */}
          <a
            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D_NfcYjPq-RE&ved=2ahUKEwjY_7KUrJeGAxUHD1kFHQPkDSQQtwJ6BAhBEAI&usg=AOvVaw17MX1V-12iSIjYTJTQQUaU"
            className="text-2xl font-bold hover:text-gray-300"
          >
            Nelson Alvarez
          </a>
           {/* 
            Within here is where we create the interesting navbar where it shows a unique grep command for my GitHub username and then has the three folders they can go to which are direct links to my social medias and email
        */}
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Typewriter
              text='Grep -R "DebuggingaHopper"'
              delay={5500}
              loop={true}
            />
            <a className="hover:text-gray-300" href="https://github.com/DebuggingaHopper">
            <code className="font-mono font-bold">  /<Icon name="bx bxl-github" size="16px" />Github </code>
            </a>

            <a className="hover:text-gray-300" href="https://www.linkedin.com/in/nelson-alvarez-62027b189">
            <code className="font-mono font-bold">  /<Icon name="bx bxl-linkedin-square" size="16px" />WorkForce </code>
            </a>

            <a className="hover:text-gray-300" href="mailto:“nelson.j.alvarez01@gmail.com">
            <code className="font-mono font-bold">  /<Icon name="bx bxs-envelope" size="16px" />Contact/ </code>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

