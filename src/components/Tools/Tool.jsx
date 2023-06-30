import { useState } from "react";
import { useSelector } from "react-redux";
import ToolIntro from "./ToolUtils/ToolIntro";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import ShareModal from "@/components/ui/ShareModal";
import Cta from "@/components/Tools/Cta";
import DemoVideo from "@/components/Tools/DemoVideo";
import Features from "@/components/Tools/Features";
import UseCases from "@/components/Tools/UseCases";
import EmbedTag from "./ToolUtils/EmbedTag";
import { useRouter } from "next/router";

export default function Tool({}) {
	const { tool } = useSelector((state) => state.tool);
	const { query } = useRouter();
	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareModalOpen, setShareModalOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col space-y-20">
				<ToolIntro tool={tool} setShareModalOpen={setShareModalOpen} />
				<EmbedTag toolSlug={query.tool} />
				<div className="flex">
					<Features features={tool?.features} />
					<UseCases useCases={tool?.useCases} />
				</div>
				<DemoVideo link={tool?.youtubeDemoVideoLink} />
				<Cta tool={tool} />
				<ToolsCarousel tools={tool.similarTools} heading={"Explore Similar Tools"} />
			</div>
			<ShareModal isOpen={isShareModalOpen} setOpen={setShareModalOpen} tool={tool} />
		</>
	);
}
