import { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/ToolCard/ToolCard.module.css";
import MarqueeText from "@/components/ui/MarqueeText";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { likeTool, deleteLikedTool } from "@/redux/actions/likedToolActions";
import { useSession } from "next-auth/react";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import ShinyLoader from "@/components/ui/ShinyLoader";
import InfoTip from "@/components/ui/InfoTip";
import { ToolContext } from "@/store/ToolContextProvider";

export default function ToolCard({ tool, adminRemoveFromCollectionView, collection }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const { setAuthModalOpen } = useContext(AuthModalContext);

	const { likedTool } = useSelector((state) => state.createLikedTool);
	useEffect(() => {
		if (likedTool) {
			if (likedTool?._id === tool?._id) {
				tool.liked = true;
			}
		}
	}, [likedTool]);

	const getPricingChipClass = (pricingName) => {
		if (pricingName) {
			switch (pricingName.split(" ")[0]) {
				case "Free":
					return " text-green-700 ";
				case "Premium":
					return " text-yellow-700 ";
				case "Freemium":
					return " text-purple-700 ";
				default:
					return " text-purple-700 ";
			}
		}
	};

	const { setToolToRemoveFromCollection, setIsRemoveToolFromCollectionModalOpen, setCollectionToRemoveFrom } = useContext(ToolContext);

	return (
		<div className="flex flex-col justify-between transition duration-300 shadow-md group w-full max-w-fit bg-light-100 rounded-xl hover:shadow-2xl">
			<div>
				<Link href={`/tools/${tool?.slug}`} className="cursor-pointer">
					<div className="relative w-full overflow-hidden h-44 rounded-t-xl">
						{tool?.image ? (
							<Image
								src={tool?.image}
								width={533}
								height={300}
								alt="tool image"
								className="duration-500 group-hover:scale-110 group-hover:duration-500 rounded-t-xl"
							/>
						) : (
							<ShinyLoader classes={"h-[300px] w-[533px]"} />
						)}
					</div>

					<div className="p-5 pb-0">
						{/* tool?.name?.length > 10 ? (
							<MarqueeText text={tool?.name} classes={"text-lg font-semibold"} marqueeWidth={"w-[125px]"} />
						) :  */}
						{tool?.name ? <p className="text-lg font-semibold">{tool?.name}</p> : <ShinyLoader classes={"w-24 h-5 rounded-md"} />}

						<div className="flex items-end justify-between mt-1 font-medium">
							{/* <p className="px-4 py-1 rounded-md bg-dark-700 text-light-100 text-[12px]">{tool?.category?.name}</p> */}
							{tool?.category ? (
								tool?.category?.name?.length > 0 && (
									<span className="cursor-info">
										<Tooltip
											labelText={<p className="px-4 py-1 rounded-md bg-dark-700 text-light-100 text-[12px]">{tool?.category?.name}</p>}
											message={tool?.subCategory?.name}
										/>
									</span>
								)
							) : (
								<ShinyLoader classes={"w-32 h-5 rounded-md"} />
							)}

							{tool?.pricing ? (
								<div
									className={
										"flex items-center pl-4 py-[2px] text-xs font-semibold rounded-2xl min-h-[28px] " +
										getPricingChipClass(tool?.pricing?.name)
									}
								>
									<p>{tool?.pricing?.name}</p>
									{tool?.pricing?.meta?.length > 0 && (
										<span className="-mt-[1px] cursor-info">
											<Tooltip
												// labelText={<InfoTip classes={" ml-1 text-[8px] " + getPricingChipClass(tool?.pricing?.name)} />}
												labelText={<InfoTip classes={" ml-1 " + getPricingChipClass(tool?.pricing?.name)} />}
												message={tool?.pricing?.meta}
											/>
										</span>
									)}
								</div>
							) : (
								<ShinyLoader classes={"w-20 h-5 rounded-md"} />
							)}
						</div>
					</div>
				</Link>

				<div className="relative flex justify-between px-5 pb-5 mt-3">
					<p className={"text-sm " + styles["oneLiner"]}>{tool?.oneLiner.length > 35 ? tool?.oneLiner.substring(0, 35) + "..." : tool?.oneLiner}</p>
					{adminRemoveFromCollectionView && session && session.user && session.user.role == "admin" && (
						<span
							className="absolute group-hover:block hidden right-6 bottom-4 text-lg cursor-pointer text-gray-400 hover:text-error-400 transition duration-300"
							onClick={() => {
								setToolToRemoveFromCollection(tool);
								setCollectionToRemoveFrom(collection);
								setIsRemoveToolFromCollectionModalOpen(true);
							}}
						>
							<i className="fa-solid fa-trash"></i>
						</span>
					)}
				</div>
			</div>

			<div className="grid items-center justify-between w-full grid-cols-2 px-5 pb-5 mt-2 gap-x-6">
				{tool?.url ? (
					<>
						<Link href={tool?.url || "https://everythingai.club"} target="_blank" rel="noopener noreferrer" className="h-full">
							<Button type="button" variant="classic" classes="relative group/link-btn" btnClasses={"h-full"}>
								<i className="text-base fa-solid fa-arrow-up-right-from-square text-dark-200 group-hover/link-btn:text-primary-400"></i>
							</Button>
						</Link>

						<Button
							onClick={() => {
								if (session && session.user) {
									if (tool?.liked) {
										dispatch(deleteLikedTool(tool?._id));
										tool.liked = false;
									} else {
										dispatch(likeTool(tool?._id));
										tool.liked = true;
									}
								} else {
									setAuthModalOpen(true);
								}
							}}
							type="button"
							variant="classic"
							active={tool?.liked}
							classes="relative group/like-btn"
						>
							<i
								className={
									"fa-solid fa-thumbs-up text-lg " + (tool?.liked ? "text-light-100" : "text-dark-200 group-hover/like-btn:text-primary-400")
								}
							></i>
						</Button>
					</>
				) : (
					<>
						<ShinyLoader classes={"w-32 h-7 rounded-md"} />
						<ShinyLoader classes={"w-32 h-7 rounded-md"} />
					</>
				)}
			</div>
		</div>
	);
}
