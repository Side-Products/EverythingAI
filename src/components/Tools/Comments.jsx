import Pager from "@/components/ui/Pagination/Pager";
import CommentCard from "./CommentCard";
import { useState, useEffect, useContext } from "react";
import Modal from "../ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getAllReviews, deleteReview, updateReview, clearErrors } from "@/redux/actions/reviewActions";
import { DELETE_REVIEW_RESET } from "@/redux/constants/reviewConstants";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { sleep } from "@/utils/Sleep";

export default function Comments({ toolName = "" }) {
	const [readComment, setReadComment] = useState("");

	const dispatch = useDispatch();
	const router = useRouter();
	const { reviews, resultsPerPage, reviewsCount, filteredReviewsCount } = useSelector((state) => state.allReviews);

	const { setSuccess, setError } = useContext(StatusContext);
	const { setLoading } = useContext(LoadingContext);
	const { error, isDeleted } = useSelector((state) => state.deleteReview);
	useEffect(() => {
		if (isDeleted) {
			setSuccess({
				title: "Review deleted successfully",
				message: "The selected review was deleted",
				showSuccessBox: true,
			});

			dispatch({ type: DELETE_REVIEW_RESET });
			sleep(1000).then(() => {
				router.reload();
			});
		}

		if (error) {
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, error, isDeleted]);

	const handleDeleteReview = (reviewId) => {
		setLoading({
			status: true,
		});
		dispatch(deleteReview(reviewId));
	};

	const { error: updateReviewError, isUpdated } = useSelector((state) => state.updateReview);
	useEffect(() => {
		if (isUpdated) {
			setSuccess({
				title: "Review updated successfully",
				message: "Selected review has been updated",
				showSuccessBox: true,
			});

			sleep(1000).then(() => {
				router.reload();
			});
		}

		if (updateReviewError) {
			setLoading({ status: false, showProgressBar: false, progress: 0 });
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, updateReviewError, isUpdated]);

	const handlePostClick = (newRate, newReview, reviewToEditId) => {
		const updatedReviewData = {
			rating: newRate,
			review: newReview,
		};
		if (newReview && (newRate > 0 || newRate <= 5)) {
			dispatch(updateReview(reviewToEditId, updatedReviewData));
		}
	};

	// Pagination
	let { search, page = 1 } = router.query;
	page = Number(page);

	useEffect(() => {
		dispatch(getAllReviews(router.query.tool, router.query.page || 1));
	}, [dispatch, page]);

	let queryParams;
	if (typeof window !== "undefined") {
		queryParams = new URLSearchParams(window.location.search);
	}

	const handlePagination = (pageNumber) => {
		if (queryParams.has("page")) {
			queryParams.set("page", pageNumber + 1);
		} else {
			queryParams.append("page", pageNumber + 1);
		}

		router.replace({
			search: queryParams.toString(),
			pathname: `/tools/${router.query.tool}`,
		});
	};

	let count = reviewsCount;
	if (search) {
		count = filteredReviewsCount;
	}

	return (
		<>
			<div className="flex flex-col mt-12">
				<h3 className="mb-5 font-semibold">
					See what people say about <em>{toolName}</em>
				</h3>
				<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{reviews &&
						reviews.length > 0 &&
						reviews.map((review, index) => (
							<CommentCard
								key={index}
								rating={review?.rating}
								authorName={review?.user?.name}
								comment={review?.review}
								handleReadComment={setReadComment}
								review={review}
								handleDeleteReview={handleDeleteReview}
								handlePostClick={handlePostClick}
							/>
						))}
				</div>
				<div className="mt-12">
					{resultsPerPage < reviewsCount && (
						<Pager activePage={page} onPageChange={handlePagination} itemsCountPerPage={resultsPerPage} totalPagesCount={count} />
					)}
				</div>
			</div>

			<Modal
				title=""
				titleClasses="hidden"
				isOpen={Boolean(readComment)}
				content={
					<div className="w-full text-start">
						<p>{readComment}</p>
					</div>
				}
				onClose={() => setReadComment("")}
			></Modal>
		</>
	);
}
