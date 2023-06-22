import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTools } from "@/redux/actions/toolActions";
import ToolCard from "./ToolCard";

export default function AllTools() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTools());
	}, [dispatch]);

	const { tools } = useSelector((state) => state.allTools);

	return (
		<div>
			<h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
				Tools
			</h1>
			{tools && tools.length > 0 && (
				<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{tools.map((tool) => (
						<ToolCard key={tool._id} tool={tool} />
					))}
				</div>
			)}
		</div>
	);
}
