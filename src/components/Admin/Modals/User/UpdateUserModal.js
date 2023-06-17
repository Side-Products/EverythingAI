import Modal from "@/components/ui/Modal";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { adminUpdateUserDetails, clearErrors } from "@/redux/actions/userActions";
import { ADMIN_UPDATE_USER_DETAILS_RESET } from "@/redux/constants/userConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import { sleep } from "@/utils/Sleep";
import TextInput from "@/components/ui/Input/TextInput";
import Dropdown from "@/components/ui/Input/Dropdown";

const UpdateUserModal = ({ isOpen, setOpen, userToUpdate }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	const { setSuccess, setError } = useContext(StatusContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { error, isUpdated, loading } = useSelector((state) => state.user);

	useEffect(() => {
		if (isUpdated) {
			setSuccess({
				title: "User updated successfully",
				message: "User details were updated",
				showSuccessBox: true,
			});

			dispatch({ type: ADMIN_UPDATE_USER_DETAILS_RESET });
			sleep(1000).then(() => {
				router.reload();
			});
		}

		if (userToUpdate) {
			setName(userToUpdate.name);
			setEmail(userToUpdate.email);
			setRole(userToUpdate.role);
		}

		if (error) {
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, userToUpdate, error, isUpdated]);

	const submitHandler = () => {
		const userData = {
			name,
			email,
			role,
		};
		dispatch(adminUpdateUserDetails(userToUpdate._id, userData));
		setOpen(false);
	};

	const roleOptions = ["user", "admin", "maintainer"];
	const defaultChoic = roleOptions.find((choice) => choice === role);
	const defaultChoicIndex = roleOptions.findIndex((choice) => choice === role);
	if (defaultChoicIndex !== -1) {
		roleOptions.splice(defaultChoicIndex, 1);
		roleOptions.unshift(defaultChoic);
	}

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
			title={"Update User Details"}
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
							label={"Email"}
							id={"email_field"}
							value={email}
							name={"email"}
							onFieldChange={(e) => setEmail(e.target.value)}
							required={true}
						/>

						<Dropdown label={"Role"} id={"role_field"} options={roleOptions} setChoice={(e) => setRole(e.target.value)} />

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

export default UpdateUserModal;
