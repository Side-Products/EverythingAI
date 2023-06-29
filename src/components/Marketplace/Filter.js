import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Dropdown from "@/components/ui/Dropdowns/Dropdown";
import MultiDropdown from "../ui/Dropdowns/MultiDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/redux/actions/categoryActions";
import FilterCarousel from "./FilterCarousel";

export default function Filter({ filter, setFilter }) {
	const dispatch = useDispatch();

	const { categories } = useSelector((state) => state.allCategories);
	const { subcategories } = useSelector((state) => state.allSubCategories);
	const { pricings } = useSelector((state) => state.allPricings);

	useEffect(() => {
		if (categories && categories.length > 0 && filter.category) {
			dispatch(getCategory(filter.category?._id));
		}
	}, [categories, filter.category]);
	const { category } = useSelector((state) => state.category);

	const subcategoriesOptions = useMemo(() => {
		return category?.subcategories?.map((item) => {
			return {
				...item,
				label: item.name,
				value: item._id,
			};
		});
	}, [category]);

	const defaultSubcategories = useMemo(() => {
		return subcategories?.map((item) => {
			return {
				...item,
				label: item.name,
				value: item._id,
			};
		});
	}, [subcategories]);

	const sortingOptions = [
		{ _id: 1, name: "Newest" },
		{ _id: 2, name: "Oldest" },
		{ _id: 3, name: "Most Popular" },
	];

	const [subcategoriesFilterOptions, setSubcategoriesFilterOptions] = useState([]);
	const getIndustrySubcategories = async () => {
		const { data } = await axios.get(`/api/categories/find/industries`);
		const subcategories = data?.category?.subcategories;
		setSubcategoriesFilterOptions(subcategories);
	};
	useEffect(() => {
		getIndustrySubcategories();
	}, []);

	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex justify-between my-6 top-24">
				<div className="flex space-x-5">
					<div className="flex items-center px-5 py-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
						<span className="text-sm cursor-default">Category: </span>
						<Dropdown
							placeholder={"Select a Category"}
							selectedValue={filter.category.name}
							type={"CATEGORY"}
							setSelectedValue={setFilter}
							options={categories}
						/>
					</div>

					<div className="flex items-center px-5 py-0 pr-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
						<span className="text-sm cursor-default">Subcategory: </span>
						<MultiDropdown
							placeholder={"Select a Subcategory"}
							selectedValue={filter.subcategories}
							type={"SUBCATEGORY"}
							setSelectedValue={setFilter}
							options={subcategoriesOptions?.length > 0 ? subcategoriesOptions : defaultSubcategories}
						/>
					</div>

					<div className="flex items-center px-5 py-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
						<span className="text-sm cursor-default">Pricing: </span>
						<Dropdown
							placeholder={"Select Pricing"}
							selectedValue={filter.pricing.name}
							type={"PRICING"}
							setSelectedValue={setFilter}
							options={pricings}
						/>
					</div>
				</div>

				<div className="flex space-x-5">
					<div className="flex items-center px-5 py-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
						<span className="text-sm cursor-default">Sort by: </span>
						<Dropdown
							placeholder={"Sort By"}
							selectedValue={filter.sortingFilter}
							type={"SORTINGFILTER"}
							setSelectedValue={setFilter}
							options={sortingOptions}
						/>
					</div>
					<button
						className="bg-dark-800 text-light-200 text-sm px-6 rounded-lg"
						onClick={() => {
							window.location.href = "/tools";
							setFilter({ type: "reset" });
						}}
					>
						Reset
					</button>
				</div>
			</div>
			{subcategoriesFilterOptions?.length > 0 && <FilterCarousel options={subcategoriesFilterOptions} setFilter={setFilter} type={"SUBCATEGORY"} />}
		</div>
	);
}
