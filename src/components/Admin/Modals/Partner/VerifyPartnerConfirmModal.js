import Modal from "@/components/ui/Modal";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { verifyPartner, clearErrors } from "@/redux/actions/genAIPartnerActions";
import { VERIFY_GEN_AI_PARTNER_RESET } from "@/redux/constants/genAIPartnerConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { sleep } from "@/utils/Sleep";

const VerifyPartnerConfirmModal = ({ isOpen, setOpen, partnerToVerify }) => {
	const { setSuccess, setError } = useContext(StatusContext);
	const { setLoading } = useContext(LoadingContext);

	const dispatch = useDispatch();
	const router = useRouter();

	const { error, isVerified } = useSelector((state) => state.verifyPartner);

	useEffect(() => {
		if (isVerified) {
			setLoading({
				status: false,
			});
			setSuccess({
				title: "Partner verified successfully",
				message: "The selected partner was verified",
				showSuccessBox: true,
			});

			dispatch({ type: VERIFY_GEN_AI_PARTNER_RESET });
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
	}, [dispatch, partnerToVerify, error, isVerified]);

	const verifyPartnerHandler = () => {
		dispatch(verifyPartner(partnerToVerify._id));
		setOpen(false);
		setLoading({
			status: true,
			title: "Verifying partner...",
		});
	};

	return (
		<Modal
			isOpen={isOpen}
			image={<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl"></div>}
			title={"Verify Partner"}
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
								<p className="text-3xl font-semibold text-dark-600">{partnerToVerify.name}</p>
							</div>

							<Image src={partnerToVerify?.logo} alt={partnerToVerify.name} width={220} height={180} className="rounded-md" />

							<p className="text-sm text-dark-600 mt-4">{partnerToVerify.oneLiner}</p>
						</div>

						<p className="text-sm font-semibold text-center mt-10">Are you sure you want to verify this partner?</p>

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

export default VerifyPartnerConfirmModal;
