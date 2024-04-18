import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createGenAIPartner, updateGenAIPartner, clearErrors } from "@/redux/actions/genAIPartnerActions";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { useSession } from "next-auth/react";
import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";
import Dropdown from "@/components/ui/Input/Dropdown";
import Button from "@/components/ui/Button";
import ImageUploadInput from "@/components/ui/Input/ImageUploadInput";
import { uploadImage } from "@/utils/Helpers";
import { sleep } from "@/utils/Sleep";
import MultipleInput from "@/components/Forms/MultipleInput";
import ReviewFromCompanies from "@/components/Forms/ReviewFromCompanies";
import { sizeOfCompanyOptions, industriesSpecializedInOptions, capabilitiesOptions } from "@/config/constants";
import RequiredAsterisk from "@/components/ui/RequiredAsterisk";

const GenAIPartnerForm = ({ partnerDataToEdit = null }) => {
	const { setLoading } = useContext(LoadingContext);
	const { setError, setSuccess } = useContext(StatusContext);
	const { data: session } = useSession();
	const dispatch = useDispatch();

	const { setAuthModalOpen } = useContext(AuthModalContext);

	const [partnerData, setPartnerData] = useState({
		name: "",
		slug: "",
		oneLiner: "",
		country: "",
		state: "",
		twitter: "",
		linkedin: "",
		instagram: "",
		youtube: "",
		videoLink: "",
		sizeOfCompany: "",
		offerOneLiner: "",
		caseStudies: [""],
		partners: [""],
		reviewFromCompanies: [{ companyName: "", review: "" }],
		cta: "",
	});
	const sizeOfCompanyDefaultOption = "Choose a size of company";

	const [logo, setLogo] = useState("");
	const [logoName, setLogoName] = useState("");

	const [aspectRatio, setAspectRatio] = useState({ width: 16, height: 9 });

	const onDataChange = (e) => {
		if (e.target.name === "sizeOfCompany") {
			if (e.target.value === sizeOfCompanyDefaultOption) e.target.value = "";
			else {
				setPartnerData({
					...partnerData,
					[e.target.name]: e.target.value,
				});
			}
			if (partnerDataToEdit) partnerDataToEdit.sizeOfCompany = sizeOfCompanyDefaultOption;
			return;
		}
		setPartnerData({ ...partnerData, [e.target.name]: e.target.value });
	};

	const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
	const [selectedValues, setSelectedValues] = useState({});
	const handleCheckboxChange = (event) => {
		const { name, value, checked } = event.target;
		if (selectedValues.length == 6 && checked) {
			setError({
				title: "Only 6 choices allowed",
				message: "Please unpick an option to choose something else",
				showErrorBox: true,
			});
			return;
		}
		setSelectedCheckboxes({
			...selectedCheckboxes,
			[value]: checked,
		});
	};
	useEffect(() => {
		setSelectedValues(Object.keys(selectedCheckboxes).filter((value) => selectedCheckboxes[value]));
	}, [selectedCheckboxes]);

	const [selectedCapabilitiesCheckboxes, setSelectedCapabilitiesCheckboxes] = useState({});
	const [selectedCapabilitiesValues, setSelectedCapabilitiesValues] = useState({});
	const handleCapabilitiesCheckboxChange = (event) => {
		const { name, value, checked } = event.target;
		if (selectedCapabilitiesValues.length == 6 && checked) {
			setError({
				title: "Only 6 choices allowed",
				message: "Please unpick an option to choose something else",
				showErrorBox: true,
			});
			return;
		}
		setSelectedCapabilitiesCheckboxes({
			...selectedCapabilitiesCheckboxes,
			[value]: checked,
		});
	};
	useEffect(() => {
		setSelectedCapabilitiesValues(Object.keys(selectedCapabilitiesCheckboxes).filter((value) => selectedCapabilitiesCheckboxes[value]));
	}, [selectedCapabilitiesCheckboxes]);

	useEffect(() => {
		if (partnerDataToEdit) {
			setPartnerData({
				name: partnerDataToEdit.name,
				slug: partnerDataToEdit.slug,
				oneLiner: partnerDataToEdit.oneLiner,
				country: partnerDataToEdit.country,
				state: partnerDataToEdit.state,
				twitter: partnerDataToEdit.twitter,
				linkedin: partnerDataToEdit.linkedin,
				instagram: partnerDataToEdit.instagram,
				youtube: partnerDataToEdit.youtube,
				videoLink: partnerDataToEdit.videoLink,
				sizeOfCompany: partnerDataToEdit.sizeOfCompany,
				industriesSpecializedIn: partnerDataToEdit.industriesSpecializedIn,
				capabilities: partnerDataToEdit.capabilities,
				offerOneLiner: partnerDataToEdit.offerOneLiner,
				caseStudies: partnerDataToEdit.caseStudies,
				partners: partnerDataToEdit.partners,
				reviewFromCompanies: partnerDataToEdit.reviewFromCompanies,
				cta: partnerDataToEdit.cta,
			});
			setLogo(partnerDataToEdit.logo);
			setSelectedCheckboxes((prevState) => {
				const updatedCheckboxes = { ...prevState };
				partnerDataToEdit.industriesSpecializedIn.forEach((value) => {
					updatedCheckboxes[value] = true;
				});
				return updatedCheckboxes;
			});
			setSelectedCapabilitiesCheckboxes((prevState) => {
				const updatedCheckboxes = { ...prevState };
				partnerDataToEdit.capabilities.forEach((value) => {
					updatedCheckboxes[value] = true;
				});
				return updatedCheckboxes;
			});
		}
	}, []);

	const submitForm = async () => {
		if (session && session.user) {
			try {
				if (!partnerData.sizeOfCompany) {
					setError({
						title: "Size of company not selected",
						message: "Please select a size of company",
						showErrorBox: true,
					});
					return;
				}
				if (selectedValues.length == 0) {
					setError({
						title: "Insufficient data",
						message: "Please pick at max any 3 of the given options",
						showErrorBox: true,
					});
					return;
				}
				if (selectedCapabilitiesValues.length == 0) {
					setError({
						title: "Insufficient data",
						message: "Please pick at max any 3 of the given options",
						showErrorBox: true,
					});
					return;
				}
				if (!partnerDataToEdit && (!logo || !logoName)) {
					setError({
						title: "Logo not uploaded",
						message: "Please upload a logo",
						showErrorBox: true,
					});
					return;
				}

				let partner = {
					...partnerData,
					industriesSpecializedIn: selectedValues,
					capabilities: selectedCapabilitiesValues,
				};
				console.log("partner:", partner);

				if (!partner.slug || partner.slug == undefined || partner.slug == "undefined") {
					delete partner.slug;
				}

				if (logo && logoName) {
					const logoUrl = await uploadImage(logo, logoName, setLoading, setError);
					if (!logoUrl) {
						setLoading({ status: false, showProgressBar: false, progress: 0 });
						return;
					}

					partner = {
						...partner,
						logo: logoUrl,
					};
				}

				if (partnerDataToEdit) {
					dispatch(updateGenAIPartner(partnerDataToEdit._id, partner));
				} else {
					dispatch(createGenAIPartner(partner));
				}
			} catch (error) {
				return;
			}
		} else {
			setAuthModalOpen(true);
		}
	};

	const { isUpdated, error: updateError } = useSelector((state) => state.updateGenAIPartner);
	useEffect(() => {
		if (isUpdated) {
			setLoading({ status: false });
			setSuccess((prevState) => ({
				...prevState,
				title: "Partner Updated",
				message: "Partner has been updated successfully",
				showSuccessBox: true,
			}));
			sleep(2000).then(() => {
				router.reload();
			});
			return;
		}
		if (updateError) {
			setLoading({ status: false });
			setError({
				title: "Something went wrong",
				message: updateError,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, updateError, isUpdated]);

	const { success, partner, error } = useSelector((state) => state.createGenAIPartner);
	const router = useRouter();
	useEffect(() => {
		if (success && partner) {
			setLoading({ status: false });
			setSuccess((prevState) => ({
				...prevState,
				title: "Partner data submitted",
				message: "Your partner data has been submitted successfully. Please wait for the admin to approve it.",
				showSuccessBox: true,
			}));
			sleep(2000).then(() => {
				router.reload();
			});
			return;
		}
		if (error) {
			setLoading({ status: false });
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [dispatch, error, success]);

	// // Uncomment this to use actual data
	// useEffect(() => {
	// 	setPartnerData({
	// 		name: "Goodreads",
	// 		url: "https://www.goodreads.com",
	// 		oneLiner: "Deciding what to read next? You’re in the right place.",
	// 		videoLink: "https://www.youtube.com/watch?v=2Oa7HqUqD9M",
	// 		twitter: "https://twitter.com/evernote",
	// 		instagram: "https://www.instagram.com/evernote/",
	// 		linkedin: "https://www.linkedin.com/company/evernote/",
	// 		youtube: "https://www.youtube.com/user/EvernoteVideos",
	// 	});
	// }, []);

	return (
		<form
			id="tool-form"
			onSubmit={(e) => {
				e.preventDefault();
				submitForm();
			}}
			className="flex flex-col items-center justify-center w-full gap-y-10"
			encType="multipart/form-data"
		>
			<div className="grid items-start w-full grid-cols-1 mt-20 md:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-16">
				<div className="flex flex-col gap-y-8">
					<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
						<div className="flex flex-col" onClick={() => setAspectRatio({ width: 1, height: 1 })}>
							<div className="relative mb-16">
								<div className="absolute right-0 w-[90px] h-[90px] rounded-lg">
									{logo ? (
										<Image src={logo} alt="logo" objectFit="cover" layout="fill" className="rounded-lg" priority />
									) : (
										<div
											className={`bg-primary-300 opacity-40 w-full h-full flex items-center justify-center rounded-lg text-light-100 text-4xl`}
										>
											<i className="fa-solid fa-image"></i>
										</div>
									)}
								</div>
							</div>
							<ImageUploadInput
								image={logo}
								setImage={setLogo}
								setImageName={setLogoName}
								label={"Company Logo"}
								required={false}
								aspectRatio={aspectRatio}
							/>
						</div>
					</div>

					<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
						<TextInput
							variant="secondary"
							label={"Name of Company"}
							type={"text"}
							value={partnerData.name}
							name={"name"}
							onFieldChange={onDataChange}
							placeholder="Eg. EverythingAI"
							required={true}
						/>

						{partnerDataToEdit && (
							<TextInput
								variant="secondary"
								label={"Tool URL Slug"}
								type={"text"}
								value={partnerData.slug}
								name={"slug"}
								onFieldChange={onDataChange}
								placeholder="Eg. everything-ai"
								required={true}
							/>
						)}

						<Textarea
							variant="secondary"
							label={"Company one liner"}
							value={partnerData.oneLiner}
							name={"oneLiner"}
							onFieldChange={onDataChange}
							placeholder="Discover AI tools that fit like a glove: handpicked for your industry and goals."
							required={true}
						/>
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">Location</div>

						<div className="flex flex-col gap-y-8">
							<TextInput
								variant="secondary"
								label={"Country"}
								type={"text"}
								value={partnerData.country}
								name={"country"}
								onFieldChange={onDataChange}
								placeholder="Eg. United States"
								required={false}
							/>

							<TextInput
								variant="secondary"
								label={"State"}
								type={"text"}
								value={partnerData.state}
								name={"state"}
								onFieldChange={onDataChange}
								placeholder="Eg. California"
								required={false}
							/>
						</div>
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">Social Links</div>

						<div className="flex flex-col gap-y-8">
							<TextInput
								variant="secondary"
								label={"Twitter"}
								type={"text"}
								value={partnerData.twitter}
								name={"twitter"}
								onFieldChange={onDataChange}
								placeholder="Eg. https://twitter.com/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"LinkedIn"}
								type={"text"}
								value={partnerData.linkedin}
								name={"linkedin"}
								onFieldChange={onDataChange}
								placeholder="Eg. https://linkedin.com/company/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"Instagram"}
								type={"text"}
								value={partnerData.instagram}
								name={"instagram"}
								onFieldChange={onDataChange}
								placeholder="Eg. https://instagram.com/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"YouTube"}
								type={"text"}
								value={partnerData.youtube}
								name={"youtube"}
								onFieldChange={onDataChange}
								placeholder="Eg. https://youtube.com/{username}"
								required={false}
							/>
						</div>
					</div>

					<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
						<TextInput
							variant="secondary"
							label={"YouTube Video Link: Any video describing the company"}
							type={"url"}
							value={partnerData.videoLink}
							name={"videoLink"}
							onFieldChange={onDataChange}
							placeholder="A video link that describes your company"
							required={false}
						/>

						<Dropdown
							variant="secondary"
							id={"sizeOfCompany"}
							label={"Size of company"}
							name="sizeOfCompany"
							options={sizeOfCompanyOptions}
							defaultOption={partnerDataToEdit?.category?.name || sizeOfCompanyDefaultOption}
							setChoice={onDataChange}
							classes={"w-full"}
							required={true}
						/>
						{partnerDataToEdit?.sizeOfCompany && <span className="text-sm">Existing value: {partnerDataToEdit.sizeOfCompany}</span>}
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">Industries Specialized In</div>

						<div className="grid grid-cols-2 text-sm whitespace-nowrap">
							{industriesSpecializedInOptions &&
								industriesSpecializedInOptions.map((option) => (
									<label key={option} className="flex gap-2 cursor-pointer">
										<input
											type="checkbox"
											name="industriesSpecializedIn"
											value={option}
											checked={selectedCheckboxes[option] || false}
											onChange={handleCheckboxChange}
										/>
										{option}
									</label>
								))}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-y-6">
					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">Capabilities</div>

						<div className="grid grid-cols-2 gap-x-10 text-sm whitespace-nowrap">
							{capabilitiesOptions &&
								capabilitiesOptions.map((option) => (
									<label key={option} className="flex gap-2 cursor-pointer">
										<input
											type="checkbox"
											name="capabilities"
											value={option}
											checked={selectedCapabilitiesCheckboxes[option] || false}
											onChange={handleCapabilitiesCheckboxChange}
										/>
										{option}
									</label>
								))}
						</div>
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">Offers</div>

						<Textarea
							variant="secondary"
							label={"What is that one offer you want to give customers?"}
							value={partnerData.offerOneLiner}
							name={"offerOneLiner"}
							onFieldChange={onDataChange}
							placeholder="Write a one-liner about the offer"
							required={true}
						/>
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-2 font-semibold">
							Case Studies or Links
							<br />
							<span className="text-sm font-light">Provide links to webpages or PDFs</span>
						</div>

						<MultipleInput
							data={partnerData}
							setData={setPartnerData}
							dataKey={"caseStudies"}
							label={"Link"}
							addMoreLabel={"Add more links"}
							placeholder={"Eg. PDF link"}
						/>
					</div>

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-2 font-semibold">
							Your Partners
							<br />
							<span className="text-sm font-light">Eg. AWS, Azure, GCP</span>
						</div>

						<MultipleInput
							data={partnerData}
							setData={setPartnerData}
							dataKey={"partners"}
							label={"Partner Name"}
							addMoreLabel={"Add more partners"}
							placeholder={"Eg. AWS"}
						/>
					</div>

					<ReviewFromCompanies data={partnerData} setData={setPartnerData} />

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">
							CTA <RequiredAsterisk />
							<br />
							<span className="text-sm font-light">Connect with you Email, Demo links, or Website link</span>
						</div>

						<TextInput
							variant="secondary"
							type={"url"}
							value={partnerData.cta}
							name={"cta"}
							onFieldChange={onDataChange}
							placeholder="Enter your CTA link here"
							required={true}
							displayAsterisk={false}
						/>
					</div>
				</div>
			</div>

			<div className="md:w-1/3">
				<Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
					<span className="transition-all duration-500 group-hover:pr-6">
						Submit
						<i className="absolute pl-2 mt-1 font-bold transition-all duration-500 opacity-0 fas fa-angle-double-right group-hover:opacity-100"></i>
					</span>
				</Button>
			</div>
		</form>
	);
};

export default GenAIPartnerForm;
