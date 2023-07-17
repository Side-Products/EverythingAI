import Image from "next/image";
import { useRouter } from "next/router";

export default function TrendTable({ tools, startIdx, limit }) {
	const router = useRouter();
	const contentArr = [];

	if (tools) {
		for (let i = startIdx; i - startIdx < Math.min(limit, tools.length - startIdx); i++) {
			contentArr.push(
				<div
					key={"i" + i}
					className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold transition duration-200 cursor-pointer hover:bg-zinc-100 rounded-xl"
					onClick={() => router.push(`/tools/${tools[i].slug}`)}
				>
					<p className="w-[48px]">{i + 1}</p>
					<div className="flex items-center w-[40%]">
						<Image src={tools[i].image} className="rounded-md" alt="tool icon" width={75} height={75} />
						<p className="pl-6">{tools[i].name}</p>
					</div>
					<p className="w-[20%] text-right">{tools[i].category.name}</p>
					<p className="w-[20%] text-right">{tools[i].pricing.name}</p>
				</div>
			);
		}
	}

	return (
		<div className="flex flex-col w-[48%] min-w-[578px] space-y-3">
			{/* Header div */}
			<div className="flex items-center w-full px-4 pb-3 mb-2 border-b-[1px] border-[#e5e8eb]  text-[#646d75] text-sm justify-between">
				<p className="w-[48px] text-left">Rank</p>
				<p className="w-[40%] text-left">Tool</p>
				<p className="w-[20%] text-right">Cateory</p>
				<p className="w-[20%] text-right">Pricing</p>
			</div>

			{/* Content */}
			{contentArr}
		</div>
	);
}
