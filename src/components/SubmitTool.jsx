import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";
import TextInput from "@/components/ui/Input/TextInput";
import Dropdown from "@/components/ui/Input/Dropdown";
import Button from "@/components/ui/Button";
import ImageUploadInput from "@/components/ui/Input/ImageUploadInput";
import axios from "axios";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { getObjectByName, dataURLtoFile } from "@/utils/Helpers";

const SubmitTool = () => {
	const { setLoading } = useContext(LoadingContext);
	const { setError } = useContext(StatusContext);

	const [toolData, setToolData] = useState({
		name: "",
		url: "",
		oneLiner: "",
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
				return;
			}
		}
		if (e.target.name === "subCategory") {
			if (e.target.value === subCategoryDefaultOption) e.target.value = "";
			else {
				setToolData({ ...toolData, [e.target.name]: getObjectByName(e.target.value, category.subcategories) });
				return;
			}
		}
		if (e.target.name === "pricing") {
			if (e.target.value === pricingDefaultOption) e.target.value = "";
			else {
				setToolData({ ...toolData, [e.target.name]: getObjectByName(e.target.value, pricings) });
				return;
			}
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

	const submitForm = async () => {
		if (!image) {
			setError({
				title: "Something went wrong",
				message: "Please upload an image",
				showErrorBox: true,
			});
			return;
		}

		let imageUrl = "";
		try {
			const file = dataURLtoFile(image, imageName);
			const formData = new FormData();
			formData.append("file", file);

			const response = await axios.post(`/api/upload-image`, formData, {
				maxContentLength: Infinity,
				maxBodyLength: Infinity,
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (progressEvent) => {
					var _percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					setLoading((prevState) => ({
						...prevState,
						status: true,
						showProgressBar: true,
						progress: _percentage,
					}));
				},
			});

			if (response.status === 200) {
				console.log("Image uploaded successfully at:", response.data.Location);
				imageUrl = response.data.Location;
			} else {
				setError({
					title: "Something went wrong",
					message: "Error uploading image. Please retry.",
					showErrorBox: true,
				});
			}
			setLoading({ status: false, showProgressBar: false, progress: 0 });
		} catch (error) {
			console.log("Error uploading image:", error);
			setError({
				title: "Something went wrong",
				message: "Error uploading image. Please retry.",
				showErrorBox: true,
			});
			return;
		}

		imageUrl;
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				submitForm();
			}}
			className="w-full flex flex-col items-center justify-center gap-y-10"
			encType="multipart/form-data"
		>
			<div className="w-full grid grid-cols-2 mt-20 gap-x-16 items-end">
				<div className="flex flex-col gap-y-8">
					<TextInput
						label={"Product Name"}
						type={"text"}
						value={toolData.name}
						name={"name"}
						onFieldChange={onToolDataChange}
						placeholder="Eg. EverythingAI"
						required={true}
					/>

					<TextInput
						label={"Product URL (This will be the CTA link on your tool page)"}
						type={"text"}
						value={toolData.url}
						name={"url"}
						onFieldChange={onToolDataChange}
						placeholder="Eg. https://everythingai.club"
						required={true}
					/>

					<TextInput
						label={"Product one liner"}
						type={"text"}
						value={toolData.oneLiner}
						name={"oneLiner"}
						onFieldChange={onToolDataChange}
						placeholder="Discover AI tools that fit like a glove: handpicked for your industry and goals."
						required={true}
					/>

					<Dropdown
						id={"selectCategory"}
						label={"Select Category"}
						name="category"
						options={categories}
						objKey={"name"}
						defaultOption={categoryDefaultOption}
						setChoice={onToolDataChange}
						classes={"w-full"}
					/>

					<Dropdown
						id={"selectSubCategory"}
						label={"Select Sub-Category"}
						name="subCategory"
						options={category?.subcategories}
						objKey={"name"}
						defaultOption={subCategoryDefaultOption}
						setChoice={onToolDataChange}
						classes={"w-full"}
					/>

					<Dropdown
						id={"selectPricing"}
						label={"Select Pricing"}
						name="pricing"
						options={pricings}
						objKey={"name"}
						defaultOption={pricingDefaultOption}
						setChoice={onToolDataChange}
						classes={"w-full"}
					/>
				</div>

				<div className="flex flex-col gap-y-6">
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
							required={true}
						/>
					</div>

					<div>
						<div className="mb-6 font-semibold">Social Links</div>

						<div className="flex flex-col gap-y-8">
							<TextInput
								label={"Twitter"}
								type={"text"}
								value={toolData.twitter}
								name={"twitter"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://twitter.com/{username}"
								required={true}
							/>
							<TextInput
								label={"Instagram"}
								type={"text"}
								value={toolData.instagram}
								name={"instagram"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://instagram.com/{username}"
								required={true}
							/>
							<TextInput
								label={"LinkedIn"}
								type={"text"}
								value={toolData.linkedin}
								name={"linkedin"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://linkedin.com/company/{username}"
								required={true}
							/>
							<TextInput
								label={"YouTube"}
								type={"text"}
								value={toolData.youtube}
								name={"youtube"}
								onFieldChange={onToolDataChange}
								placeholder="Eg. https://youtube.com/{username}"
								required={true}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="md:w-1/3">
				<Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
					<span className="transition-all duration-500 group-hover:pr-6">
						Submit
						<i className="fas fa-angle-double-right absolute opacity-0 font-bold mt-1 pl-2 transition-all duration-500 group-hover:opacity-100"></i>
					</span>
				</Button>
			</div>
		</form>
	);
};

export default SubmitTool;
