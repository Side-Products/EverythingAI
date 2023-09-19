import { useState, useEffect, useContext } from "react";
import CommentModal from "./WriteCommentModal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createReview, clearErrors } from "@/redux/actions/reviewActions";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { sleep } from "@/utils/Sleep";
import { useSession } from "next-auth/react";

export default function Rate({ toolName }) {
  const [currRate, setCurrRate] = useState(0);
  const [review, setReview] = useState("");
  const { data: session } = useSession();
  const starRatingJSX = [];

  for (let i = 0; i < 5; i++) {
    starRatingJSX.push(
      <span
        onClick={() => setCurrRate(5 - i)}
        className={
          "star material-symbols-outlined " +
          (i + 1 > 5 - currRate ? "text-yellow-500" : "text-gray-400")
        }
      >
        grade
      </span>
    );
  }

  const { setLoading } = useContext(LoadingContext);
  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();
  const { error, success } = useSelector((state) => state.createReview);
  useEffect(() => {
    if (success) {
      setSuccess({
        title: "Review created successfully",
        message: "A new review has been created",
        showSuccessBox: true,
      });

      sleep(1000).then(() => {
        router.reload();
      });
    }

    if (error) {
      setLoading({ status: false, showProgressBar: false, progress: 0 });
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, success]);

  const handlePostClick = () => {
    const reviewDataToUpload = {
      rating: currRate,
      review: review,
      slug: router.query.tool,
    };
    if (review && (currRate > 0 || currRate <= 5)) {
      dispatch(createReview(reviewDataToUpload));
      setCurrRate(0);
    }
  };

  const [reviewAlreadyPosted, setReviewAlreadyPosted] = useState(false);
  const { reviews } = useSelector((state) => state.allReviews);
  useEffect(() => {
    if (
      session &&
      session.user &&
      reviews &&
      reviews.length > 0 &&
      reviews.some((review) => review.user._id === session.user._id)
    ) {
      setReviewAlreadyPosted(true);
    }
  }, [reviews, session]);

  return (
    !reviewAlreadyPosted && (
      <>
        <div className="flex items-center justify-between w-full p-5 border rounded-xl">
          <div>
            <h3 className="font-semibold">
              Already Explored <em>{toolName}</em>?
            </h3>
            <p className="mt-1 text-sm">Leave your views for others</p>
          </div>
          <div>
            <div className="flex flex-row-reverse star-container">
              {starRatingJSX}
            </div>
          </div>
        </div>
        <CommentModal
          title={`Write a review for ${toolName}`}
          isOpen={currRate > 0}
          handlePostClick={handlePostClick}
          handleModalClose={() => setCurrRate(0)}
          starRatingJSX={starRatingJSX}
          currRate={currRate}
          review={review}
          setReview={setReview}
        ></CommentModal>
      </>
    )
  );
}
