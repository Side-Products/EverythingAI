import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ToolCard/ToolCard.module.css";
import ShinyLoader from "@/components/ui/ShinyLoader";

export default function PartnerCard({ partner }) {
	return (
		<div className="flex relative overflow-hidden flex-col justify-between transition duration-300 shadow-md group w-full max-w-fit bg-light-100 rounded-xl hover:shadow-2xl">
			<div>
				<Link href={`/gen-ai-partners/${partner?.slug}`} className="cursor-pointer">
					<div className="relative w-full overflow-hidden h-60 rounded-t-xl">
						{partner?.logo ? (
							<Image
								src={partner?.logo}
								width={533}
								height={500}
								alt="partner logo"
								className="duration-500 group-hover:scale-110 group-hover:duration-500 rounded-t-xl"
							/>
						) : (
							<ShinyLoader classes={"h-[300px] w-[533px]"} />
						)}
					</div>

					<div className="p-5 pb-0">
						{partner?.name ? (
							<div className="flex justify-between">
								<p className="text-lg font-semibold">{partner?.name}</p>
							</div>
						) : (
							<ShinyLoader classes={"w-24 h-5 rounded-md"} />
						)}

						<div className="flex items-end justify-between mt-1 font-medium">
							{partner?.industriesSpecializedIn ? (
								<span className="cursor-info">
									<p className="px-4 py-1 rounded-md bg-dark-700 text-light-100 text-[12px]">{partner?.industriesSpecializedIn.join(", ")}</p>
								</span>
							) : (
								<ShinyLoader classes={"w-32 h-5 rounded-md"} />
							)}
						</div>
					</div>
				</Link>

				<div className="relative flex justify-between px-5 pb-5 mt-3">
					<p className={"text-sm " + styles["oneLiner"]}>
						{partner?.oneLiner.length > 30 ? partner?.oneLiner.substring(0, 30) + "..." : partner?.oneLiner}
					</p>
				</div>

				<div className="relative flex flex-wrap gap-2 px-5 pb-5">
					{partner?.capabilities ? (
						partner.capabilities.map((capability, index) => (
							<span className="cursor-info" key={index}>
								<p className="px-4 py-1 rounded-md bg-light-200 text-dark-700 text-[12px] break-keep whitespace-nowrap">{capability}</p>
							</span>
						))
					) : (
						<div className="grid items-center justify-between w-full grid-cols-2 px-5 pb-5 gap-x-6">
							<>
								<ShinyLoader classes={"w-32 h-7 rounded-md"} />
								<ShinyLoader classes={"w-32 h-7 rounded-md"} />
							</>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
