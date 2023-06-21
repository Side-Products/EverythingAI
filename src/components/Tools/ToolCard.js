import Image from "next/image";

export default function ToolCard({ tool, onClick, showSubcategory = false }) {
	return (
		<div onClick={() => onClick()} className="p-6 rounded-lg bg-light-100 cursor-pointer shadow-md hover:shadow-lg transition duration-500">
			<Image src={tool.image} width={300} height={300} alt="tool image" className="rounded-md" />
			<p className="mt-4 text-lg font-semibold">{tool.name}</p>
			<div className="flex justify-between items-end">
				<div className="mt-2 w-fit text-sm px-4 py-1 bg-primary-200 rounded-full">{showSubcategory ? tool.subCategory?.name : tool.category?.name}</div>
				<div className="mt-1 text-xs">{tool.pricing?.name}</div>
			</div>

			<div className="mt-6">{tool.oneLiner}</div>
		</div>
	);
}
