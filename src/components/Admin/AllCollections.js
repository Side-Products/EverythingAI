import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/collectionActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import UpdateCollectionModal from "./Modals/Collection/UpdateCollectionModal";
import DeleteCollectionConfirmModal from "./Modals/Collection/DeleteCollectionConfirmModal";
import AddCollectionModal from "./Modals/Collection/AddCollectionModal";

export default function AllCollections() {
	const dispatch = useDispatch();
	const { collections, collectionsCount, error, loading } = useSelector((state) => state.allCollections);

	const { setError } = useContext(StatusContext);

	const [activeTable, setActiveTable] = useState("allCollectionsTable");
	const [isUpdateCollectionModalOpen, setUpdateCollectionModalOpen] = useState(false);
	const [isDeleteCollectionModalOpen, setDeleteCollectionModalOpen] = useState(false);
	const [isAddCollectionModalOpen, setAddCollectionModalOpen] = useState(false);
	const [collectionToUpdate, setCollectionToUpdate] = useState("");
	const [collectionToDelete, setCollectionToDelete] = useState("");

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
	) : (
		<div className="grid w-full mt-10 overflow-scroll">
			<div className="flex justify-between w-full">
				<ul className="items-start nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tables" role="tablist">
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("allCollectionsTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "allCollectionsTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-collections-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-collections"
							role="tab"
							aria-controls="tabs-all-collections"
							aria-selected="true"
						>
							All Collections
						</span>
					</li>
				</ul>

				<div className="flex flex-col items-end gap-y-4">
					<div className="font-semibold text-base text-dark-700">Total Count: {collectionsCount}</div>
					<div onClick={() => setAddCollectionModalOpen(true)} className="text-sm hover:text-primary-500 transition duration-300 cursor-pointer">
						<i className="fa-solid fa-circle-plus"></i> Create a new collection
					</div>
				</div>
			</div>

			<div className="tab-content" id="tabs-tabContent3">
				{/* All Collections Table */}
				{activeTable == "allCollectionsTable" && (
					<div className="tab-pane fade show active" id="tabs-all-collections" role="tabpanel" aria-labelledby="tabs-all-collections-details">
						{collections && collections.length !== 0 ? (
							<table className="w-full table allCollections-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">ID</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Description</th>
										<th className="p-3 text-left text-light-200">Edit</th>
										<th className="p-3 text-left text-light-200">Delete</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{collections.map((collection, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(collection.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												<span data-info={collection._id}>{collection._id}</span>
											</td>
											<td className="p-3">{collection.name}</td>
											<td className="p-3">{collection.description}</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setCollectionToUpdate(collection);
													setUpdateCollectionModalOpen(true);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setCollectionToDelete(collection);
													setDeleteCollectionModalOpen(true);
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
								<table className="w-full table allCollections-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">ID</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Description</th>
											<th className="p-3 text-left">Edit</th>
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

			<AddCollectionModal isOpen={isAddCollectionModalOpen} setOpen={setAddCollectionModalOpen} />
			<UpdateCollectionModal isOpen={isUpdateCollectionModalOpen} setOpen={setUpdateCollectionModalOpen} collectionToUpdate={collectionToUpdate} />
			<DeleteCollectionConfirmModal isOpen={isDeleteCollectionModalOpen} setOpen={setDeleteCollectionModalOpen} collectionToDelete={collectionToDelete} />
		</div>
	);
}
