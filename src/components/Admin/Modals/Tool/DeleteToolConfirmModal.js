import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteTool, clearErrors } from "@/redux/actions/toolActions";
import { DELETE_TOOL_RESET } from "@/redux/constants/toolConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const DeleteToolConfirmModal = ({ isOpen, setOpen, toolToDelete }) => {
  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, isDeleted, loading } = useSelector(
    (state) => state.deleteTool
  );

  useEffect(() => {
    if (isDeleted) {
      setSuccess({
        title: "Tool deleted successfully",
        message: "The selected tool was deleted",
        showSuccessBox: true,
      });

      dispatch({ type: DELETE_TOOL_RESET });
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
  }, [dispatch, toolToDelete, error, isDeleted]);

  const deleteToolHandler = () => {
    dispatch(deleteTool(toolToDelete._id));
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
      title={"Delete Tool"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              deleteToolHandler();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center gap-x-4 mb-4">
                <p className="text-3xl font-semibold text-dark-600">
                  {toolToDelete.name}
                </p>
              </div>

              <Image
                src={toolToDelete.image}
                alt={toolToDelete.name}
                width={320}
                height={180}
                className="rounded-md"
              />

              <p className="text-sm text-dark-600 mt-4">
                {toolToDelete.oneLiner}
              </p>
            </div>

            <p className="text-sm font-semibold text-center mt-10">
              Are you sure you want to delete this tool?
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

export default DeleteToolConfirmModal;
