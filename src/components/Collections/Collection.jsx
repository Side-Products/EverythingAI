import ToolCard from "@/components/Cards/ToolCard";

export default function Collection({ collection }) {
	return (
		<div>
			<h1 className="mt-8 text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				{collection.name}
			</h1>
			<div className="mt-2 text-center text-sm text-gray-600">{collection.description}</div>
			{collection.metaDescription && (
				<div className="mt-8 text-start text-base text-dark-800 px-8 py-8 rounded-2xl bg-light-100">{collection.metaDescription}</div>
			)}
			{/* Filter based on the sub-categories below */}
			{collection.tools && collection.tools.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16">
					{collection.tools.map((tool) => (
						<ToolCard key={tool._id} tool={tool} adminRemoveFromCollectionView={true} collection={collection} />
					))}
				</div>
			) : (
				<div className="w-full mt-28 text-center text-sm text-zinc-400">No tools in this collection</div>
			)}
		</div>
	);
}
