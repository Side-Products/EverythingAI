import Image from "next/image";
import MarqueeText from "../ui/MarqueeText";
import styles from "@/styles/ToolCard/ToolCard.module.css"
import Tooltip from "../ui/Tooltip";
import { getPricingChipClass } from "@/utils/Helpers";

export default function ToolCard({ tool, onClick }) {
	// const getPricingChipClass = (pricingName) => {
	// 	switch (pricingName.split(" ")[0]){
	// 		case 'Free':
	// 			return 'text-green-800 bg-green-300';
	// 		case 'Premium':
	// 			return 'text-yellow-800 bg-yellow-300';
	// 		default:
	// 			return 'text-purple-800 bg-purple-300';
	// 	}
	// }

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
					<div className={"flex items-center px-4 py-1 text-xs font-semibold rounded-2xl min-h-[32px] "+ getPricingChipClass(tool.pricing.name)}>
						<p>{tool.pricing?.name}</p>
						{
							tool.pricing.meta?.length > 0
							&& 
							<Tooltip 
								labelText={<span class="ml-1 material-symbols-outlined text-base">info</span>} 
								message={tool.pricing.meta}
							/>
						}
					</div>
				</div>

				<p className={"mt-5 text-sm "+styles['oneLiner']}>{tool.oneLiner}</p>
			</div>
		</div>
	);
}