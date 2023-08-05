import Image from "next/image";

export default function CommentCard({authorProfile, comment, rating, authorName}) {
    const starRate = [];

    for(let i = 0; i < rating; i++){
        starRate.push(
            <span 
                className={"star material-symbols-outlined text-yellow-500 cursor-default"}>
                grade
            </span>
        );
    }

    return (
        <div className="flex flex-col items-start max-w-sm p-4 border-2 rounded-lg w-fit">
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <img className="w-[50px] rounded-full" src={authorProfile}/>
                    <p className="ml-3 text-sm font-medium">{authorName}</p>
                </div>
                <div className="flex">
                    {starRate}
                </div>
            </div>
            {/* <Image src={authorProfile} alt="comment author" className="rounded-full w-[75px]"/> */}
            <p className="mt-3 text-sm">{comment}</p>
        </div>
    );
}