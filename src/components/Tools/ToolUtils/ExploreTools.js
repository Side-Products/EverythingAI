import ToolsCarousel from "../ToolsCarousel";

export default function ExploreTools({tools}){
    return (
        <div className="mt-36">
            <h3 className="text-3xl font-medium font-secondary text-primary-500">Explore Similar Tools 🛠️</h3>
            <ToolsCarousel tools={tools}/>
        </div>
    );
}