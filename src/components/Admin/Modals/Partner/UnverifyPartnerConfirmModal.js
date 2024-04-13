import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { unverifyPartner, clearErrors } from "@/redux/actions/genAIPartnerActions";
import { UNVERIFY_GEN_AI_PARTNER_RESET } from "@/redux/constants/genAIPartnerConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import { sleep } from "@/utils/Sleep";

const UnverifyPartnerConfirmModal = ({ isOpen, setOpen, partnerToUnverify }) => {
	const { setSuccess, setError } = useContext(StatusContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { error, isUnverified, loading } = useSelector((state) => state.unverifyPartner);

	useEffect(() => {
		if (isUnverified) {
			setSuccess({
				title: "Partner unverified successfully",
				message: "The selected partner was unverified",
				showSuccessBox: true,
			});

			dispatch({ type: UNVERIFY_GEN_AI_PARTNER_RESET });
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
	}, [dispatch, partnerToUnverify, error, isUnverified]);

	const verifyPartnerHandler = () => {
		dispatch(unverifyPartner(partnerToUnverify._id));
		setOpen(false);
	};

	return loading ? (
		<Loader />
	) : (
		<Modal
			isOpen={isOpen}
			image={<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl"></div>}
			title={"Unverify Partner"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							verifyPartnerHandler();
						}}
					>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-4 mb-4">
								<p className="text-3xl font-semibold text-dark-600">{partnerToUnverify.name}</p>
							</div>

							<Image src={partnerToUnverify.logo} alt={partnerToUnverify.name} width={220} height={180} className="rounded-md" />

							<p className="text-sm text-dark-600 mt-4">{partnerToUnverify.oneLiner}</p>
						</div>

						<p className="text-sm font-semibold text-center mt-10">Are you sure you want to unverify this partner?</p>

						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-error-600 hover:bg-error-700 text-light-100"
							>
								Unverify
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

export default UnverifyPartnerConfirmModal;
