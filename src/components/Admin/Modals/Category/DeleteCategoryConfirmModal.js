import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteCategory, clearErrors } from "@/redux/actions/categoryActions";
import { DELETE_CATEGORY_RESET } from "@/redux/constants/categoryConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const DeleteCategoryConfirmModal = ({ isOpen, setOpen, categoryToDelete }) => {
  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, isDeleted, loading } = useSelector(
    (state) => state.deleteCategory
  );

  useEffect(() => {
    if (isDeleted) {
      setSuccess({
        title: "Category deleted successfully",
        message: "The selected category was deleted",
        showSuccessBox: true,
      });

      dispatch({ type: DELETE_CATEGORY_RESET });
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
  }, [
    dispatch,
    categoryToDelete,
    error,
    isDeleted,
    setSuccess,
    router,
    setError,
  ]);

  const deleteCategoryHandler = () => {
    dispatch(deleteCategory(categoryToDelete._id));
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
      title={"Delete Category"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              deleteCategoryHandler();
            }}
          >
            <div className="flex flex-col justify-center">
              <div className="flex justify-center items-center gap-x-4">
                <p className="text-3xl font-semibold text-dark-600">
                  {categoryToDelete.name}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-center mt-10">
              Are you sure you want to delete this category?
            </p>
            <p className="text-xs text-center mt-2">
              Deleting a category will also delete all its sub-categories
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

export default DeleteCategoryConfirmModal;
