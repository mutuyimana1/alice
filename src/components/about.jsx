import React, { useEffect, useState } from "react";
import * as aiIcons from "react-icons/ai";
import DownIcon from "../assets/images/icons/Group 15.svg";
import AboutImage from "../assets/images/pexels-mahdi-chaghari-12975826.jpg";
import Card from "./card";
import Article from "./article";
import TextTruncate from 'react-text-truncate';
import { Link, useNavigate } from "react-router-dom";
import ProjectDetails from "./projectDetails";
import Projects from "./projects";
import { articles, information } from "../data/data";

import { Collapse } from 'antd';
import App from "./test";
// import TypingEffect from "./typing";
const AboutMe = () => {
  const [activePanelKey, setActivePanelKey] = useState(null);
  const [texts, settexts] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui odio. Suspendisse pretium enim non turpis vulputate commodo. Vivamus maximus velit justo, in maximus nulla faucibus quis. Nam rhoncus molestie eros sit amet tempor. Praesent at erat nibh. Duis nunc dolor, fringilla quis justo in, cursus bibendum metus. Maecenas porttitor odio a pharetra malesuada. Morbi eget commodo libero. Nulla dapibus porttitor lorem nec dapibus. Vestibulum posuere, ante sagittis laoreet bibendum, velit nulla suscipit sem, at rhoncus magna turpis at velit. Sed finibus nibh metus, ut vestibulum ligula vehicula vitae. Ut sit amet euismod odio. Donec sed eleifend enim. In pretium libero non metus posuere, vel vestibulum neque varius.");
    const [displaytexts, setDisplaytexts] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < texts.length) {
                setDisplaytexts(prevDisplaytexts => prevDisplaytexts + texts.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, 20); 

        return () => {
            clearInterval(typingInterval);
        };
    }, [index, texts]);

  const navigate = useNavigate();
  const handleViewProjectDetails = (key) => {
    setActivePanelKey(prevKey => (prevKey === key ? null : key));
  };
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui odio. Suspendisse pretium enim non turpis vulputate commodo. Vivamus maximus velit justo, in maximus nulla faucibus quis. Nam rhoncus molestie eros sit amet tempor. Praesent at erat nibh. Duis nunc dolor, fringilla quis justo in, cursus bibendum metus. Maecenas porttitor odio a pharetra malesuada. Morbi eget commodo libero. Nulla dapibus porttitor lorem nec dapibus. Vestibulum posuere, ante sagittis laoreet bibendum, velit nulla suscipit sem, at rhoncus magna turpis at velit. Sed finibus nibh metus, ut vestibulum ligula vehicula vitae. Ut sit amet euismod odio. Donec sed eleifend enim. In pretium libero non metus posuere, vel vestibulum neque varius.
  `;

  const collapsePanels = information.map((info, index) => ({
    key: index.toString(),
    label: (
      <div
        className="mt-20 ml-[5%] md:ml-[2%] 2xl:ml-[3%]"
        key={index}
      >
          <Card
            name={info?.title}
            onClick={() => handleViewProjectDetails(index.toString())}
            details={info?.discription}
            image={info?.image}
          />
      </div>
    ),
    children: (
      <p>{text}</p>
    ),
  }));

  return (
    <>
      <div className=" top-[55rem] md:top-[60rem] 2xl:top-[62rem] absolute w-full" id="about">
        <h1 className="font-bold text-xl xl:text-[2rem] 2xl:pt-20 text-center">
          Who is Alice?
        </h1>
        <hr className="w-10 lg:w-20 2xl:w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
        <div className="block lg:flex gap-0 2xl:gap-20 ml-1 xl:ml-32 mr-20">
          <div className=" ml-[25%] md:ml-[25%] xl:ml-[5%] w-[16rem] md:w-[40rem] xl:w-[32rem] 2xl:w-[40rem] mt-10 ">
            <img src={AboutImage} alt="" className="w-full" />
          </div>
          <div className="mt-20 pl-10 lg:pl-0 xl:mt-28 2xl:mt-[16rem]">
            <h1 className=" text-sm md:text-[1.2rem] xl:text-[1.7rem] font-bold uppercase">
              Mutuyimana Alice Developer{" "}
              <span className="text-sm md:text-[16px] lg:text-[1.2rem] 2xl:text-[1.4rem] font-normal capitalize">
                is the best known as:
              </span>
            </h1>
            <ul className=" md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] font-medium ml-5 lg:ml-0 2xl:ml-10 text-black list-disc py-3 ">
              <li className="py-1">
                Software Engineer currently working at Samphone
              </li>
              <li className="py-1">
                Researcher, currently working on solving the complexity of how
                machines can understand Kinyarwanda
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full">
          <div className=" mt-20 ml-0 xl:ml-32 ">
            <h1 className="font-bold text-base xl:text-[1.6rem] 2xl:text-[2rem]  text-center">
              What has he done?
            </h1>

            <hr className="w-10 2xl:w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded"/>
          </div>
          <Collapse ghost activeKey={activePanelKey} onChange={setActivePanelKey} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {collapsePanels.map(panel => (
              <Collapse.Panel key={panel.key} header={panel.label} showArrow={false}>
                <div id="typing-texts" className="px-7 py-7 text-lg font-normal shadow-md w-full"> 
                 
                  {panel.children}
                </div>
              </Collapse.Panel>
            ))}
          </Collapse>

        </div>
        <>
          <div >
          
            <div className=" mt-20 ">
              <h1 className="font-bold text-[28px] 2xl:text-[2rem] text-center">
                What has he Wrote?
              </h1>
            </div>
            <hr className="w-64 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
            <div className="mt-20 mx-10 md:ml-32 md:mr-20 lg:fdlex grid grid-cols-1 md:grid-cols-2 justsify-between gap-10">
              {articles.map((el) => (
                <Link to={"/article/details"}>
                  <Article
                    content={el?.content}
                    date="January 21, 2023"
                    like={{ icon: null, count: null }}
                  />
                </Link>
              ))}
            </div>
          </div>
          <Link to="/articles">  <div className="float-right mr-20 mt-10 " >
            <h1 className="font-bold text-[20px]  text-center">
              Explore More
            </h1>
            <hr className="w-28 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
          </div></Link>
        </>
      </div>
    </>
  );
};
export default AboutMe;
