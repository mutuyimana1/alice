import React from "react"

const Article=({ content, date, view, like,onClick })=>{
    return(
        <>
        <div className="w-[100%] 2xl:dw-[49%]   cursor-pointer" onClick={onClick} >
            <p className="font-bold text-[20px] font-roboto">
                {content}
                </p>
                <div className="flex justify-between">
<p className="font-normal text-[15px] font-roboto pt-5">{date}</p>
<div className="flex gap-5">
<p className="font-normal text-[15px] font-roboto pt-5">{view}</p>
<div className="flex gap-1"><p className="font-normal text-[15px] flex font-roboto pt-5" onClick={onClick}>{like.icon} </p><p className="font-normal text-[15px] flex font-roboto pt-[18px]">{like.count}</p></div>

        
</div>
</div>
        </div>
        </>
    )
}
export default Article