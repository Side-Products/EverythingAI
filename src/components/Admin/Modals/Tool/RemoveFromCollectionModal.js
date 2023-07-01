import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { removeToolFromCollection, clearErrors } from "@/redux/actions/collectionActions";
import { REMOVE_TOOL_FROM_COLLECTION_RESET } from "@/redux/constants/collectionConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const RemoveFromCollectionModal = ({ isOpen, setOpen, tool, collection }) => {
	const { setSuccess, setError } = useContext(StatusContext);
	const { setLoading } = useContext(LoadingContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { isDeleted, error, loading } = useSelector((state) => state.removeToolFromCollection);

	useEffect(() => {
		if (isDeleted) {
			setLoading({ status: false });
			setSuccess({
				title: "Success",
				message: "Tool removed from this collection",
				showSuccessBox: true,
			});
			dispatch({ type: REMOVE_TOOL_FROM_COLLECTION_RESET });

			sleep(1000).then(() => {
				router.reload();
			});
		}

		if (error) {
			setLoading({ status: false });
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
			dispatch({ type: REMOVE_TOOL_FROM_COLLECTION_RESET });
		}
	}, [dispatch, tool, error, isDeleted]);

	const removeToolHandler = () => {
		setLoading({ status: true });
		dispatch(removeToolFromCollection(collection?._id, tool?._id));
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
			title={"Remove Tool from Collection"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							removeToolHandler();
						}}
					>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-4 mb-4">
								<p className="text-3xl font-semibold text-dark-600">{tool?.name}</p>
							</div>

							<Image src={tool?.image} alt={tool?.name} width={320} height={180} className="rounded-md" />

							<p className="text-sm text-dark-600 mt-4">{tool?.oneLiner}</p>
						</div>

						<p className="text-sm font-semibold text-center mt-10">
							Are you sure you want to remove this tool from the collection {`"${collection?.name}"`}?
						</p>

						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-error-600 hover:bg-error-700 text-light-100"
							>
								Remove
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

export default RemoveFromCollectionModal;
