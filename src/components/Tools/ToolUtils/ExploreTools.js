import ToolsCarousel from "@/components/ui/Carousel/ToolsCarousel";

export default function ExploreTools({tools}){
    return (
        <div className="mb-8">
            <h3 className="mt-32 mb-5 text-3xl font-medium font-secondary text-primary-500">Explore Similar Tools 🛠️</h3>
            <ToolsCarousel tools={tools}/>
        </div>
    );
}