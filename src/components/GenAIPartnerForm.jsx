import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";
import { createTool, updateTool, clearErrors } from "@/redux/actions/toolActions";
import { updatePurchaseTerms, createPurchaseTerms } from "@/redux/actions/purchaseTermsActions";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { useSession } from "next-auth/react";
import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";
import Dropdown from "@/components/ui/Input/Dropdown";
import Button from "@/components/ui/Button";
import ImageUploadInput from "@/components/ui/Input/ImageUploadInput";
import { getObjectByName, uploadImage } from "@/utils/Helpers";
import { sleep } from "@/utils/Sleep";
import MultipleInput from "@/components/Forms/MultipleInput";
import ReviewFromCompanies from "@/components/Forms/ReviewFromCompanies";
import NumberInput from "./ui/Input/NumberInput";
import ToggleInput from "./ui/Input/ToggleInput";
import PurchaseTermInput from "./Submit/PurchaseTermInput";
import { sizeOfCompanyOptions, industriesSpecializedInOptions, capabilitiesOptions } from "@/config/constants";

const GenAIPartnerForm = ({ toolToEdit = null, purchaseTermsToEdit = null }) => {
	const { setLoading } = useContext(LoadingContext);
	const { setError, setSuccess } = useContext(StatusContext);
	const { data: session } = useSession();

	const { setAuthModalOpen } = useContext(AuthModalContext);

	const [toggle, setToggle] = useState(false);
	const [toolData, setToolData] = useState({
		name: "",
		slug: "",
		url: "",
		utmLink: "",
		oneLiner: "",
		youtubeDemoVideoLink: "",
		features: "",
		useCases: [{ heading: "", content: "" }],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "",
		instagram: "",
		linkedin: "",
		youtube: "",
		featured: "",
		trendingSponsored: "",
		productHuntLink: "",
		G2Link: "",
		trustPilotLink: "",
		productHuntStars: 0,
		G2Stars: 0,
		trustPilotStars: 0,
		everythingAIStars: 0,
		ad: "",
		caseStudies: [""],
		partners: [""],
		reviewFromCompanies: [{ companyName: "", review: "" }],
	});

	const [purchaseTerms, setPurchaseTerms] = useState({
		toolId: "",
		toolOwnerEmail: [],
		description: "",
		isActive: true,
		terms: [
			{
				termLength: "",
				couponCode: "",
				actualPrice: "",
				discountedPrice: "",
				termsAndConditions: "",
				limit: "",
			},
		],
	});

	const onPurchaseTermsChange = (e) => {
		if (e.target.name === "toolOwnerEmail") {
			setPurchaseTerms({
				...purchaseTerms,
				[e.target.name]: e.target.value.split(","),
			});
			return;
		}

		if (e.target.name === "isActive") {
			setPurchaseTerms({
				...purchaseTerms,
				[e.target.name]: purchaseTerms.isActive ? false : true,
			});
			return;
		}

		setPurchaseTerms({ ...purchaseTerms, [e.target.name]: e.target.value });
	};

	const [image, setImage] = useState("");
	const [imageName, setImageName] = useState("");

	const [logo, setLogo] = useState("");
	const [logoName, setLogoName] = useState("");

	const [aspectRatio, setAspectRatio] = useState({ width: 16, height: 9 });

	const sizeOfCompanyDefaultOption = "Choose a size of company";
	const subCategoryDefaultOption = "Select a sub-category";
	const pricingDefaultOption = "Select a pricing option";

	const onToolDataChange = (e) => {
		if (e.target.name === "sizeOfCompany") {
			if (e.target.value === sizeOfCompanyDefaultOption) e.target.value = "";
			else {
				setToolData({
					...toolData,
					[e.target.name]: getObjectByName(e.target.value, sizeOfCompanyOptions),
				});
			}
			if (toolToEdit) toolToEdit.subCategory.name = subCategoryDefaultOption;
			return;
		}
		if (e.target.name === "subCategory") {
			if (e.target.value === subCategoryDefaultOption) e.target.value = "";
			else {
				setToolData({
					...toolData,
					[e.target.name]: getObjectByName(e.target.value, category.subcategories),
				});
			}
			return;
		}
		if (e.target.name === "pricing") {
			if (e.target.value === pricingDefaultOption) e.target.value = "";
			else {
				setToolData({
					...toolData,
					[e.target.name]: getObjectByName(e.target.value, pricings),
				});
			}
			return;
		}
		setToolData({ ...toolData, [e.target.name]: e.target.value });
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategories());
		dispatch(getAllPricings());
	}, [dispatch]);
	const { categories } = useSelector((state) => state.allCategories);
	const { pricings } = useSelector((state) => state.allPricings);

	useEffect(() => {
		if (categories && categories.length > 0 && toolData.category !== "") {
			dispatch(getCategory(toolData.category?._id));
		}
	}, [categories, toolData.category]);
	const { category } = useSelector((state) => state.category);

	useEffect(() => {
		if (purchaseTermsToEdit?.length > 0) {
			// console.log("purchaseTermsToEdit", purchaseTermsToEdit);
			const purchaseTermData = purchaseTermsToEdit[0];
			setPurchaseTerms({
				toolId: purchaseTermData.tool,
				toolOwnerEmail: purchaseTermData.toolOwnerEmail,
				description: purchaseTermData.description,
				isActive: purchaseTermData.isActive,
				terms: purchaseTermData.terms,
			});
		}

		if (toolToEdit) {
			setToolData({
				name: toolToEdit.name,
				slug: toolToEdit.slug,
				url: toolToEdit.url,
				utmLink: toolToEdit.utmLink,
				oneLiner: toolToEdit.oneLiner,
				youtubeDemoVideoLink: toolToEdit.youtubeDemoVideoLink,
				features: toolToEdit.features,
				useCases: toolToEdit.useCases,
				category: toolToEdit.category,
				subCategory: toolToEdit.subCategory,
				pricing: toolToEdit.pricing,
				twitter: toolToEdit.twitter,
				instagram: toolToEdit.instagram,
				linkedin: toolToEdit.linkedin,
				youtube: toolToEdit.youtube,
				featured: toolToEdit.featured,
				trendingSponsored: toolToEdit.trendingSponsored,
				ad: toolToEdit.ad,
				productHuntLink: toolToEdit?.reviews?.productHunt?.link,
				productHuntStars: toolToEdit?.reviews?.productHunt?.stars,
				G2Link: toolToEdit?.reviews?.G2?.link,
				G2Stars: toolToEdit?.reviews?.G2?.stars,
				trustPilotLink: toolToEdit?.reviews?.trustPilot?.link,
				trustPilotStars: toolToEdit?.reviews?.trustPilot?.stars,
				everythingAIStars: toolToEdit?.reviews?.everythingAI?.stars,
			});
			setImage(toolToEdit.image);
			setLogo(toolToEdit.logo);
		}
	}, []);

	const submitForm = async () => {
		if (session && session.user) {
			try {
				if (!toolData.category) {
					setError({
						title: "Category not selected",
						message: "Please select a category",
						showErrorBox: true,
					});
					return;
				}
				if (!toolData.pricing) {
					setError({
						title: "Pricing not selected",
						message: "Please select a pricing option",
						showErrorBox: true,
					});
					return;
				}
				if (!toolToEdit && (!logo || !logoName)) {
					setError({
						title: "Logo not uploaded",
						message: "Please upload a logo",
						showErrorBox: true,
					});
					return;
				}

				let tool = {
					...toolData,
				};
				if (!tool.featured || tool.featured == undefined || tool.featured == "undefined") {
					delete tool.featured;
				}
				if (!tool.slug || tool.slug == undefined || tool.slug == "undefined") {
					delete tool.slug;
				}
				if (!tool.trendingSponsored || tool.trendingSponsored == undefined || tool.trendingSponsored == "undefined") {
					delete tool.trendingSponsored;
				}
				if (!tool.ad || tool.ad == undefined || tool.ad == "undefined") {
					delete tool.ad;
				}
				if (!tool.utmLink || tool.utmLink == undefined || tool.utmLink == "undefined") {
					delete tool.utmLink;
				}
				if (tool.featured && logo == "") {
					setError({
						title: "Logo not uploaded",
						message: "Please upload a logo to set the tool as featured",
						showErrorBox: true,
					});
					return;
				}

				if (logo && logoName) {
					const logoUrl = await uploadImage(logo, logoName, setLoading, setError);
					if (!logoUrl) {
						setLoading({ status: false, showProgressBar: false, progress: 0 });
						return;
					}

					tool = {
						...tool,
						logo: logoUrl,
					};
				}

				if (toolToEdit) {
					if (image && imageName) {
						const imageUrl = await uploadImage(image, imageName, setLoading, setError);
						if (!imageUrl) {
							setLoading({
								status: false,
								showProgressBar: false,
								progress: 0,
							});
							return;
						}

						tool = {
							...tool,
							image: imageUrl,
						};
					}

					dispatch(updateTool(toolToEdit._id, tool));
				} else {
					dispatch(createTool(tool));
				}
			} catch (error) {
				return;
			}

			try {
				if (session?.user?.role === "admin") {
					if (purchaseTermsToEdit.length > 0) {
						dispatch(updatePurchaseTerms(purchaseTerms, toolToEdit._id));
					} else if (purchaseTerms.toolOwnerEmail.length > 0) {
						dispatch(createPurchaseTerms(purchaseTerms, toolToEdit._id));
					}
				}
			} catch (error) {
				return;
			}
		} else {
			setAuthModalOpen(true);
		}
	};

	const { isUpdated, error: updateError } = useSelector((state) => state.updateTool);
	useEffect(() => {
		if (isUpdated) {
			setLoading({ status: false });
			setSuccess((prevState) => ({
				...prevState,
				title: "Tool Updated",
				message: "Tool has been updated successfully",
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

	const { success, tool, error } = useSelector((state) => state.createTool);
	const router = useRouter();
	const { query } = router;
	useEffect(() => {
		if (success && tool) {
			setLoading({ status: false });
			setSuccess((prevState) => ({
				...prevState,
				title: "Tool submitted",
				message: "Your tool has been submitted successfully. Please wait for the admin to approve it.",
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
	// 	setToolData({
	// 		name: "Goodreads",
	// 		url: "https://www.goodreads.com",
	// 		oneLiner: "Deciding what to read next? You’re in the right place.",
	// 		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=2Oa7HqUqD9M",
	// 		features:
	// 			"See what books your friends are reading.\nTrack the books you're reading, have read, and want to read.\nCheck out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.\nFind out if a book is a good fit for you from our community’s reviews.",
	// 		useCases: [
	// 			{
	// 				heading: "Marketing",
	// 				content:
	// 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
	// 			},
	// 			{
	// 				heading: "Sales",
	// 				content:
	// 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
	// 			},
	// 			{
	// 				heading: "Content",
	// 				content:
	// 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
	// 			},
	// 		],
	// 		category: "",
	// 		subCategory: "",
	// 		pricing: "",
	// 		twitter: "https://twitter.com/evernote",
	// 		instagram: "https://www.instagram.com/evernote/",
	// 		linkedin: "https://www.linkedin.com/company/evernote/",
	// 		youtube: "https://www.youtube.com/user/EvernoteVideos",
	// 	});
	// }, []);

	const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
	const handleCheckboxChange = (event) => {
		const { name, value, checked } = event.target;
		if (selectedValues.length == 3 && checked) {
			setError({
				title: "Only 3 choices allowed",
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
	const selectedValues = Object.keys(selectedCheckboxes).filter((value) => selectedCheckboxes[value]);

	const [selectedCapabilitiesCheckboxes, setSelectedCapabilitiesCheckboxes] = useState({});
	const handleCapabilitiesCheckboxChange = (event) => {
		const { name, value, checked } = event.target;
		if (selectedCapabilitiesCheckboxes.length == 3 && checked) {
			setError({
				title: "Only 3 choices allowed",
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
	const selectedCapabilitiesValues = Object.keys(selectedCapabilitiesCheckboxes).filter((value) => selectedCapabilitiesCheckboxes[value]);

	return (
		<form
			id="tool-form"
			onSubmit={(e) => {
				e.preventDefault();
				// submitForm();
			}}
			className="flex flex-col items-center justify-center w-full gap-y-10"
			encType="multipart/form-data"
		>
			<div className="grid items-start w-full grid-cols-1 mt-20 md:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-16">
				<div className="flex flex-col gap-y-8">
					{toolToEdit && query?.feature !== "true" && (
						<div className="flex flex-col">
							<div className="relative mb-16">
								<div className="absolute right-0 w-[160px] h-[90px] rounded-lg">
									{image ? (
										<Image src={image} alt="image" objectFit="cover" layout="fill" className="rounded-lg" priority />
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
								image={image}
								setImage={setImage}
								setImageName={setImageName}
								label={"Product Image (Ratio 16 : 9)"}
								required={toolToEdit && toolToEdit.image == image ? false : true}
								aspectRatio={aspectRatio}
							/>
						</div>
					)}

					{toolToEdit && query?.feature == "true" && (
						<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
							<TextInput
								variant="secondary"
								label={"Position for Featured Tool in the Hero Section"}
								type={"number"}
								value={toolData.featured}
								name={"featured"}
								onFieldChange={onToolDataChange}
								placeholder="Enter featured position"
								required={false}
							/>
						</div>
					)}
					{(!toolToEdit || query?.feature == "true") && (
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
					)}

					{toolToEdit && (
						<>
							<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
								<TextInput
									variant="secondary"
									label={"Position for Sponsored Tool on Trending Table"}
									type={"number"}
									value={toolData.trendingSponsored}
									name={"trendingSponsored"}
									onFieldChange={onToolDataChange}
									placeholder="Enter position"
									required={false}
								/>
							</div>

							<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
								<TextInput
									variant="secondary"
									label={"Position for the AD on tools page"}
									type={"number"}
									value={toolData.ad}
									name={"ad"}
									onFieldChange={onToolDataChange}
									placeholder="Enter position for the ad"
									required={false}
								/>
							</div>
						</>
					)}

					<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
						<TextInput
							variant="secondary"
							label={"Name of Company"}
							type={"text"}
							value={toolData.name}
							name={"name"}
							onFieldChange={onToolDataChange}
							placeholder="Eg. EverythingAI"
							required={true}
						/>

						{toolToEdit && (
							<TextInput
								variant="secondary"
								label={"Tool URL Slug"}
								type={"text"}
								value={toolData.slug}
								name={"slug"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. everything-ai"
								required={true}
							/>
						)}

						<Textarea
							variant="secondary"
							label={"Company one liner"}
							value={toolData.oneLiner}
							name={"oneLiner"}
							onFieldChange={onToolDataChange}
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
								type={"url"}
								value={toolData.youtubeDemoVideoLink}
								name={"youtubeDemoVideoLink"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. United States"
								required={false}
							/>

							<TextInput
								variant="secondary"
								label={"State"}
								type={"url"}
								value={toolData.youtubeDemoVideoLink}
								name={"youtubeDemoVideoLink"}
								onFieldChange={onToolDataChange}
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
								value={toolData.twitter}
								name={"twitter"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://twitter.com/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"LinkedIn"}
								type={"text"}
								value={toolData.linkedin}
								name={"linkedin"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://linkedin.com/company/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"Instagram"}
								type={"text"}
								value={toolData.instagram}
								name={"instagram"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://instagram.com/{username}"
								required={false}
							/>
							<TextInput
								variant="secondary"
								label={"YouTube"}
								type={"text"}
								value={toolData.youtube}
								name={"youtube"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://youtube.com/{username}"
								required={false}
							/>
						</div>
					</div>

					<div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
						<TextInput
							variant="secondary"
							label={"Video Link: Any video describing the company"}
							type={"url"}
							value={toolData.youtubeDemoVideoLink}
							name={"youtubeDemoVideoLink"}
							onFieldChange={onToolDataChange}
							placeholder="A video link that describes your company"
							required={false}
						/>

						<Dropdown
							variant="secondary"
							id={"sizeOfCompany"}
							label={"Size of company"}
							name="sizeOfCompany"
							options={sizeOfCompanyOptions}
							defaultOption={toolToEdit?.category?.name || sizeOfCompanyDefaultOption}
							setChoice={onToolDataChange}
							classes={"w-full"}
							required={true}
						/>
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
							value={toolData.oneLiner}
							name={"oneLiner"}
							onFieldChange={onToolDataChange}
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
							toolData={toolData}
							setToolData={setToolData}
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
							toolData={toolData}
							setToolData={setToolData}
							dataKey={"partners"}
							label={"Partner Name"}
							addMoreLabel={"Add more partners"}
							placeholder={"Eg. AWS"}
						/>
					</div>

					<ReviewFromCompanies toolData={toolData} setToolData={setToolData} />

					<div className="flex flex-col p-10 bg-light-100 rounded-2xl">
						<div className="mb-6 font-semibold">
							CTA
							<br />
							<span className="text-sm font-light">Connect with you Email, Demo links, or Website link</span>
						</div>

						<TextInput
							variant="secondary"
							type={"url"}
							value={toolData.cta}
							name={"cta"}
							onFieldChange={onToolDataChange}
							placeholder="Enter your CTA link here"
							required={false}
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
