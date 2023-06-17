import Modal from "@/components/ui/Modal";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createCategory, clearErrors } from "@/redux/actions/categoryActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import { sleep } from "@/utils/Sleep";
import TextInput from "@/components/ui/Input/TextInput";

const AddCategoryModal = ({ isOpen, setOpen }) => {
	const [name, setName] = useState("");

	const { setSuccess, setError } = useContext(StatusContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { error, success, loading } = useSelector((state) => state.createCategory);

	useEffect(() => {
		if (success) {
			setSuccess({
				title: "Category created successfully",
				message: "A new category has been created",
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
		const categoryData = {
			name,
		};
		dispatch(createCategory(categoryData));
		setOpen(false);
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
			title={"Create Category"}
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

						<div className="mt-10">
							<Button variant={"primary"} rounded={true} classes="text-md px-8 py-3">
								Create
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

export default AddCategoryModal;
