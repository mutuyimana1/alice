import React from "react"
import "../styles/index.css"
import img from "../assets/images/Ellipse 4.png"
const Card = (props) => {
    return (
        <>
            <div className=" flex  xl:w-[350px] 2xl:w-[430px] mb-5 lg:mb-0 md:h-[200px] xl:h-[250px] 2xl:h-[292px] border-[.2px] border-gray-300  rounded-lg" onClick={props.onClick} style={{backgroundImage: `url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="w-[50%] h-full rounded-lg">
                    {/* <img src={props.image} style={{ height: "100%", borderRadius: "10px 0px 0px 10px" }} /> */}

                </div>
                <div className="w-[50%] h-full bg-[#ffffffd8] rounded-slg" style={{ borderRadius: "0px 9px 9px 0px" }}>
                    <div className="h-20 w-full"> <h1 className="text-xl text-center pt-2">{props.name}</h1></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="absolute md:mt-[-15px] xl:mt-[-10px] 2xl:mt-[25px] md:-ml-[9px] xl:-ml-[13px] 2xl:-ml-[14.6px] ">
                        <path d="M15 15H1.52878C0.622244 15 0.183487 13.8905 0.84484 13.2705L15 0V15Z" fill="#CDCDCD" />
                    </svg>
                    <div className="bg-[#D9D9D9]  h-10 w-[107%] xl:w-[109%]  xl:mt-1 2xl:mt-10 md:-ml-[11px] xl:-ml-[12.2px] 2xl:-ml-[13.9px] rounded-[2px,0]">
                    </div>
                    <div className="m-2">
                        <p> {props.details}</p>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Card