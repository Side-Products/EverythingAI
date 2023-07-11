import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";
import { createTool, updateTool, clearErrors } from "@/redux/actions/toolActions";
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
import UseCasesInput from "@/components/Submit/UseCasesInput";

const SubmitTool = ({ toolToEdit = null }) => {
	const { setLoading } = useContext(LoadingContext);
	const { setError, setSuccess } = useContext(StatusContext);
	const { data: session } = useSession();
	const { setAuthModalOpen } = useContext(AuthModalContext);

	const [toolData, setToolData] = useState({
		name: "",
		url: "",
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
	});
	const [image, setImage] = useState("");
	const [imageName, setImageName] = useState("");

	const categoryDefaultOption = "Select a category";
	const subCategoryDefaultOption = "Select a sub-category";
	const pricingDefaultOption = "Select a pricing option";

	const onToolDataChange = (e) => {
		if (e.target.name === "category") {
			if (e.target.value === categoryDefaultOption) e.target.value = "";
			else {
				setToolData({ ...toolData, [e.target.name]: getObjectByName(e.target.value, categories) });
			}
			if (toolToEdit) toolToEdit.subCategory.name = subCategoryDefaultOption;
			return;
		}
		if (e.target.name === "subCategory") {
			if (e.target.value === subCategoryDefaultOption) e.target.value = "";
			else {
				setToolData({ ...toolData, [e.target.name]: getObjectByName(e.target.value, category.subcategories) });
			}
			return;
		}
		if (e.target.name === "pricing") {
			if (e.target.value === pricingDefaultOption) e.target.value = "";
			else {
				setToolData({ ...toolData, [e.target.name]: getObjectByName(e.target.value, pricings) });
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
		if (toolToEdit) {
			setToolData({
				name: toolToEdit.name,
				url: toolToEdit.url,
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
			});
			setImage(toolToEdit.image);
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

				if (toolToEdit) {
					if (image && imageName) {
						const imageUrl = await uploadImage(image, imageName, setLoading, setError);
						if (!imageUrl) {
							setLoading({ status: false, showProgressBar: false, progress: 0 });
							return;
						}

						const tool = {
							...toolData,
							image: imageUrl,
						};
						dispatch(updateTool(toolToEdit._id, tool));
						return;
					} else {
						dispatch(updateTool(toolToEdit._id, toolData));
					}
				} else {
					dispatch(createTool(toolData));
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

	const [isBrowser, setBrowser] = useState(false);
	useEffect(() => {
		setBrowser(true);
	}, []);

	// // Uncomment this to use actual data
	// useEffect(() => {
	// 	setToolData({
	// 		name: "Evernote",
	// 		url: "https://evernote.com",
	// 		oneLiner: "Evernote is a cross-platform app designed for note taking, organizing, tasks lists, and archiving.",
	// 		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=2Oa7HqUqD9M",
	// 		features: "Evernote is a cross-platform app designed for note taking, organizing, tasks lists, and archiving.",
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

	return (
		<form
			id="tool-form"
			onSubmit={(e) => {
				e.preventDefault();
				submitForm();
			}}
			className="w-full flex flex-col items-center justify-center gap-y-10"
			encType="multipart/form-data"
		>
			<div className="w-full grid grid-cols-2 mt-20 gap-x-16 items-start">
				<div className="flex flex-col gap-y-8">
					{toolToEdit && (
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
							/>
						</div>
					)}

					<div className="flex flex-col gap-y-8 bg-light-100 rounded-2xl p-10">
						<TextInput
							variant="secondary"
							label={"Product Name"}
							type={"text"}
							value={toolData.name}
							name={"name"}
							onFieldChange={onToolDataChange}
							placeholder="Eg. EverythingAI"
							required={true}
						/>

						<TextInput
							variant="secondary"
							label={"Product URL (This will be the CTA link on your tool page)"}
							type={"text"}
							value={toolData.url}
							name={"url"}
							onFieldChange={onToolDataChange}
							placeholder="Eg. https://everythingai.club"
							required={true}
						/>

						<TextInput
							variant="secondary"
							label={"Product one liner"}
							type={"text"}
							value={toolData.oneLiner}
							name={"oneLiner"}
							onFieldChange={onToolDataChange}
							placeholder="Discover AI tools that fit like a glove: handpicked for your industry and goals."
							required={true}
						/>
					</div>

					<div className="flex flex-col gap-y-8 bg-light-100 rounded-2xl p-10">
						<TextInput
							variant="secondary"
							label={"YouTube Demo Video Link"}
							type={"url"}
							value={toolData.youtubeDemoVideoLink}
							name={"youtubeDemoVideoLink"}
							onFieldChange={onToolDataChange}
							placeholder="A YouTube video link to your product demo"
							required={false}
						/>

						<Textarea
							variant="secondary"
							label={"Features"}
							value={toolData.features}
							name={"features"}
							onFieldChange={onToolDataChange}
							placeholder="Your product features"
							required={false}
						/>
					</div>

					<div className="flex flex-col gap-y-8 bg-light-100 rounded-2xl p-10">
						<Dropdown
							variant="secondary"
							id={"selectCategory"}
							label={"Select Category"}
							name="category"
							options={categories}
							objKey={"name"}
							defaultOption={toolToEdit?.category?.name || categoryDefaultOption}
							setChoice={onToolDataChange}
							classes={"w-full"}
							required={true}
						/>

						<Dropdown
							variant="secondary"
							id={"selectSubCategory"}
							label={"Select Sub-Category"}
							name="subCategory"
							options={category?.subcategories}
							objKey={"name"}
							defaultOption={toolToEdit?.subCategory?.name || subCategoryDefaultOption}
							setChoice={onToolDataChange}
							classes={"w-full"}
							required={false}
						/>

						<Dropdown
							variant="secondary"
							id={"selectPricing"}
							label={"Select Pricing"}
							name="pricing"
							options={pricings}
							objKey={"name"}
							defaultOption={toolToEdit ? toolToEdit?.pricing?.name + " " + toolToEdit?.pricing?.meta : pricingDefaultOption}
							setChoice={onToolDataChange}
							classes={"w-full"}
							required={true}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-y-6">
					<div className="flex flex-col bg-light-100 rounded-2xl p-10">
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

					<UseCasesInput toolData={toolData} setToolData={setToolData} />
				</div>
			</div>

			<div className="md:w-1/3">
				<Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
					<span className="transition-all duration-500 group-hover:pr-6">
						Submit
						<i className="fas fa-angle-double-right absolute opacity-0 font-bold mt-1 pl-2 transition-all duration-500 group-hover:opacity-100"></i>
					</span>
				</Button>
				{/* <Button
					variant={"primary"}
					classes="text-md px-4 py-3 group mt-4"
					disabled={isBrowser && !document?.getElementById("tool-form")?.checkValidity()}
				>
					{isBrowser && !document?.getElementById("tool-form")?.checkValidity() ? (
						<span>Submit</span>
					) : (
						<span className="transition-all duration-500 group-hover:pr-6">
							Submit
							<i className="fas fa-angle-double-right absolute opacity-0 font-bold mt-1 pl-2 transition-all duration-500 group-hover:opacity-100"></i>
						</span>
					)}
				</Button> */}
			</div>
		</form>
	);
};

export default SubmitTool;
