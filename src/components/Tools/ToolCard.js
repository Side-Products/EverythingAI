import Image from "next/image";
import MarqueeText from "../ui/MarqueeText";
import styles from "@/styles/ToolCard/ToolCard.module.css"

<<<<<<< HEAD
export default function ToolCard({ tool, onClick }) {
	/**
	 * @returns background and text color tw-classes w.r.t pricing name
	 */
	const getPricingChipClass = () => {
		switch (tool.pricing.name.split(" ")[0]){
			case 'Free':
				return 'text-green-800 bg-green-300';
			case 'Premium':
				return 'text-yellow-800 bg-yellow-300';
			default:
				return 'text-purple-800 bg-purple-300';
		}
	}

	return (
		<div onClick={() => onClick()} className="transition duration-300 rounded-lg shadow-md cursor-pointer max-w-fit bg-light-100 hover:shadow-lg">
			<Image src={tool.image} width={533} height={300} alt="tool image" className="rounded-tl-lg rounded-tr-lg" />

			<div className="p-5">
				{tool.name.length < 10? 
					<p className="text-lg font-semibold">{tool.name}</p>
					:
					<MarqueeText text={tool.name} classes={'text-lg font-semibold'} marqueeWidth={'w-[125px]'}/>
				}

				<div className="flex items-center justify-between text-sm font-medium">
					<p>{tool.category?.name}</p>
					<p className={"px-4 py-1 text-xs font-semibold rounded-2xl "+ getPricingChipClass()}>{tool.pricing?.name}</p>
				</div>

				<p className={"mt-5 text-sm "+styles['oneLiner']}>{tool.oneLiner}</p>
			</div>
=======
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
>>>>>>> e46c74f6591cf0d3d8d071c821b7c72d93eebc67
		</div>
	);
}