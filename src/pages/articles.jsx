import React, { useState } from "react"
import "../styles/index.css"
import DownIcon from "../assets/images/icons/Group 15.svg";
import upIcon from "../assets/images/icons/Group 14.svg"
import Article from "../components/article";
import * as aiIcons from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import Head from "../components/new";
const Articles=()=>{

    const months = [
        {
          key: '1',
          name: 'Jan',
        },
        {
          key: '2',
          name: 'Feb',
        },
        {
          key: '3',
          name: 'Mar',
        },
        {
          key: '4',
          name: 'April',
        },
        {
          key: '5',
          name: 'May',
        },
        {
          key: '6',
          name: 'Jun',
        },
        {
          key: '7',
          name: 'July',
        },
        {
          key: '8',
          name: 'Aug',
        },
        {
          key: '9',
          name: 'Sept',
        },
        {
          key: '10',
          name: 'Oct',
        },
        {
          key: '11',
          name: 'Nov',
        },
        {
          key: '12',
          name: 'Dec',
        },
      ];
      const [countLike,setCountLike]=useState(0);
      const navigate=useNavigate();
      const HandleCount=()=>{
        setCountLike(countLike + 1)
      }
      const [countSecondLike,setCountSecondLike]=useState(0)
      const HandleCountSecond=()=>{
        setCountSecondLike(countSecondLike + 1)
      }
      const [countThirdLike,setCountThirdLike]=useState(0)
      const HandleCountThird=()=>{
        setCountThirdLike(countThirdLike + 1)
      }
    return(
        <>
        <div className="bg-[#F5F5F5]  w-full pb-20">
        <div className="article-header">
        <Head/>
        <h1 className="text-center text-white pt-40 text-[30px]">Articles</h1>
        </div>
        <div className="mx-[118px] py-5 my-10 flex justify-between ">
            <div className="flex"> 
                <div className="mt-40">
                  <h2 className="font-bold">Jan, 2023</h2>  
                  <h2 className=" pt-44">2023, 2024</h2>  
                </div>
                <div className="ml-3"> 
                    <img src={DownIcon} alt="down" width={23}/>
                    <div className="bg-black w-[1px] h-[21rem] ml-3">

                    </div>
                    <img src={upIcon} alt="down" width={23}/>
                </div>
                <ul className="ml-10">
                    {months.map((month)=>(
                        <li className="py-1 font-roboto text-base font-normal">{month.name}</li>

                    ))}
                    
                </ul>

            </div>
            <div>
                <Article  content="Writing a Lorem ipum text, one which can be translated in Kinyarwanda" date="January,26,2023" view="Views 30"  like={{icon:<aiIcons.AiOutlineLike onClick={HandleCount}/>, count:countLike}} onClick={()=>navigate("/article/details")} />
                <div className="mt-14">
                <Article content="Writing a Lorem ipum text, one which can be translated in Kinyarwanda" date="January,26,2023" view="Views 30" like={{icon:<aiIcons.AiOutlineLike onClick={HandleCountSecond}/>, count:countSecondLike}}/>
                </div>
                <div className="mt-14">
                <Article content="Writing a Lorem ipum text, one which can be translated in Kinyarwanda" date="January,26,2023" view="Views 30" like={{icon:<aiIcons.AiOutlineLike onClick={HandleCountThird}/>, count:countThirdLike}}/>
                </div>

            </div>

        </div>
        </div>
        </>
    )
}
export default Articles