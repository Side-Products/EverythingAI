import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/ToolCard/ToolCard.module.css";
import MarqueeText from "@/components/ui/MarqueeText";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { likeTool, deleteLikedTool } from "@/redux/actions/likedToolActions";
import { useEffect } from "react";
import { getPricingChipClass } from "@/utils/Helpers";

export default function ToolCard({ tool }) {
	const router = useRouter();
	const dispatch = useDispatch();

	const { likedTool } = useSelector((state) => state.createLikedTool);
	useEffect(() => {
		if (likedTool) {
			if (likedTool._id === tool._id) {
				tool.liked = true;
			}
		}
	}, [likedTool]);

	return (
		<div className="transition duration-300 shadow-md cursor-pointer group max-w-fit flex flex-col justify-between bg-light-100 rounded-xl hover:shadow-2xl">
			<div>
				<div onClick={() => router.push(`/tools/${tool.slug}`)}>
					<div className="relative w-full overflow-hidden h-44 rounded-t-xl">
						<Image
							src={tool?.image}
							width={533}
							height={300}
							alt="tool image"
							className="duration-500 group-hover:scale-110 group-hover:duration-500 rounded-t-xl"
						/>
					</div>

					<div className="p-5 pb-0">
						{tool?.name?.length < 10 ? (
							<p className="text-lg font-semibold">{tool?.name}</p>
						) : (
							<MarqueeText text={tool?.name} classes={"text-lg font-semibold"} marqueeWidth={"w-[125px]"} />
						)}

						<div className="flex items-end justify-between font-medium mt-1">
							<p className="px-4 py-1 rounded-md bg-dark-700 text-light-100 text-[12px]">{tool.category?.name}</p>
							<div
								className={
									"flex items-center px-4 py-[2px] text-xs font-semibold rounded-2xl min-h-[28px] " + getPricingChipClass(tool.pricing?.name)
								}
							>
								<p>{tool.pricing?.name}</p>
								{tool.pricing?.meta?.length > 0 && (
									<span className="mt-[3px]">
										<Tooltip
											labelText={
												<span className={"ml-1 text-[14px] material-symbols-outlined " + getPricingChipClass(tool.pricing?.name)}>
													info
												</span>
											}
											message={tool?.pricing?.meta}
										/>
									</span>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="px-5 pb-5 mt-3">
					<p className={"text-sm " + styles["oneLiner"]}>{tool?.oneLiner}</p>
				</div>
			</div>

			<div className="grid items-center justify-between w-full grid-cols-2 px-5 pb-5 mt-2 gap-x-6">
				<Link href={tool?.url || "https://everythingai.club"} target="_blank" rel="noopener noreferrer" className="h-full">
					<Button type="button" variant="classic" classes="relative group/link-btn" btnClasses={"h-full"}>
						<i className="text-base fa-solid fa-arrow-up-right-from-square text-dark-200 group-hover/link-btn:text-primary-400"></i>
					</Button>
				</Link>

				<Button
					onClick={() => {
						if (tool.liked) {
							dispatch(deleteLikedTool(tool._id));
							tool.liked = false;
						} else {
							dispatch(likeTool(tool._id));
							tool.liked = true;
						}
					}}
					type="button"
					variant="classic"
					active={tool?.liked}
					classes="relative group/like-btn"
				>
					<i
						className={"fa-solid fa-thumbs-up text-lg " + (tool?.liked ? "text-light-100" : "text-dark-200 group-hover/like-btn:text-primary-400")}
					></i>
				</Button>
			</div>
		</div>
	);
}
