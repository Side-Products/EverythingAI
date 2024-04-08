import Tooltip from "@/components/ui/Tooltip";
import InfoTip from "@/components/ui/InfoTip";

export default function ToolPill({ pillText, chipStyle, tooltip }) {
	return (
		<div className={"px-5 py-1 min-h-[28px] md:min-h-[32px] text-xs md:text-sm font-medium bg-gray-200 rounded-2xl w-fit flex items-center " + chipStyle}>
			{pillText}
			{tooltip && tooltip.length > 0 && <Tooltip labelText={<InfoTip classes={"ml-1 mt-[1px] " + chipStyle} />} message={tooltip} />}
		</div>
	);
}
