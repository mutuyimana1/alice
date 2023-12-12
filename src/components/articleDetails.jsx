import React, { useState } from "react";
import GridLines from "react-gridlines";
import * as grIcons from "react-icons/gr";
import * as aiIcons from "react-icons/ai";
import logoImage from "../assets/images/Ellipse 4.png";
import AiImage from "../assets/images/Rectangle 10.png";
import AiImageTwo from "../assets/images/Rectangle 11.png";
import NavBar from "./navBar";
import "./header.css"
const ArticleDetails = () => {
    const [countLike,setCountLike]=useState(0);
    const HandleCount=()=>{
      setCountLike(countLike + 1)
    }
  return (
    <>
      <GridLines
        className="grid-area p-[62px] custom-grid-lines"
        cellWidth={12}
        strokeWidth={3}
        cellWidth2={12}
      >
      <div className="detailsContainer">
        <NavBar />
        <div className="flex gap-5 mx-40 my-10">
          <h2 className="text-xl font-medium pt-5">Jan.2023</h2>
          <img src={logoImage} alt="" className="rounded-full"/>
        </div>
        <div className="mt-10 mx-10">
          <h1 className="font-bold text-xl text-center ">
            Discover Power of AI
          </h1>
          <div className="flex gap-10 mt-10">
            <div className="mt-5">
              <img src={AiImage} width={300} alt="" />
            </div>
            <div>
              <p className="font-normal text-xl font-roboto ">
                RoleReference site about Lorem Ipsum, giving information on its
                origins, well as a random Lipsum generatorm Reference site about
                Lorem Ipsum, giving information on its origins, as well
              </p>
            </div>
          </div>
          <div className=" mt-10">
            <div>
              <p className="font-normal text-xl font-roboto ">
                RoleReference site about Lorem Ipsum, giving information on its
                origins, well as a random Lipsum generatorm Reference site about
                Lorem Ipsum, giving information on its origins, as well
              </p>
              <p className="font-normal text-xl font-roboto pt-20">
                RoleReference site about Lorem Ipsum, giving information on its
                origins, well as a random Lipsum generatorm Reference site about
                Lorem Ipsum, giving information on its origins, as well
              </p>
            </div>
            <div className="mt-7">
                <img src={AiImageTwo} alt="" className="rounded-sm" />
            </div>
          </div>
          <div className=" mt-10">
              <p className="font-normal text-xl font-roboto ">
                RoleReference site about Lorem Ipsum, giving information on its
                origins, well as a random Lipsum generatorm Reference site about
                Lorem Ipsum, giving information on its origins, as well
              </p>
              <p className="font-normal text-xl font-roboto pt-2">
                RoleReference site about Lorem Ipsum, giving information on its
                origins, well as a random Lipsum generatorm Reference site about
                Lorem Ipsum, giving information on its origins, as well
              </p>
          </div>
          <div className="mt-5 flex gap-2 float-right">
            <grIcons.GrView size={20} className="mt-1"/> <span>23</span>
            <aiIcons.AiOutlineLike size={20} onClick={HandleCount}/><span>{countLike}</span>

          </div>
        </div>
        </div>
        
      </GridLines>
    </>
  );
};
export default ArticleDetails;
