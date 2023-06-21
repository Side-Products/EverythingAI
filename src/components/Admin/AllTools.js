import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/toolActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import DeleteToolConfirmModal from "./Modals/Tool/DeleteToolConfirmModal";
import VerifyToolConfirmModal from "./Modals/Tool/VerifyToolConfirmModal";
import UnverifyToolConfirmModal from "./Modals/Tool/UnverifyToolConfirmModal";
import verified_tick from "/public/verified_tick.svg";

export default function AllTools() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { tools, verifiedTools, unverifiedTools, toolsCount, error, loading } = useSelector((state) => state.allTools);

	const { setError } = useContext(StatusContext);

	const [activeTable, setActiveTable] = useState("allToolsTable");
	const [isDeleteToolModalOpen, setDeleteToolModalOpen] = useState(false);
	const [isVerifyToolModalOpen, setVerifyToolModalOpen] = useState(false);
	const [isUnverifyToolModalOpen, setUnverifyToolModalOpen] = useState(false);
	const [toolToDelete, setToolToDelete] = useState("");
	const [toolToVerify, setToolToVerify] = useState("");
	const [toolToUnverify, setToolToUnverify] = useState("");

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
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("allToolsTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "allToolsTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-tools-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-tools"
							role="tab"
							aria-controls="tabs-all-tools"
							aria-selected="true"
						>
							All Tools
						</span>
					</li>
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("unverifiedTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "unverifiedTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-unverified-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-unverified"
							role="tab"
							aria-controls="tabs-unverified"
							aria-selected="false"
						>
							Unverified
						</span>
					</li>
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("verifiedTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "verifiedTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-verified-tools-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-verified-tools"
							role="tab"
							aria-controls="tabs-verified-tools"
							aria-selected="false"
						>
							Verified
						</span>
					</li>
				</ul>

				<div className="font-semibold text-base text-dark-700">Total Count: {toolsCount}</div>
			</div>

			<div className="tab-content" id="tabs-tabContent3">
				{/* All Tools Table */}
				{activeTable == "allToolsTable" && (
					<div className="tab-pane fade show active" id="tabs-all-tools" role="tabpanel" aria-labelledby="tabs-all-tools-details">
						{tools.length !== 0 ? (
							<table className="w-full table allTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Image</th>
										<th className="p-3 text-left text-light-200">URL</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Category</th>
										<th className="p-3 text-left text-light-200">Sub-Category</th>
										<th className="p-3 text-left text-light-200">Pricing</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Tool</th>
										<th className="p-3 text-left text-light-200">Delete Tool</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{tools.map((tool, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(tool.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												{tool.verified && <Image src={verified_tick} width={14} height={14} alt="verified_tick" />}
												{tool.name}
											</td>
											<td className="p-3">
												<Image src={tool.image} alt={tool.name} width={80} height={45} className="rounded" />
											</td>
											<td className="p-3">{tool.url}</td>
											<td className="p-3">{tool.oneLiner}</td>
											<td className="p-3">{tool.category.name}</td>
											<td className="p-3">{tool.subCategory.name}</td>
											<td className="p-3">{tool.pricing.name}</td>
											<td className="p-3">
												<div className="flex gap-x-2">
													{tool.twitter && (
														<Link
															href={tool.twitter}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-twitter"></i>
														</Link>
													)}
													{tool.instagram && (
														<Link
															href={tool.instagram}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-instagram"></i>
														</Link>
													)}
													{tool.linkedin && (
														<Link
															href={tool.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-linkedin"></i>
														</Link>
													)}
													{tool.youtube && (
														<Link
															href={tool.youtube}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-youtube"></i>
														</Link>
													)}
												</div>
											</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													router.push(`/admin/tools/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setToolToDelete(tool);
													setDeleteToolModalOpen(true);
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
								<table className="w-full table allTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Image</th>
											<th className="p-3 text-left">URL</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Category</th>
											<th className="p-3 text-left">Sub-Category</th>
											<th className="p-3 text-left">Pricing</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Tool</th>
											<th className="p-3 text-left">Delete Tool</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Unverified Tools Table */}
				{activeTable == "unverifiedTable" && (
					<div className="tab-pane fade" id="tabs-unverified" role="tabpanel" aria-labelledby="tabs-unverified-table">
						{unverifiedTools && unverifiedTools.length !== 0 ? (
							<table className="w-full table unverifiedTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Image</th>
										<th className="p-3 text-left text-light-200">URL</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Category</th>
										<th className="p-3 text-left text-light-200">Sub-Category</th>
										<th className="p-3 text-left text-light-200">Pricing</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Tool</th>
										<th className="p-3 text-left text-light-200">Delete Tool</th>
										<th className="p-3 text-left text-light-200">Verify</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{unverifiedTools.map((tool, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(tool.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												{tool.verified && <Image src={verified_tick} width={14} height={14} alt="verified_tick" />}
												{tool.name}
											</td>
											<td className="p-3">
												<Image src={tool.image} alt={tool.name} width={80} height={45} className="rounded" />
											</td>
											<td className="p-3">{tool.url}</td>
											<td className="p-3">{tool.oneLiner}</td>
											<td className="p-3">{tool.category.name}</td>
											<td className="p-3">{tool.subCategory.name}</td>
											<td className="p-3">{tool.pricing.name}</td>
											<td className="p-3">
												<div className="flex gap-x-2">
													{tool.twitter && (
														<Link
															href={tool.twitter}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-twitter"></i>
														</Link>
													)}
													{tool.instagram && (
														<Link
															href={tool.instagram}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-instagram"></i>
														</Link>
													)}
													{tool.linkedin && (
														<Link
															href={tool.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-linkedin"></i>
														</Link>
													)}
													{tool.youtube && (
														<Link
															href={tool.youtube}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-youtube"></i>
														</Link>
													)}
												</div>
											</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													router.push(`/admin/tools/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setToolToDelete(tool);
													setDeleteToolModalOpen(true);
												}}
											>
												Delete
											</td>
											<td
												className="p-3 bg-success-400 hover:bg-success-500 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setToolToVerify(tool);
													setVerifyToolModalOpen(true);
												}}
											>
												Verify
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<>
								<table className="w-full table unverifiedTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Image</th>
											<th className="p-3 text-left">URL</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Category</th>
											<th className="p-3 text-left">Sub-Category</th>
											<th className="p-3 text-left">Pricing</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Tool</th>
											<th className="p-3 text-left">Delete Tool</th>
											<th className="p-3 text-left">Verify</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Verified Tools Table */}
				{activeTable == "verifiedTable" && (
					<div className="tab-pane fade" id="tabs-verified-tools" role="tabpanel" aria-labelledby="tabs-verified-tools-table">
						{verifiedTools && verifiedTools.length !== 0 ? (
							<table className="w-full table verifiedTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Image</th>
										<th className="p-3 text-left text-light-200">URL</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Category</th>
										<th className="p-3 text-left text-light-200">Sub-Category</th>
										<th className="p-3 text-left text-light-200">Pricing</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Tool</th>
										<th className="p-3 text-left text-light-200">Delete Tool</th>
										<th className="p-3 text-left text-light-200">Unverify</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{verifiedTools.map((tool, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(tool.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												{tool.verified && <Image src={verified_tick} width={14} height={14} alt="verified_tick" />}
												{tool.name}
											</td>
											<td className="p-3">
												<Image src={tool.image} alt={tool.name} width={80} height={45} className="rounded" />
											</td>
											<td className="p-3">{tool.url}</td>
											<td className="p-3">{tool.oneLiner}</td>
											<td className="p-3">{tool.category.name}</td>
											<td className="p-3">{tool.subCategory.name}</td>
											<td className="p-3">{tool.pricing.name}</td>
											<td className="p-3">
												<div className="flex gap-x-2">
													{tool.twitter && (
														<Link
															href={tool.twitter}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-twitter"></i>
														</Link>
													)}
													{tool.instagram && (
														<Link
															href={tool.instagram}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-instagram"></i>
														</Link>
													)}
													{tool.linkedin && (
														<Link
															href={tool.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-linkedin"></i>
														</Link>
													)}
													{tool.youtube && (
														<Link
															href={tool.youtube}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
														>
															<i className="text-lg fa-brands fa-youtube"></i>
														</Link>
													)}
												</div>
											</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													router.push(`/admin/tools/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setToolToDelete(tool);
													setDeleteToolModalOpen(true);
												}}
											>
												Delete
											</td>
											<td
												className="p-3 bg-gray-400 hover:bg-gray-500 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setToolToUnverify(tool);
													setUnverifyToolModalOpen(true);
												}}
											>
												Unverify
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<>
								<table className="w-full table verifiedTools-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Image</th>
											<th className="p-3 text-left">URL</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Category</th>
											<th className="p-3 text-left">Sub-Category</th>
											<th className="p-3 text-left">Pricing</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Tool</th>
											<th className="p-3 text-left">Delete Tool</th>
											<th className="p-3 text-left">Unverify</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}
			</div>

			<DeleteToolConfirmModal isOpen={isDeleteToolModalOpen} setOpen={setDeleteToolModalOpen} toolToDelete={toolToDelete} />
			<VerifyToolConfirmModal isOpen={isVerifyToolModalOpen} setOpen={setVerifyToolModalOpen} toolToVerify={toolToVerify} />
			<UnverifyToolConfirmModal isOpen={isUnverifyToolModalOpen} setOpen={setUnverifyToolModalOpen} toolToUnverify={toolToUnverify} />
		</div>
	);
}
