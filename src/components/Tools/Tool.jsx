import { useState } from "react";
import { useSelector } from "react-redux";
import ToolIntro from "./ToolUtils/ToolIntro";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import ShareModal from "@/components/ui/ShareModal";
import Cta from "@/components/Tools/Cta";
import DemoVideo from "@/components/Tools/DemoVideo";
import Features from "@/components/Tools/Features";
import UseCases from "@/components/Tools/UseCases";

export default function Tool({}) {
	const { tool } = useSelector((state) => state.tool);
	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareModalOpen, setShareModalOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col space-y-20">
				<ToolIntro tool={tool} setShareModalOpen={setShareModalOpen} />
				<div className="text-2xl font-semibold">Embed</div>
				<DemoVideo link={tool?.youtubeDemoVideoLink} />
				<Features features={tool?.features} />
				<UseCases useCases={tool?.useCases} />
				<Cta tool={tool} />
				<ToolsCarousel tools={tool.similarTools} heading={"Explore Similar Tools"} />
			</div>
			<ShareModal isOpen={isShareModalOpen} setOpen={setShareModalOpen} tool={tool} />
		</>
	);
}
