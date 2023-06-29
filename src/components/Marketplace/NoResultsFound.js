const NoResultsFound = () => {
	return (
		<div className="w-full col-span-full flex flex-col justify-center items-center bg-light-100 py-44 rounded-2xl mt-10">
			<div className="rounded-full flex items-center justify-center w-[120px] h-[120px] bg-primary-100">
				<i className="fa-solid fa-triangle-exclamation text-gray-600 text-4xl"></i>
			</div>

			<div className="mt-8">No tools to display</div>
		</div>
	);
};

export default NoResultsFound;
