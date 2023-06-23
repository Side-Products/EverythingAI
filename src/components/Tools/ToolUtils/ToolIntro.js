import Image from "next/image";
import ToolSocials from "./ToolIntroUtils/ToolSocials";
import ToolPill from "./ToolIntroUtils/ToolPill";
import { getPricingChipClass } from "@/utils/Helpers";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ToolIntro({tool}){
    const createdDate = new Date(tool.createdAt);
    const hasSocials = () => {
        return ((tool.instagram || tool.twitter || tool.linkedin || tool.youtube).length > 0);
    }

    return (
        <>
            <div className="flex mt-8">
                <Image className="rounded-lg" width={640} height={360} src={tool.image} priority alt="tool image"/>
                <div className="flex flex-col flex-1 py-5 ml-12">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center space-x-2">
                            <a href={tool.url} target="_blank" rel="noreferrer" className="text-3xl font-semibold cursor-pointer font-secondary hover:text-primary-600">{tool.name}</a>
                            <Image src={'/verified_tick.svg'} width={22} height={22} alt="verified tick"/>
                        </div>
                        <Link href={tool?.url} target="_blank" rel="noopener noreferrer">
                            <Button type="button">
                                <i className="mr-2 text-base fa-solid fa-arrow-up-right-from-square text-light-100"></i>
                                Visit Site
                            </Button>
                        </Link>
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
                    {hasSocials() && 
                        <div className="mt-auto">
                            <ToolSocials tool={tool}/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}