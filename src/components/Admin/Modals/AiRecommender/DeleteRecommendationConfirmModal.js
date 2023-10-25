import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  deleteAiRecommendation,
  clearErrors,
} from "@/redux/actions/aiRecommenderActions";
import { DELETE_AI_RECOMMENDATION_RESET } from "@/redux/constants/aiRecommenderConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const DeleteRecommendationConfirmModal = ({
  isOpen,
  setOpen,
  recommendationToDelete,
}) => {
  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, isDeleted, loading } = useSelector(
    (state) => state.deleteAiRecommendation
  );

  useEffect(() => {
    if (isDeleted) {
      setSuccess({
        title: "Recommendation entry deleted successfully",
        message: "The selected recommendation was deleted",
        showSuccessBox: true,
      });

      dispatch({ type: DELETE_AI_RECOMMENDATION_RESET });
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
  }, [dispatch, recommendationToDelete, error, isDeleted]);

  const deleteAiRecommendationHandler = () => {
    dispatch(deleteAiRecommendation(recommendationToDelete._id));
    setOpen(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <Modal
      isOpen={isOpen}
      image={
        <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
          <i className="fa-solid fa-trash"></i>
        </div>
      }
      title={"Delete AI Recommendation Entry"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              deleteAiRecommendationHandler();
            }}
          >
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center gap-x-4">
                <p className="text-3xl font-semibold text-dark-600">
                  {recommendationToDelete.whatAreYouHereFor}
                </p>
                <p className="text-xl font-semibold text-dark-600 mt-4">
                  {recommendationToDelete.category}
                </p>
                <p className="text-xl font-semibold text-dark-600">
                  {recommendationToDelete.subCategory}
                </p>
                <p className="text-sm text-dark-600 mt-2">
                  by {recommendationToDelete?.user?.email}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-center mt-10">
              Are you sure you want to delete this recommendation entry?
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-error-600 hover:bg-error-700 text-light-100"
              >
                Delete
                <span className="ml-6 text-lg">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      }
      onClose={() => {
        setOpen(false);
      }}
    ></Modal>
  );
};

export default DeleteRecommendationConfirmModal;
