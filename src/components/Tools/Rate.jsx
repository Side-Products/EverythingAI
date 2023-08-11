import { useState } from "react";
import Button from "../ui/Button";
import CommentModal from "./WriteCommentModal";

export default function Rate({ toolName }) {
	const [currRate, setCurrRate] = useState(0);

	const starRatingJSX = [];

	for (let i = 0; i < 5; i++) {
		starRatingJSX.push(
			<span
				onClick={() => setCurrRate(5 - i)}
				className={"star material-symbols-outlined " + (i + 1 > 5 - currRate ? "text-yellow-500" : "text-gray-400")}
			>
				grade
			</span>
		);
	}

	const handlePostClick = () => {};

	return (
		<>
			<div className="flex items-center justify-between w-full p-5 border rounded-xl">
				<div>
					<h3 className="font-semibold">Already Explored <em>{toolName}</em>?</h3>
					<p className="mt-1 text-sm">Leave your views for others</p>
				</div>
				<div>
					<div className="flex flex-row-reverse star-container">{starRatingJSX}</div>
				</div>
			</div>
			<CommentModal 
				title={`Write a review for ${toolName}`}
				isOpen={currRate > 0}
				handleModalClose={() => setCurrRate(0)}
			>
			</CommentModal>
		</>
	);
}
