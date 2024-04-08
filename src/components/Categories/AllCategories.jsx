import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/redux/actions/categoryActions";
import CategoryCard from "@/components/Cards/CategoryCard";

export default function AllCategories() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	const { categories } = useSelector((state) => state.allCategories);

	return (
		<div>
			<h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				Categories
			</h1>
			{categories && categories.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12">
					{categories.map((category) => (
						<CategoryCard key={category._id} category={category} />
					))}
				</div>
			)}
		</div>
	);
}
