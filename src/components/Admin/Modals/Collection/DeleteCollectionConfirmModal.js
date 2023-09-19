import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  deleteCollection,
  clearErrors,
} from "@/redux/actions/collectionActions";
import { DELETE_COLLECTION_RESET } from "@/redux/constants/collectionConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const DeleteCollectionConfirmModal = ({
  isOpen,
  setOpen,
  collectionToDelete,
}) => {
  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, isDeleted, loading } = useSelector(
    (state) => state.deleteCollection
  );

  useEffect(() => {
    if (isDeleted) {
      setSuccess({
        title: "Collection deleted successfully",
        message: "The selected collection was deleted",
        showSuccessBox: true,
      });

      dispatch({ type: DELETE_COLLECTION_RESET });
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
  }, [dispatch, collectionToDelete, error, isDeleted]);

  const deleteCollectionHandler = () => {
    dispatch(deleteCollection(collectionToDelete._id));
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
      title={"Delete Collection"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              deleteCollectionHandler();
            }}
          >
            <div className="flex flex-col justify-center">
              <div className="flex justify-center items-center gap-x-4">
                <p className="text-3xl font-semibold text-dark-600">
                  {collectionToDelete.name}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-center mt-10">
              Are you sure you want to delete this collection?
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

export default DeleteCollectionConfirmModal;
