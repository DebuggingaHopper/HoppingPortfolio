"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./indexIcon";
{
/*
  Project: HoppingPortfolio
  Description: This is a website that is meant for displaying myself for employers, and to display my projects alongside Resume in a easily digetsbale manner
  Date: 5/19/2024
*/
}

export default function Home() {
  return (
    
  /*
  Here we are creating the main content of the html document. the CSS is setting the main page's details in being flexible and utilizing the mionimum height to set based on the screen
  */
    <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      {/*
        BUG LOGGING:

        This div prevemnted us from utilizing the hover: command within our classNames
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]  ">
      */}

      


      {/*
        This divider contains the fiorst section of the page which is the main card that has a minor description, alongside my tree of items
      */}
      <div className="m-auto flex max-w-screen-xl flex-col items-center gap-6 p-6 lg:flex-row lg:gap-0 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

        {/*
        This is where we see create the divider that contains my text
      */}
        <div className="relative flex w-full flex-1 items-center lg:basis-[500px] lg:text-right ">
          <div className="flex-1 lg:pr-6">
            <h2 className="text-4xl font-bold">Refinement Every Day</h2>
            <h3 className="text-1xl text-center">
              <br></br>
              <br></br>Employers seeking a versatile expert in hospital systems,
              Oracle Databases, mobile app development, and server maintenance,
              look no further.<br></br>
              <br></br>I'm Nelson Josue Alvarez, at 22, I offer a potent
              combination of youthful vigor and seasoned proficiency to enhance
              your team's capabilities.
            </h3>
          </div>
          <div className="top-1/2 mt-px hidden h-px w-16 bg-green-500 lg:block"></div>
        </div>


        {/*
          This is where we set the unordered list
        */}
        <ul className="lg:basis-[750px]">
            {/*
            This is where we set the first item
            */}
          <li className="group relative py-6">
            <div className="absolute inset-0 hidden w-px bg-green-500 group-first:top-1/2 group-last:bottom-1/2 lg:block"></div>
              {/*
                  This creates the divider with a gap of 6, utilities to change the gap between both rows and columns in grid and flexbox layouts. Also we have 1024px
              */}
            <div className="items-center gap-6 lg:flex">
              <div className="relative mb-4 lg:mb-0 lg:pl-16">
                {/*
                  This is creates the last green line connecting to the long tree branch
                */}
                <div className="absolute left-0 top-1/2 hidden h-px w-full bg-green-500 lg:block"></div>
                {/*
                  This is creates the circle with the green border that contains the image
                */}
                <div className="relative grid h-24 w-24 rounded-full border border-solid border-green-500 bg-neutral-900 hover:animate-bounce">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-auto block h-full max-h-full w-10"
                    src="/Chargers.svg"
                    alt="Chargers Link"
                    width={180}
                    height={60}
                    priority
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">ChargersLink  <Icon name="bx bxl-flutter" size="25px" /><Icon name="bx bxl-android" size="25px" /> <Icon name="bx bxl-apple" size="25px" /></h3>
                <p className="opacity-75 text-white font-semibold">
                  A Cross-Platform Mobile Application for Capitol Technology
                  University built on Flutter. this application aimed at
                  improving student life and access to academic resources. The
                  primary goal was for this application to have the student's
                  needs met which involved alot of user input in implementing
                  shcedules, resources, and news that the student community
                  desired.
                </p>
              </div>
            </div>
          </li>
          <li className="group relative py-6">
            <div className="absolute inset-0 hidden w-px bg-green-500 group-first:top-1/2 group-last:bottom-1/2 lg:block"></div>
            <div className="items-center gap-6 lg:flex">
              <div className="relative mb-4 lg:mb-0 lg:pl-16">
                <div className="absolute left-0 top-1/2 hidden h-px w-full bg-green-500 lg:block"></div>
                <div className="hover:animate-bounce relative grid h-24 w-24 rounded-full border border-solid border-green-500 bg-neutral-900">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-auto block h-full max-h-10 w-full"
                    src="/portfolio.svg"
                    alt="Portfolio"
                    width={180}
                    height={60}
                    priority
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Portfolio <Icon name="bx bxl-typescript" size="25px" /> <Icon name="bx bxl-tailwind-css" size="25px" /> </h3>
                <p className="opacity-75 text-white font-semibold">
                  This portfolio page was constructed as a personal project to
                  display my knowledge, and the projects I have worked on since I have graduated from college.
                </p>
              </div>
            </div>
          </li>
          <li className="group relative py-6">
            <div className="absolute inset-0 hidden w-px bg-green-500 group-first:top-1/2 group-last:bottom-1/2 lg:block "></div>
            <div className="items-center gap-6 lg:flex">
              <div className="relative mb-4 lg:mb-0 lg:pl-16">
                <div className="absolute left-0 top-1/2 hidden h-px w-full bg-green-500 lg:block"></div>
                <div className="relative grid h-24 w-24 rounded-full border border-solid border-green-500 bg-neutral-900 hover:animate-bounce">
                  <svg
                    className="m-auto block h-full max-h-12 w-full"
                    fill="none"
                    height="15"
                    width="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M6.0068 13.4178L8.0068 1.4178L8.9932 1.5822L6.9932 13.5822L6.0068 13.4178ZM5.20711 4.5L2.20711 7.5L5.20711 10.5L4.5 11.2071L0.792892 7.5L4.5 3.79289L5.20711 4.5ZM10.5 3.79289L14.2071 7.5L10.5 11.2071L9.79289 10.5L12.7929 7.5L9.79289 4.5L10.5 3.79289Z"
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Elevar</h3>
                <p className=" opacity-75 text-white font-semibold">
                  Among the Hispanic American community many of the members
                  within our community have relatives within Small business or
                  Roofing, so this is an application made to serve their needs
                  in project management, recording and communication
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>


      {/*
        Here we create the divider that will have three collumns on the bottom 
      */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">


      {/*
        Most will follow the same design where they use an <a> tag but the <link> tag is for the part that connects to the resume page
      */}
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ieeexplore.ieee.org/abstract/document/10091077"
        >
          <h2 className="mb-3 text-2xl font-semibold">Published Paper </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-65">
            At the age of 22 I was able to work with a team to have{" "}
            <i>Crowdfunding Fraud Prevention using Smart Contracts</i> published
            in the 2023 IITCEE
          </p>
        </a>

        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="/PDF"
        >
          <h2 className="mb-3 text-2xl font-semibold">Resume </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-65">
            Find my resume within here and feel free to reach out!
          </p>
        </Link>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Hospital Sector Experience <Icon name="bx bxl-data" size="25px" /> <Icon name="bx bxl-postgresql" size="25px" /> 
          </h2>
          <p className=" m-0 max-w-[30ch] text-sm opacity-65">
            Have had the pelasure to work with hopsitals in cosntructing
            solutions to improve their workflow, suchg as inbound & outbound
            interfaces that integrate with Hospital Information Systems such as
            EPIC.
          </p>
        </a>
      </div>
    </main>
  );
}
