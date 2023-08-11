import { useMemo } from "react";

export default function CommentCard({ comment, rating, authorName, handleReadComment }) {
	const starRate = [];

	for (let i = 0; i < rating; i++) {
		starRate.push(<span className={"star material-symbols-outlined text-yellow-500 cursor-default"}>grade</span>);
	}
    const commentStr = useMemo(() => {
        if(comment.length > 100)
            return `${comment.substring(0,101)}... `
        return comment
    }, [comment]);

	return (
		<div className="flex flex-col items-start max-w-sm p-4 border-2 rounded-xl w-fit">
			<div className="flex justify-between w-full">
				<div className="flex items-center">
					<p className="text-sm font-medium">{authorName}</p>
				</div>
				<div className="flex">{starRate}</div>
			</div>
			<p className="mt-3 text-sm">
                {commentStr}
                {comment.length > 100? <button onClick={() => handleReadComment(comment)} className="text-primary-600 hover:text-primary-500">Read More</button>:null}
            </p>
		</div>
	);
}
