import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MarqueeText from "../ui/MarqueeText";
import styles from "@/styles/ToolCard/ToolCard.module.css";
import Tooltip from "../ui/Tooltip";
import Button from "@/components/ui/Button";

export default function ToolCard({ tool }) {
	const router = useRouter();

	/**
	 * @returns background and text color tw-classes w.r.t pricing name
	 */
	const getPricingChipClass = () => {
		switch (tool.pricing.name.split(" ")[0]) {
			case "Free":
				return "text-green-800 bg-green-300";
			case "Premium":
				return "text-yellow-800 bg-yellow-300";
			default:
				return "text-purple-800 bg-purple-300";
		}
	};

	return (
		<div className="group transition duration-300 cursor-pointer max-w-fit bg-light-100 rounded-xl shadow-md hover:shadow-2xl">
			<div onClick={() => router.push(`/tools/${tool._id}`)}>
				<div className="relative w-full h-44 overflow-hidden rounded-t-xl">
					<Image
						src={tool.image}
						width={533}
						height={300}
						alt="tool image"
						className="group-hover:scale-110 group-hover:duration-500 duration-500 rounded-t-xl"
					/>
				</div>

				<div className="p-5 pb-0">
					{tool.name.length < 10 ? (
						<p className="text-lg font-semibold">{tool.name}</p>
					) : (
						<MarqueeText text={tool.name} classes={"text-lg font-semibold"} marqueeWidth={"w-[125px]"} />
					)}

					<div className="flex items-center justify-between text-sm font-medium">
						<p>{tool.category?.name}</p>
						<div className={"flex items-center px-4 py-[2px] text-xs font-semibold rounded-2xl min-h-[28px] " + getPricingChipClass()}>
							<p>{tool.pricing?.name}</p>
							{tool.pricing.meta?.length > 0 && (
								<Tooltip labelText={<span class="ml-1 material-symbols-outlined text-sm">info</span>} message={tool.pricing.meta} />
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="px-5 pb-5 mt-3">
				<p className={"text-sm " + styles["oneLiner"]}>{tool.oneLiner}</p>
			</div>

			<div className="w-full grid grid-cols-2 items-center justify-between gap-x-6 px-5 pb-5 mt-2">
				<Link href={tool?.url} target="_blank" rel="noopener noreferrer">
					<Button type="button">
						<i className="fa-solid fa-arrow-up-right-from-square text-light-100 text-lg"></i>
					</Button>
				</Link>

				<Button type="button" variant="default" classes="relative group/like-btn">
					<i className="fa-solid fa-thumbs-up text-light-100 text-lg group-hover/like-btn:text-primary-400"></i>
				</Button>
			</div>
		</div>
	);
}
