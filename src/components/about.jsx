import React, { useState } from "react";
import * as aiIcons from "react-icons/ai";
import DownIcon from "../assets/images/icons/Group 15.svg";
import AboutImage from "../assets/images/icons/pencilsketchadjusted-7208867 1.svg";
import Card from "./card";
import Article from "./article";
import { Link } from "react-router-dom";
import ProjectDetails from "./projectDetails";
import projectImage from "../assets/images/pexels-photo-2808402.jpeg"
import AiImage from "../assets/images/pexels-photo-8036979.jpeg"
import AiPowerImage from "../assets/images/pexels-photo-7773535.jpeg"
import App from "./test";
const AboutMe = () => {
  const [viewProjectDetails, setViewProjectDetails] = useState(false);
  const handleViewProjectDetails = () => {
    setViewProjectDetails(true);
  };
  return (
    <>
      <div className=" top-[44rem] md:top-[57rem] 2xl:top-[60rem] absolute w-full " id="about">
        <h1 className="font-bold text-xl xl:text-[2rem] 2xl:pt-6 text-center ">
          Who is Rene?
        </h1>
        <hr className="w-10 lg:w-20 2xl:w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
        <div className="block lg:flex gap-0 2xl:gap-10 ml-1 xl:ml-32 mr-10">
          <div className=" ml-[25%] md:ml-[25%] xl:ml-[5%] w-[16rem] md:w-[40rem] xl:w-[32rem] 2xl:w-[40rem] ">
            <img src={AboutImage} alt="" className="w-full" />
          </div>
          <div className="mt-10 ml-[10%] md:ml-[12%] xl:mt-28 2xl:mt-32">
            <h1 className=" text-sm md:text-[1.2rem] xl:text-[1.7rem] font-bold uppercase">
              Ntirenganya Rene Promesse{" "}
              <span className="text-sm md:text-[16px] lg:text-[1.2rem] 2xl:text-[1.4rem] font-normal capitalize">
                is the best known as:
              </span>
            </h1>
            <ul className=" md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] font-medium ml-5 lg:ml-0 2xl:ml-10 text-black list-disc py-3 ">
              <li className="py-1">
                Software Engineer currently working at Codeland s.r.l
              </li>
              <li className="py-1">
                Researcher, currently working on solving the complexity of how
                machines can understand Kinyarwanda
              </li>
              <li className="py-1">
                Founder of KASUKU, a Kinyarwandan Personal Assistant
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full ">
          <div className="float-right mr-20">
            <h1 className="font-bold text-base xl:text-[1.7rem] 2xl:text-[2rem]  text-center">
              Explore More
            </h1>
            <hr className="w-10 2xl:w-28 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
          </div>

          <div className=" mt-20 ml-0 xl:ml-32 ">
            <h1 className="font-bold text-base xl:text-[1.6rem] 2xl:text-[2rem]  text-center">
              What has he done?
            </h1>
          
            <hr className="w-10 2xl:w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-20 ml-[5%] md:ml-[2%] 2xl:ml-[8%]">
              <Card name="Power of AI" onClick={handleViewProjectDetails} details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " image={projectImage}/>
              <Card name="Power of AI" onClick={handleViewProjectDetails} details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " image={projectImage}/>
              <Card name="AI vs Human" onClick={handleViewProjectDetails} details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " image={AiImage}/>
              <Card name="Natural " onClick={handleViewProjectDetails} details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " image={AiPowerImage}/>
              <Card name="Natural " onClick={handleViewProjectDetails} details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " image={AiPowerImage}/>
            </div>
          {viewProjectDetails&& <ProjectDetails/>}
          {viewProjectDetails && <div className="mt-10 ml-10">
              <img
                src={DownIcon}
                alt=""
                onClick={() => setViewProjectDetails(false)}
                width={30}
                className="m-auto"
              />
            </div>}
          
          
         
        </div>
          <>
            <div >
            <div className=" mt-20 ">
            <h1 className="font-bold text-[28px] 2xl:text-[2rem] text-center">
              What has he Wrote?
            </h1>
            </div>
            <hr className="w-64 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
              <div className="mt-20 mx-10 md:ml-32 md:mr-20 lg:flex justify-between ">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023"
                  like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
              <div className="mt-10 mx-10 md:ml-32 md:mr-20 lg:flex justify-between">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
              <div className="mt-10 mx-10 md:ml-32 md:mr-20  lg:flex justify-between">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
            </div>
          <Link to="/articles">  <div className="float-right mr-20 mt-10 " >
            <h1 className="font-bold text-[20px]  text-center">
              Explore More
            </h1>
            <hr className="w-28 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
          </div></Link> 
          </>
          {/* <App/> */}
      </div>
    </>
  );
};
export default AboutMe;
