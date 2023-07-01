import Modal from "@/components/ui/Modal";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import { sleep } from "@/utils/Sleep";
import { addToolToCollection, clearErrors } from "@/redux/actions/collectionActions";
import Dropdown from "@/components/ui/Input/Dropdown";
import { getObjectByName } from "@/utils/Helpers";

const AddToCollectionModal = ({ isOpen, setOpen, toolId }) => {
	const [chosenCollection, setChosenCollection] = useState("");
	const { setSuccess, setError } = useContext(StatusContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { success, error } = useSelector((state) => state.addToolToCollection);
	const { collections, error: getAllCollectionsError, loading } = useSelector((state) => state.allCollections);

	useEffect(() => {
		if (getAllCollectionsError) {
			setError({
				title: "Something went wrong",
				message: getAllCollectionsError,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, getAllCollectionsError]);

	useEffect(() => {
		if (success) {
			setSuccess({
				title: "Tool added to collection successfully",
				message: "The tool has been added to the selected collection",
				showSuccessBox: true,
			});

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
	}, [dispatch, error, success]);

	const submitHandler = () => {
		if (!chosenCollection) {
			setError({
				title: "Something went wrong",
				message: "Please select a collection",
				showErrorBox: true,
			});
			return;
		}
		dispatch(addToolToCollection(chosenCollection._id, toolId));
		setOpen(false);
	};

	const chooseCollectionDefaultOption = "Select Collection";
	const onChoiceChange = (e) => {
		if (e.target.value === chooseCollectionDefaultOption) {
			e.target.value = null;
			setChosenCollection(null);
		} else {
			setChosenCollection(getObjectByName(e.target.value, collections));
		}
	};

	return loading ? (
		<Loader />
	) : (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
					<i className="fa-solid fa-circle-plus"></i>
				</div>
			}
			title={"Add Tool to a Collection"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							submitHandler();
						}}
						className="flex flex-col gap-y-3"
					>
						<Dropdown
							id={"addToCollection"}
							label={chooseCollectionDefaultOption}
							name="collection"
							options={collections}
							objKey={"name"}
							defaultOption={chooseCollectionDefaultOption}
							setChoice={onChoiceChange}
							classes={"w-full"}
							required={true}
						/>

						<div className="mt-10">
							<Button variant={"primary"} rounded={true} classes="text-md px-8 py-3">
								Add
							</Button>
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

export default AddToCollectionModal;
