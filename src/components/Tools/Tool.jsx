import { useState } from "react";
import { useSelector } from "react-redux";
import ToolIntro from "./ToolUtils/ToolIntro";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import ShareModal from "@/components/ui/ShareModal";
import Cta from "@/components/Tools/Cta";

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
				<div className="text-xl font-semibold">Embed</div>
				<div className="text-xl font-semibold">Demo Video</div>
				<div className="text-xl font-semibold">Features</div>
				<div className="text-xl font-semibold">Use Cases</div>
				<Cta tool={tool} />
				<ToolsCarousel tools={tool.similarTools} heading={"Explore Similar Tools"} />
			</div>
			<ShareModal isOpen={isShareModalOpen} setOpen={setShareModalOpen} tool={tool} />
		</>
	);
}
