import SubCategoryCard from "./SubCategoryCard";
import ToolCard from "@/components/Tools/ToolCard";

export default function Category({ category }) {
	return (
		<div>
			<h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				{category.name}
			</h1>
			{/* Filter based on the sub-categories below
			{category.subcategories && category.subcategories.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
					{category.subcategories.map((subCategory) => (
						<SubCategoryCard key={subCategory._id} subCategory={subCategory} />
					))}
				</div>
			)} */}
			{category.tools && category.tools.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
					{category.tools.map((tool) => (
						<ToolCard key={tool._id} tool={tool} onClick={() => router.push(`/tools/${tool._id}`)} showSubcategory={true} />
					))}
				</div>
			)}
		</div>
	);
}
