import { useEffect } from "react";
import Dropdown from "@/components/ui/Dropdowns/Dropdown";
import MultiDropdown from "../ui/Dropdowns/MultiDropdown";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";

export default function Filter({ filter, setFilter }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);
	const { categories } = useSelector((state) => state.allCategories);

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

	const sortingOptions = [
		{ _id: 1, name: "Newest" },
		{ _id: 2, name: "Oldest" },
		{ _id: 3, name: "Most Popular" },
	];

	return (
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

				{subcategoriesOptions?.length > 0 && (
					<div className="flex items-center px-5 py-0 pr-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
						<span className="text-sm cursor-default">Subcategory: </span>
						<MultiDropdown
							placeholder={"Select a Subcategory"}
							selectedValue={filter.subcategories}
							type={"SUBCATEGORY"}
							setSelectedValue={setFilter}
							options={subcategoriesOptions}
						/>
					</div>
				)}
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
						setFilter({ type: "reset" });
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
