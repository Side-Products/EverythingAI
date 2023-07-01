import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPricingChipClass } from "@/utils/Helpers";
import Button from "@/components/ui/Button";
import ToolSocials from "./ToolUtils/ToolSocials";
import ToolPill from "./ToolUtils/ToolPill";
import { convertTimestampToNormalDate } from "@/utils/Helpers";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { likeTool, deleteLikedTool } from "@/redux/actions/likedToolActions";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import AddToCollectionModal from "@/components/Admin/Modals/Tool/AddToCollectionModal";
import { getAllCollections } from "@/redux/actions/collectionActions";

export default function ToolIntro({ tool, setShareModalOpen }) {
	const createdDate = new Date(tool?.createdAt);
	const hasSocials = () => {
		return (tool?.instagram || tool?.twitter || tool?.linkedin || tool?.youtube)?.length > 0;
	};

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

	useEffect(() => {
		if (session && session.user && session.user.role == "admin") {
			dispatch(getAllCollections());
		}
	}, [dispatch, session]);

	const [isAddToCollectionModalOpen, setAddToCollectionModalOpen] = useState(false);

	return (
		<div>
			{session && session.user && session && session.user.role == "admin" && (
				<div className="w-full flex justify-between p-4 mt-6 mb-12 bg-gray-200 rounded-xl">
					<div className="text-sm font-semibold">Admin Actions</div>
					<div
						onClick={() => setAddToCollectionModalOpen(true)}
						className="text-end text-sm hover:text-primary-500 transition duration-300 cursor-pointer"
					>
						<i className="fa-solid fa-circle-plus"></i> Add to a collection
					</div>
				</div>
			)}

			<div className="flex mt-8">
				<Image className="rounded-xl" width={640} height={360} src={tool?.image} priority alt="tool image" />
				<div className="flex flex-col flex-1 ml-12">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<a
								href={tool?.url}
								target="_blank"
								rel="noreferrer"
								className="md:text-4xl text-3xl font-semibold cursor-pointer font-secondary hover:text-primary-600"
							>
								{tool?.name}
							</a>
							<Image src={"/verified_tick.svg"} width={22} height={22} alt="verified tick" />
						</div>
						<Link href={tool?.url || ""} target="_blank" rel="noopener noreferrer">
							<Button type="button">
								<i className="mr-2 text-base fa-solid fa-arrow-up-right-from-square text-light-100"></i>
								Visit Site
							</Button>
						</Link>
					</div>

					<p className="mt-6 text-lg font-medium">{tool?.oneLiner}</p>

					<div className="w-full flex flex-col justify-between items-end mt-auto">
						<div className="w-full flex flex-col">
							<div className="flex mt-6 space-x-3">
								<ToolPill pillText={tool?.category?.name} />
								<ToolPill pillText={tool?.subCategory?.name} />
							</div>

							<div className="flex mt-4 justify-between items-end">
								<ToolPill pillText={tool?.pricing?.name} chipStyle={getPricingChipClass(tool?.pricing?.name)} tooltip={tool?.pricing?.meta} />
								<span className="text-sm">
									<i className="fa fa-calendar mr-2"></i>Added on {convertTimestampToNormalDate(createdDate)}
								</span>
							</div>
						</div>

						<div className="w-full flex justify-between items-end mt-auto">
							<div className="mt-auto">{hasSocials() && <ToolSocials tool={tool} />}</div>
							<div className="flex space-x-3">
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
									variant="classic-100"
									active={tool?.liked}
									classes="relative group/like-btn px-10"
								>
									<i
										className={
											"fa-solid fa-thumbs-up text-lg " +
											(tool?.liked ? "text-light-100" : "text-dark-200 group-hover/like-btn:text-primary-400")
										}
									></i>
								</Button>
								<Button type="button" variant="classic-100" onClick={() => setShareModalOpen(true)}>
									<div className="flex justify-center items-center space-x-2">
										<i className="fa-solid fa-share-nodes text-lg"></i>
										<span>Share</span>
									</div>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AddToCollectionModal isOpen={isAddToCollectionModalOpen} setOpen={setAddToCollectionModalOpen} toolId={tool?._id} />
		</div>
	);
}
