import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/aiRecommenderActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import DeleteRecommendationConfirmModal from "./Modals/AiRecommender/DeleteRecommendationConfirmModal";

export default function AllAiRecommendations() {
	const dispatch = useDispatch();
	const { recommendations, recommendationsCount, error, loading } = useSelector((state) => state.allAiRecommendations);

	const { setError } = useContext(StatusContext);

	const [activeTable, setActiveTable] = useState("allAiRecommendationsTable");
	const [isDeleteRecommendationModalOpen, setDeleteRecommendationModalOpen] = useState(false);
	const [recommendationToDelete, setRecommendationToDelete] = useState("");

	useEffect(() => {
		if (error) {
			setError({
				title: "Something went wrong",
				message: error,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [error]);

	return loading ? (
		<Loader />
	) : recommendations && recommendations.length > 0 ? (
		<div className="grid w-full mt-10 overflow-scroll">
			<div className="flex justify-between w-full">
				<ul className="items-start nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tables" role="tablist">
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("allAiRecommendationsTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "allAiRecommendationsTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-recommendations-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-recommendations"
							role="tab"
							aria-controls="tabs-all-recommendations"
							aria-selected="true"
						>
							All AI Recommendations
						</span>
					</li>
				</ul>

				<div className="flex flex-col items-end gap-y-4">
					<div className="font-semibold text-base text-dark-700">Total Count: {recommendationsCount}</div>
				</div>
			</div>

			<div className="tab-content" id="tabs-tabContent3">
				{/* All AiRecommendations Table */}
				{activeTable == "allAiRecommendationsTable" && (
					<div className="tab-pane fade show active" id="tabs-all-recommendations" role="tabpanel" aria-labelledby="tabs-all-recommendations-details">
						{recommendations.length !== 0 ? (
							<table className="w-full table allAiRecommendations-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">ID</th>
										<th className="p-3 text-left text-light-200">User</th>
										<th className="p-3 text-left text-light-200">What are you here for?</th>
										<th className="p-3 text-left text-light-200">Works at</th>
										<th className="p-3 text-left text-light-200">Category</th>
										<th className="p-3 text-left text-light-200">Sub-Category</th>
										<th className="p-3 text-left text-light-200">Helps with</th>
										<th className="p-3 text-left text-light-200">Important</th>
										<th className="p-3 text-left text-light-200">Company Size</th>
										<th className="p-3 text-left text-light-200">Delete</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{recommendations.map((recommendation, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(recommendation.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												<Link href={`/ai-recommender/results/${recommendation._id}`} className="text-primary-500 underline">
													{recommendation._id.substring(0, 10)}...
												</Link>
											</td>
											<td className="p-3">{recommendation.user.email}</td>
											<td className="p-3">{recommendation.whatAreYouHereFor}</td>
											<td className="p-3">{recommendation.workFor}</td>
											<td className="p-3">{recommendation.category}</td>
											<td className="p-3">{recommendation.subCategory}</td>
											<td className="p-3">{recommendation.helpsMeWith ? recommendation.helpsMeWith : "-"}</td>
											<td className="p-3">{recommendation.whatsImportant.join(", ")}</td>
											<td className="p-3">{recommendation.companySize}</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setRecommendationToDelete(recommendation);
													setDeleteRecommendationModalOpen(true);
												}}
											>
												Delete
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<>
								<table className="w-full table allAiRecommendations-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">ID</th>
											<th className="p-3 text-left">User</th>
											<th className="p-3 text-left">What are you here for?</th>
											<th className="p-3 text-left">Works at</th>
											<th className="p-3 text-left">Category</th>
											<th className="p-3 text-left">Sub-Category</th>
											<th className="p-3 text-left">Helps with</th>
											<th className="p-3 text-left">Important</th>
											<th className="p-3 text-left">Company Size</th>
											<th className="p-3 text-left">Delete</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}
			</div>

			<DeleteRecommendationConfirmModal
				isOpen={isDeleteRecommendationModalOpen}
				setOpen={setDeleteRecommendationModalOpen}
				recommendationToDelete={recommendationToDelete}
			/>
		</div>
	) : (
		<div className="mt-20 text-light-500">No recommendations yet</div>
	);
}
