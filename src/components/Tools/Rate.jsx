import { useState } from "react";
import Button from "../ui/Button";

export default function Rate({toolName}){
    const [currRate, setCurrRate] = useState(0);

    const starRatingJSX = [];

    for(let i = 0; i < 5; i++){
        starRatingJSX.push(
            <span 
                onClick={() => setCurrRate(5-i)} 
                className={"star material-symbols-outlined "+ (i+1 > 5-currRate? 'text-yellow-500':'text-gray-400')}>
                grade
            </span>
        );
    }

    const handlePostClick = () => {

    }

    return(
        <div className="flex items-center justify-between w-full p-5 border rounded-lg">
            <div>
                <h3 className="font-semibold">Already Explored {toolName}?</h3>
                <p className="mt-1 text-sm">Leave your views for others</p>
            </div>
            <div>
                <div className="flex flex-row-reverse star-container">
                    {starRatingJSX}
                </div>
                <div className="flex mt-5 space-x-5">
                    <input className="px-2 text-sm bg-transparent border-0 border-b shadow-none outline-none " type="text" placeholder="Write a review"/>
                    <Button onClick={handlePostClick}>Post</Button>
                </div>
            </div>
        </div>
    );
}