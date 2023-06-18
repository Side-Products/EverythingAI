import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";
import TextInput from "@/components/ui/Input/TextInput";
import Dropdown from "@/components/ui/Input/Dropdown";
import Button from "@/components/ui/Button";

const SubmitTool = () => {
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
	const categoryDefaultOption = "Select a category";
	const subCategoryDefaultOption = "Select a sub-category";
	const pricingDefaultOption = "Select a pricing option";

	function getObjectByName(categoryName, categoryArray) {
		const lowerCaseName = categoryName.toLowerCase();
		return categoryArray.find((category) => category.name.toLowerCase() === lowerCaseName);
	}

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

	return (
		<form className="w-full flex flex-col items-center justify-center gap-y-10">
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

				<div className="flex flex-col gap-y-32">
					<div>Product Image</div>

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

			<div className="w-1/2">
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
