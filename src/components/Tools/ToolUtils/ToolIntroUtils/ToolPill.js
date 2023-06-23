import Tooltip from "@/components/ui/Tooltip";

export default function ToolPill({pillText, chipStyle, tooltip}){
    return (
        <div className={"px-5 py-1 min-h-[32px] text-sm font-medium bg-gray-200 rounded-2xl w-fit flex items-center "+ chipStyle}>
            {pillText}
            {tooltip && tooltip.length > 0 && 
                <Tooltip 
                    labelText={<span className={"ml-1 material-symbols-outlined text-base "+chipStyle}>info</span>} 
                    message={tooltip}
                />
            }
        </div>
    );
}