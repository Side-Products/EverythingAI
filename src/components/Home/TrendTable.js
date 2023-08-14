import Image from "next/image";
import { useRouter } from "next/router";

export default function TrendTable({ tools, startIdx, limit }) {
	const router = useRouter();
	const contentArr = [];

	if (tools) {
		for (let i = startIdx; i - startIdx < Math.min(limit, tools.length - startIdx); i++) {
			if (tools[i]?.trendingSponsored) {
				contentArr.push(
					<div
						key={"i" + i}
						className={
							"relative overflow-hidden flex items-center justify-between w-full hover:bg-zinc-100 px-4 py-3 text-sm font-semibold cursor-pointer  rounded-xl transition duration-200 text-dark-600 " +
							(tools[i]?.trendingSponsored ? "bg-primary-100" : "")
						}
						onClick={() => router.push(`/tools/${tools[i]?.slug}`)}
					>
						<div className="transition-opacity ease-in duration-300 opacity-100 absolute px-5 py-1 text-[10px] leading-4 font-medium text-center text-white -rotate-[45deg] top-3 -left-5 h-fit bg-primary-600">
							Sponsored
						</div>
						<p className="w-[48px] text-left">{i + 1}</p>
						<div className="flex items-center w-[40%]">
							<Image src={tools[i]?.image} className="rounded-md" alt="tool icon" width={75} height={75} />
							<p className="pl-6">{tools[i]?.name}</p>
						</div>
						<p className="w-[20%] text-right">{tools[i]?.category?.name}</p>
						<p className="w-[20%] text-right">{tools[i]?.pricing?.name}</p>
					</div>
				);
			} else {
				contentArr.push(
					<div
						key={"i" + i}
						className={
							"flex items-center justify-between w-full px-4 py-3 text-sm font-semibold cursor-pointer bg-zinc-100/50 hover:bg-zinc-200/60 rounded-xl transition duration-200 " +
							(tools[i]?.trendingSponsored ? "bg-primary-100" : "")
						}
						onClick={() => router.push(`/tools/${tools[i]?.slug}`)}
					>
						<p className="w-[48px]">{i + 1}</p>
						<div className="flex items-center w-[40%]">
							<Image src={tools[i]?.image} className="rounded-md" alt="tool icon" width={75} height={75} />
							<p className="pl-6">{tools[i]?.name}</p>
						</div>
						<p className="w-[20%] text-right">{tools[i]?.category?.name}</p>
						<p className="w-[20%] text-right">{tools[i]?.pricing?.name}</p>
					</div>
				);
			}
		}
	}

	return (
		<div className="flex flex-col w-[48%] min-w-[578px] space-y-3">
			{/* Header div */}
			<div
				className={
					"flex items-center w-full px-4 pb-3 mb-2 border-b-[1px] border-[#e5e8eb]  text-[#646d75] text-sm justify-between " +
					(startIdx == 5 ? "md:flex hidden" : "")
				}
			>
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
