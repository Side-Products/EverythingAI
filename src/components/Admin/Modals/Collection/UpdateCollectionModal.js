import Modal from "@/components/ui/Modal";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateCollection, clearErrors } from "@/redux/actions/collectionActions";
import { UPDATE_COLLECTION_RESET } from "@/redux/constants/collectionConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import { sleep } from "@/utils/Sleep";
import TextInput from "@/components/ui/Input/TextInput";

const UpdateCollectionModal = ({ isOpen, setOpen, collectionToUpdate }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const { setSuccess, setError } = useContext(StatusContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { error, isUpdated, loading } = useSelector((state) => state.updateCollection);

	useEffect(() => {
		if (isUpdated) {
			setSuccess({
				title: "Collection updated successfully",
				message: "Collection details were updated",
				showSuccessBox: true,
			});

			dispatch({ type: UPDATE_COLLECTION_RESET });
			sleep(1000).then(() => {
				router.reload();
			});
		}

		if (collectionToUpdate) {
			setName(collectionToUpdate.name);
			setDescription(collectionToUpdate.description);
		}

		if (error) {
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, collectionToUpdate, error, isUpdated]);

	const submitHandler = () => {
		const collectionData = {
			name,
			description,
		};
		dispatch(updateCollection(collectionToUpdate._id, collectionData));
		setOpen(false);
	};

	return loading ? (
		<Loader />
	) : (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
					<i className="fa-solid fa-pen-to-square"></i>
				</div>
			}
			title={"Update Collection Details"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							submitHandler();
						}}
						className="flex flex-col gap-y-3"
					>
						<TextInput label={"Name"} id={"name_field"} value={name} name={"name"} onFieldChange={(e) => setName(e.target.value)} required={true} />

						<TextInput
							label={"Description"}
							id={"description_field"}
							value={description}
							name={"description"}
							onFieldChange={(e) => setDescription(e.target.value)}
							required={true}
						/>

						<div className="mt-10">
							<Button variant={"primary"} rounded={true} classes="text-md px-8 py-3">
								Update
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

export default UpdateCollectionModal;
