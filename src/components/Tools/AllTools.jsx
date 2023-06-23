import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTools } from "@/redux/actions/toolActions";
import ToolCard from "@/components/Cards/ToolCard";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import Dropdown from "../ui/Dropdowns/Dropdown";
import MultiDropdown from "../ui/Dropdowns/MultiDropdown";
import { useMemo } from "react";

export default function AllTools() {
	const dispatch = useDispatch();

	const initFilterState = {
		subcategory: {
			selectedSubcategories: [],
		},
		category: {
			_id: null,
			name: null,
		},
	}

	const reducerFn = (state, action) => {
		switch (action.type){
			case 'CATEGORY':
				dispatch(getCategory(action._id))
				return {
					...state,
					category: {
						_id: action._id,
						name: action.name
					}
				}
			case 'SUBCATEGORY':
				return {
					...state,
					subcategory: {
						selectedSubcategories: action.selectedSubcategories
					}
				}
		}
	}

	useEffect(() => {
		dispatch(getAllTools());
		dispatch(getAllCategories());
	}, [dispatch]);


	const { tools } = useSelector((state) => state.allTools);
	const { categories } = useSelector((state) => state.allCategories);
	const { category } = useSelector(state => state.category);
	const [filter, setFilter] = useReducer(reducerFn, initFilterState);

	const subcategoriesOptions = useMemo(() => {
		return category?.subcategories?.map(item => {
			return {
				...item,
				label: item.name,
				value: item._id
			}
		})
	},[category])

	return (
		<div>
			<h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				Tools
			</h1>
			<div className="sticky z-50 flex my-8 space-x-5 top-24">
				<div className="flex items-center px-5 py-2 bg-white border border-gray-300 rounded-xl hover:border-primary-600">
					<span className="text-sm cursor-default">Category: </span>
					<Dropdown 
						placeholder={'Select a Category'}
						selectedValue={filter.category.name}
						type={'CATEGORY'}
						setSelectedValue={setFilter}
						options={categories}
					/>
				</div>
				{subcategoriesOptions?.length > 0 && <div className="flex items-center px-5 py-0 pr-2 bg-white border border-gray-300 rounded-xl hover:border-primary-600">
					<span className="text-sm cursor-default">Subcategory: </span>
					<MultiDropdown
						placeholder={'Select a Subcategory'}
						selectedValue={filter.subcategory.selectedSubcategories}
						type={'SUBCATEGORY'}
						setSelectedValue={setFilter}
						options={subcategoriesOptions}
					/>
				</div>}
			</div>
			{tools && tools.length > 0 && (
				<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{tools.map((tool) => (
						<ToolCard key={tool._id} tool={tool} />
					))}
				</div>
			)}
		</div>
	);
}
