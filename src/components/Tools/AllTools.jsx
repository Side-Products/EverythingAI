import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTools } from "@/redux/actions/toolActions";
import ToolCard from "@/components/Cards/ToolCard";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import Dropdown from "../ui/Dropdown";

export default function AllTools() {
	const dispatch = useDispatch();

	const initFilterState = {
		subcategory: {
			_id: null,
			name: null,
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
						_id: action._id,
						name: action.name
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
	const [filter, setFilter] = useReducer(reducerFn, initFilterState)

	return (
		<div>
			<h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				Tools
			</h1>
			<div className="flex my-8 space-x-5">
				<div className="flex items-center px-5 py-2 border border-gray-300 rounded-xl hover:border-primary-600">
					<span className="text-sm cursor-default">Category: </span>
					<Dropdown 
						placeholder={'Select a Category'}
						selectedValue={filter.category.name}
						type={'CATEGORY'}
						setSelectedValue={setFilter}
						options={categories}
					/>
				</div>
				{category?.subcategories?.length > 0 && <div className="flex items-center px-5 py-2 border border-gray-300 rounded-xl hover:border-primary-600">
					<span className="text-sm cursor-default">Subcategory: </span>
					<Dropdown 
						placeholder={'Select a Subcategory'}
						selectedValue={filter.subcategory.name}
						type={'SUBCATEGORY'}
						setSelectedValue={setFilter}
						options={category.subcategories}
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
