import { useSelector } from "react-redux";
import ToolIntro from "./ToolUtils/ToolIntro";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";

export default function Tool({}) {
	const { tool } = useSelector((state) => state.tool);

	return (
		<div className="flex flex-col space-y-16">
			<ToolIntro tool={tool} />
			<ToolsCarousel tools={tool.similarTools} heading={"Explore Similar Tools"} />
		</div>
	);
}
