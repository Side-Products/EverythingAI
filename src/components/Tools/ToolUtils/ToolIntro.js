import Image from "next/image";
import Link from "next/link";
import { getPricingChipClass } from "@/utils/Helpers";
import Button from "@/components/ui/Button";
import ToolSocials from "./ToolIntroUtils/ToolSocials";
import ToolPill from "./ToolIntroUtils/ToolPill";
import { convertTimestampToNormalDate } from "@/utils/Helpers";

export default function ToolIntro({ tool, setShareModalOpen }) {
	const createdDate = new Date(tool?.createdAt);
	const hasSocials = () => {
		return (tool?.instagram || tool?.twitter || tool?.linkedin || tool?.youtube)?.length > 0;
	};

	return (
		<>
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

					<div className="flex mt-6 justify-between">
						<div className="flex space-x-3">
							<ToolPill pillText={tool?.category?.name} />
							<ToolPill pillText={tool?.subCategory?.name} />
						</div>
						<span className="text-sm">
							<i className="fa fa-calendar mr-2"></i>Added on {convertTimestampToNormalDate(createdDate)}
						</span>
					</div>

					<div className="flex mt-4">
						<ToolPill pillText={tool?.pricing?.name} chipStyle={getPricingChipClass(tool?.pricing?.name)} tooltip={tool?.pricing?.meta} />
					</div>

					<div className="w-full flex justify-between items-end mt-auto">
						<div className="mt-auto">{hasSocials() && <ToolSocials tool={tool} />}</div>
						<div>
							<Button type="button" onClick={() => setShareModalOpen(true)}>
								<div className="flex justify-center items-center space-x-2">
									<i className="fa-solid fa-share-nodes text-lg"></i>
									<span>Share</span>
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
