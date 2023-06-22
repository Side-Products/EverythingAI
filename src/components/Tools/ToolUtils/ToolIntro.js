import Image from "next/image";
import ToolSocials from "./ToolIntroUtils/ToolSocials";
import ToolPill from "./ToolIntroUtils/ToolPill";
import { getPricingChipClass } from "@/utils/Helpers";
//Is one social media url compulsory?
//also about the loading context state to automaticaly set to true when fetching in reduce
export default function ToolIntro({tool}){
    const createdDate = new Date(tool.createdAt);
    return (
        <>
            <div className="flex mt-8">
                <Image className="rounded-lg" width={640} height={360} src={tool.image} priority alt="tool image"/>
                <div className="flex flex-col flex-1 py-5 ml-12">
                    <div className="flex items-center mb-5 space-x-2">
                        <a href={tool.url} target="_blank" rel="noreferrer" className="text-3xl font-semibold cursor-pointer font-secondary">{tool.name}</a>
                        <Image src={'/verified_tick.svg'} width={22} height={22} alt="verified tick"/>
                        {/* <a className="ml-auto" href={tool.url} target="_blank" rel="noreferrer">
                            <span className="cursor-pointer material-symbols-outlined hover:text-primary-600 text-primary-400">travel_explore</span>
                        </a> */}
                    </div>
                    <p className="mb-5 font-medium">{tool.oneLiner}</p>
                    <div className="flex mb-3 space-x-3">
                        <ToolPill pillText={tool.category.name}/>
                        <ToolPill pillText={tool.subcategory.name}/>
                        <ToolPill pillText={`Added On: ${createdDate.toLocaleDateString('en-GB')}`}/>
                    </div>
                    <ToolPill 
                        pillText={tool.pricing.name} 
                        chipStyle={getPricingChipClass(tool.pricing.name)}
                        tooltip={tool.pricing.meta}
                    />

                    <div className="mt-auto">
                        <ToolSocials tool={tool}/>
                    </div>
                </div>
            </div>
        </>
    );
}