import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { clearErrors } from "@/redux/actions/genAIPartnerActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import verified_tick from "/public/verified_tick.svg";
import Pager from "@/components/ui/Pagination/Pager";
import { adminGetAllGenAIPartners, adminGetAllVerifiedGenAIPartners, adminGetAllUnverifiedGenAIPartners } from "@/redux/actions/genAIPartnerActions";
import DeletePartnerConfirmModal from "./Modals/Partner/DeletePartnerConfirmModal";
import VerifyPartnerConfirmModal from "./Modals/Partner/VerifyPartnerConfirmModal";
import UnverifyPartnerConfirmModal from "./Modals/Partner/UnverifyPartnerConfirmModal";

export default function AllGenAIPartners({
	genAIPartners,
	verifiedGenAIPartners,
	unverifiedGenAIPartners,
	genAIPartnersCount,
	error,
	loading,
	resultsPerPage,
	filteredGenAIPartnersCount,
}) {
	const router = useRouter();
	const dispatch = useDispatch();

	const [activeTable, setActiveTable] = useState("allPartnersTable");
	const [isDeletePartnerModalOpen, setDeletePartnerModalOpen] = useState(false);
	const [isVerifyPartnerModalOpen, setVerifyPartnerModalOpen] = useState(false);
	const [isUnverifyPartnerModalOpen, setUnverifyPartnerModalOpen] = useState(false);
	const [partnerToDelete, setPartnerToDelete] = useState("");
	const [partnerToVerify, setPartnerToVerify] = useState("");
	const [partnerToUnverify, setPartnerToUnverify] = useState("");

	useEffect(() => {
		if (router.pathname.includes("admin/gen-ai-partners/unverified")) {
			setActiveTable("unverifiedTable");
		} else if (router.pathname.includes("admin/gen-ai-partners/verified")) {
			setActiveTable("verifiedTable");
		} else {
			setActiveTable("allPartnersTable");
		}
	}, [router.pathname]);

	const { setError } = useContext(StatusContext);
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

	// Pagination
	let { search, page = 1 } = router.query;
	page = Number(page);

	useEffect(() => {
		if (router.pathname && page) {
			if (router.pathname.includes("admin/gen-ai-partners/unverified")) {
				dispatch(adminGetAllUnverifiedGenAIPartners(router.query.page || 1));
			} else if (router.pathname.includes("admin/gen-ai-partners/verified")) {
				dispatch(adminGetAllVerifiedGenAIPartners(router.query.page || 1));
			} else {
				dispatch(adminGetAllGenAIPartners(router.query.page || 1));
			}
		}
	}, [dispatch, page]);

	let queryParams;
	if (typeof window !== "undefined") {
		queryParams = new URLSearchParams(window.location.search);
	}

	const handlePagination = (pageNumber) => {
		if (queryParams.has("page")) {
			queryParams.set("page", pageNumber + 1);
		} else {
			queryParams.append("page", pageNumber + 1);
		}

		if (router.pathname.includes("admin/gen-ai-partners/unverified")) {
			router.replace({
				search: queryParams.toString(),
				pathname: `/admin/gen-ai-partners/unverified`,
			});
		} else if (router.pathname.includes("admin/gen-ai-partners/verified")) {
			router.replace({
				search: queryParams.toString(),
				pathname: `/admin/gen-ai-partners/verified`,
			});
		} else {
			router.replace({
				search: queryParams.toString(),
				pathname: `/admin/gen-ai-partners`,
			});
		}
	};

	let count = genAIPartnersCount;
	if (search) {
		count = filteredGenAIPartnersCount;
	}

	return loading ? (
		<Loader />
	) : (
		<div className="grid w-full mt-10 overflow-scroll">
			<div className="flex justify-between w-full">
				<ul className="items-start nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tables" role="tablist">
					<li className="nav-item" role="presentation" onClick={() => router.push("/admin/gen-ai-partners")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "allPartnersTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-tools-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-tools"
							role="tab"
							aria-controls="tabs-all-tools"
							aria-selected="true"
						>
							All Partners
						</span>
					</li>
					<li className="nav-item" role="presentation" onClick={() => router.push("/admin/gen-ai-partners/unverified")}>
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
					<li className="nav-item" role="presentation" onClick={() => router.push("/admin/gen-ai-partners/verified")}>
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

				<div className="font-semibold text-base text-dark-700">Total Count: {genAIPartnersCount}</div>
			</div>

			<div className="w-full flex justify-end">
				{resultsPerPage < genAIPartnersCount && (
					<Pager activePage={page} onPageChange={handlePagination} itemsCountPerPage={resultsPerPage} totalPagesCount={count} />
				)}
			</div>

			<div className="tab-content" id="tabs-tabContent3">
				{/* All Partners Table */}
				{activeTable == "allPartnersTable" && (
					<div className="tab-pane fade show active" id="tabs-all-tools" role="tabpanel" aria-labelledby="tabs-all-tools-details">
						{genAIPartners && genAIPartners.length !== 0 ? (
							<table className="w-full table allGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Logo</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Partner</th>
										<th className="p-3 text-left text-light-200">Delete Partner</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{genAIPartners.map((tool, index) => (
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
												{tool.logo ? <Image src={tool.logo} alt={tool.name} width={80} height={45} className="rounded" /> : "-"}
											</td>

											<td className="p-3">{tool.oneLiner}</td>
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
													router.push(`/admin/gen-ai-partners/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setPartnerToDelete(tool);
													setDeletePartnerModalOpen(true);
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
								<table className="w-full table allGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Logo</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Partner</th>
											<th className="p-3 text-left">Delete Partner</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Unverified Partners Table */}
				{activeTable == "unverifiedTable" && (
					<div className="tab-pane fade" id="tabs-unverified" role="tabpanel" aria-labelledby="tabs-unverified-table">
						{unverifiedGenAIPartners && unverifiedGenAIPartners.length !== 0 ? (
							<table className="w-full table unverifiedGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Logo</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Partner</th>
										<th className="p-3 text-left text-light-200">Delete Partner</th>
										<th className="p-3 text-left text-light-200">Verify</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{unverifiedGenAIPartners.map((tool, index) => (
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
												{tool.logo ? <Image src={tool.logo} alt={tool.name} width={80} height={45} className="rounded" /> : "-"}
											</td>
											<td className="p-3">{tool.oneLiner}</td>
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
													router.push(`/admin/gen-ai-partners/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setPartnerToDelete(tool);
													setDeletePartnerModalOpen(true);
												}}
											>
												Delete
											</td>
											<td
												className="p-3 bg-success-400 hover:bg-success-500 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setPartnerToVerify(tool);
													setVerifyPartnerModalOpen(true);
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
								<table className="w-full table unverifiedGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Logo</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Partner</th>
											<th className="p-3 text-left">Delete Partner</th>
											<th className="p-3 text-left">Verify</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Verified Partners Table */}
				{activeTable == "verifiedTable" && (
					<div className="tab-pane fade" id="tabs-verified-tools" role="tabpanel" aria-labelledby="tabs-verified-tools-table">
						{verifiedGenAIPartners && verifiedGenAIPartners.length !== 0 ? (
							<table className="w-full table verifiedGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Logo</th>
										<th className="p-3 text-left text-light-200">One-Liner</th>
										<th className="p-3 text-left text-light-200">Socials</th>
										<th className="p-3 text-left text-light-200">Edit Partner</th>
										<th className="p-3 text-left text-light-200">Unverify</th>
										<th className="p-3 text-left text-light-200">Delete Partner</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{verifiedGenAIPartners.map((tool, index) => (
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
												{tool.logo ? <Image src={tool.logo} alt={tool.name} width={80} height={45} className="rounded" /> : "-"}
											</td>
											<td className="p-3">{tool.oneLiner}</td>
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
													router.push(`/admin/gen-ai-partners/edit/${tool._id}`);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-gray-400 hover:bg-gray-500 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setPartnerToUnverify(tool);
													setUnverifyPartnerModalOpen(true);
												}}
											>
												Unverify
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setPartnerToDelete(tool);
													setDeletePartnerModalOpen(true);
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
								<table className="w-full table verifiedGenAIPartners-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Logo</th>
											<th className="p-3 text-left">One-Liner</th>
											<th className="p-3 text-left">Socials</th>
											<th className="p-3 text-left">Edit Partner</th>
											<th className="p-3 text-left">Unverify</th>
											<th className="p-3 text-left">Delete Partner</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}
			</div>

			<DeletePartnerConfirmModal isOpen={isDeletePartnerModalOpen} setOpen={setDeletePartnerModalOpen} partnerToDelete={partnerToDelete} />
			<VerifyPartnerConfirmModal isOpen={isVerifyPartnerModalOpen} setOpen={setVerifyPartnerModalOpen} partnerToVerify={partnerToVerify} />
			<UnverifyPartnerConfirmModal isOpen={isUnverifyPartnerModalOpen} setOpen={setUnverifyPartnerModalOpen} partnerToUnverify={partnerToUnverify} />
		</div>
	);
}
