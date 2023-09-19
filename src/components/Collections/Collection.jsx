import ToolCard from "@/components/Cards/ToolCard";

export default function Collection({ collection }) {
  return (
    <div>
      <h1 className="mt-8 text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
        {collection.name}
      </h1>

      {collection.metaDescription && (
        <div className="mt-8 text-center text-lg text-dark-800 px-10 sm:px-20 md:px-40 lg:px-52 py-8 rounded-2xl bg-light-100">
          {collection.description && (
            <div className="text-center text-xl font-semibold text-gray-600">
              {collection.description}
            </div>
          )}
          <div className="mt-8">
            {collection.metaDescription
              ? collection.metaDescription
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque."}
          </div>
        </div>
      )}

      {/* Filter based on the sub-categories below */}
      {collection.tools && collection.tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16">
          {collection.tools.map((tool) => (
            <ToolCard
              key={tool._id}
              tool={tool}
              adminRemoveFromCollectionView={true}
              collection={collection}
            />
          ))}
        </div>
      ) : (
        <div className="w-full mt-28 text-center text-sm text-zinc-400">
          No tools in this collection
        </div>
      )}
    </div>
  );
}
