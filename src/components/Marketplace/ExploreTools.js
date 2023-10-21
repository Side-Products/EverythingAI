import ToolCard from "@/components/Cards/ToolCard";

const ExploreTools = ({ tools }) => {
  return (
    tools &&
    tools.length > 0 &&
    tools.map((tool) => <ToolCard key={tool._id} tool={tool} />)
  );
};

export default ExploreTools;
