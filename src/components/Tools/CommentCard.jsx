import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import DeleteModal from "../DeleteModal";
import CommentModal from "./WriteCommentModal";

export default function CommentCard({ comment, rating, authorName, handleReadComment, review, handleDeleteReview, handlePostClick }) {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [reviewToDelete, setReviewToDelete] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [reviewToEdit, setReviewToEdit] = useState(false);

	const starRate = [];

	for (let i = 0; i < rating; i++) {
		starRate.push(<i className="fa-solid fa-star text-[18px] text-yellow-500 cursor-default"></i>);
	}
	const commentStr = useMemo(() => {
		if (comment.length > 100) return `${comment.substring(0, 101)}... `;
		return comment;
	}, [comment]);

	const { data: session } = useSession();

	const [currRate, setCurrRate] = useState(rating);
	const [reviewComment, setReviewComment] = useState("");
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

	return (
		<div className="relative group flex flex-col items-start max-w-sm p-4 border-2 rounded-xl w-full">
			<div className="w-full flex flex-col">
				<div className="w-full flex justify-between items-start">
					<div className="text-sm font-medium">{authorName}</div>
					{session && session.user && (session.user.role == "admin" || review?.user._id == session.user._id) && (
						<span
							className="absolute group-hover:block hidden right-3 top-2 text-lg cursor-pointer text-gray-400 hover:text-primary-400 transition duration-300"
							onClick={() => {
								setReviewToEdit(review);
								setShowEditModal(true);
								setReviewComment(review.review);
							}}
						>
							<i className="fa-solid fa-edit"></i>
						</span>
					)}
				</div>
				<div className="flex gap-x-[2px] mt-[2px]">{starRate}</div>
			</div>
			<p className="mt-3 text-sm">
				{commentStr}
				{comment.length > 100 ? (
					<button onClick={() => handleReadComment(comment)} className="text-primary-600 hover:text-primary-500">
						Read More
					</button>
				) : null}
			</p>
			{session && session.user && (session.user.role == "admin" || review?.user._id == session.user._id) && (
				<span
					className="absolute group-hover:block hidden right-3 bottom-2 text-lg cursor-pointer text-gray-400 hover:text-error-400 transition duration-300"
					onClick={() => {
						setReviewToDelete(review);
						setShowDeleteModal(true);
					}}
				>
					<i className="fa-solid fa-trash"></i>
				</span>
			)}

			<DeleteModal
				isOpen={showDeleteModal}
				setOpen={setShowDeleteModal}
				title={"Delete Review"}
				confirmation={"Are you sure you want to delete this review?"}
				name={reviewToDelete?.review}
				deleteHandler={() => {
					handleDeleteReview(reviewToDelete?._id);
					setShowDeleteModal(false);
				}}
			/>

			<CommentModal
				title={`Edit the review`}
				isOpen={showEditModal}
				handlePostClick={() => {
					handlePostClick(currRate, reviewComment, reviewToEdit?._id);
				}}
				handleModalClose={() => {
					setShowEditModal(false);
				}}
				starRatingJSX={starRatingJSX}
				currRate={rating}
				review={reviewComment}
				setReview={setReviewComment}
			></CommentModal>
		</div>
	);
}
