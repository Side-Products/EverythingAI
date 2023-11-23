import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { verifyTool, clearErrors } from "@/redux/actions/toolActions";
import { VERIFY_TOOL_RESET } from "@/redux/constants/toolConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { sleep } from "@/utils/Sleep";

const VerifyToolConfirmModal = ({ isOpen, setOpen, toolToVerify }) => {
  const { setSuccess, setError } = useContext(StatusContext);
  const { setLoading } = useContext(LoadingContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, isVerified } = useSelector((state) => state.verifyTool);

  useEffect(() => {
    if (isVerified) {
      setLoading({
        status: false,
      });
      setSuccess({
        title: "Tool verified successfully",
        message: "The selected tool was verified",
        showSuccessBox: true,
      });

      dispatch({ type: VERIFY_TOOL_RESET });
      sleep(1000).then(() => {
        router.reload();
      });
    }

    if (error) {
      setLoading({
        status: false,
      });
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [
    dispatch,
    toolToVerify,
    error,
    isVerified,
    setLoading,
    setSuccess,
    router,
    setError,
  ]);

  const verifyToolHandler = () => {
    dispatch(verifyTool(toolToVerify._id));
    setOpen(false);
    setLoading({
      status: true,
      title: "Verifying tool...",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      image={
        <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
          <i className="fa-solid fa-trash"></i>
        </div>
      }
      title={"Verify Tool"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              verifyToolHandler();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center gap-x-4 mb-4">
                <p className="text-3xl font-semibold text-dark-600">
                  {toolToVerify.name}
                </p>
              </div>

              <Image
                src={toolToVerify.image}
                alt={toolToVerify.name}
                width={320}
                height={180}
                className="rounded-md"
              />

              <p className="text-sm text-dark-600 mt-4">
                {toolToVerify.oneLiner}
              </p>
            </div>

            <p className="text-sm font-semibold text-center mt-10">
              Are you sure you want to verify this tool?
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-green-500 hover:bg-green-600 text-light-100"
              >
                Verify
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

export default VerifyToolConfirmModal;
