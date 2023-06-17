import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/userActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import UpdateUserModal from "./Modals/User/UpdateUserModal";
import DeleteUserConfirmModal from "./Modals/User/DeleteUserConfirmModal";

export default function AllUsers() {
	const dispatch = useDispatch();
	const { users, usersCount, admins, maintainerUsers, error, loading } = useSelector((state) => state.allUsers);

	const { setSuccess, setError } = useContext(StatusContext);

	const [activeTable, setActiveTable] = useState("allUsersTable");
	const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useState(false);
	const [isDeleteUserModalOpen, setDeleteUserModalOpen] = useState(false);
	const [userToUpdate, setUserToUpdate] = useState("");
	const [userToDelete, setUserToDelete] = useState("");

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

	const copyToClipboard = async (event) => {
		const reqStr = event.target.parentNode.querySelector("span").dataset.info;
		await navigator.clipboard.writeText(reqStr);
		setSuccess((prevState) => ({
			...prevState,
			title: "Text copied",
			message: "Text has been copied to clipboard",
			showSuccessBox: true,
		}));
	};

	return loading ? (
		<Loader />
	) : users && users.length > 0 ? (
		<div className="grid w-full mt-10 overflow-scroll">
			<div className="flex justify-between w-full">
				<ul className="items-start nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tables" role="tablist">
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("allUsersTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "allUsersTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-users-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-users"
							role="tab"
							aria-controls="tabs-all-users"
							aria-selected="true"
						>
							All Users
						</span>
					</li>
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("adminsTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "adminsTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-admins-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-admins"
							role="tab"
							aria-controls="tabs-admins"
							aria-selected="false"
						>
							Admins
						</span>
					</li>
					<li className="nav-item" role="presentation" onClick={() => setActiveTable("maintainerUsersTable")}>
						<span
							className={
								"cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-primary-200 transition duration-300 rounded-t " +
								(activeTable == "maintainerUsersTable" && "text-primary-500 bg-primary-100")
							}
							id="tabs-all-access-users-table"
							data-bs-toggle="pill"
							data-bs-target="#tabs-all-access-users"
							role="tab"
							aria-controls="tabs-all-access-users"
							aria-selected="false"
						>
							Maintainers
						</span>
					</li>
				</ul>

				<div className="font-semibold text-base text-dark-700">Total Count: {usersCount}</div>
			</div>

			<div className="tab-content" id="tabs-tabContent3">
				{/* All Users Table */}
				{activeTable == "allUsersTable" && (
					<div className="tab-pane fade show active" id="tabs-all-users" role="tabpanel" aria-labelledby="tabs-all-users-details">
						{users.length !== 0 ? (
							<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">User ID</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Email</th>
										<th className="p-3 text-left text-light-200">Role</th>
										<th className="p-3 text-left text-light-200">Edit User</th>
										<th className="p-3 text-left text-light-200">Delete User</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{users.map((user, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(user.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												<span data-info={user._id}>{user._id}</span>
											</td>
											<td className="p-3">{user.name}</td>
											<td className="p-3">
												<span data-info={user.email}>{user.email}</span>{" "}
												<i className="far fa-copy ml-1 cursor-pointer" onClick={copyToClipboard}></i>
											</td>
											<td className="p-3">{user.role}</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToUpdate(user);
													setUpdateUserModalOpen(true);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToDelete(user);
													setDeleteUserModalOpen(true);
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
								<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">User ID</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Email</th>
											<th className="p-3 text-left">Role</th>
											<th className="p-3 text-left">Edit User</th>
											<th className="p-3 text-left">Delete User</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Admins Table */}
				{activeTable == "adminsTable" && (
					<div className="tab-pane fade" id="tabs-admins" role="tabpanel" aria-labelledby="tabs-admins-table">
						{admins.length !== 0 ? (
							<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">User ID</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Email</th>
										<th className="p-3 text-left text-light-200">Role</th>
										<th className="p-3 text-left text-light-200">Edit User</th>
										<th className="p-3 text-left text-light-200">Delete User</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{admins.map((admin, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(admin.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												<span data-info={admin._id}>{admin._id}</span>
											</td>
											<td className="p-3">{admin.name}</td>
											<td className="p-3">
												<span data-info={admin.email}>{admin.email}</span>{" "}
												<i className="far fa-copy ml-1 cursor-pointer" onClick={copyToClipboard}></i>
											</td>
											<td className="p-3">{admin.role}</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToUpdate(admin);
													setUpdateUserModalOpen(true);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToDelete(admin);
													setDeleteUserModalOpen(true);
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
								<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">User ID</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Email</th>
											<th className="p-3 text-left">Role</th>
											<th className="p-3 text-left">Edit User</th>
											<th className="p-3 text-left">Delete User</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}

				{/* Maintainers Table */}
				{activeTable == "maintainerUsersTable" && (
					<div className="tab-pane fade" id="tabs-all-access-users" role="tabpanel" aria-labelledby="tabs-all-access-users-table">
						{maintainerUsers.length !== 0 ? (
							<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-dark-800">
									<tr>
										<th className="p-3 text-left pl-6 text-light-200">Created At (UTC)</th>
										<th className="p-3 text-left text-light-200">User ID</th>
										<th className="p-3 text-left text-light-200">Name</th>
										<th className="p-3 text-left text-light-200">Email</th>
										<th className="p-3 text-left text-light-200">Role</th>
										<th className="p-3 text-left text-light-200">Edit User</th>
										<th className="p-3 text-left text-light-200">Delete User</th>
									</tr>
								</thead>

								<tbody className="text-gray-900">
									{maintainerUsers.map((maintainerUser, index) => (
										<tr className="bg-light-100 text-dark-700" key={index}>
											<td className="p-3">
												<span className="flex align-items-center">
													<span className="ml-3">
														<span className="">{getTimestamp(maintainerUser.createdAt).slice(0, 19)}</span>
													</span>
												</span>
											</td>
											<td className="p-3">
												<span data-info={maintainerUser._id}>{maintainerUser._id}</span>
											</td>
											<td className="p-3">{maintainerUser.name}</td>
											<td className="p-3">
												<span data-info={maintainerUser.email}>{maintainerUser.email}</span>{" "}
												<i className="far fa-copy ml-1 cursor-pointer" onClick={copyToClipboard}></i>
											</td>
											<td className="p-3">{maintainerUser.role}</td>
											<td
												className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToUpdate(maintainerUser);
													setUpdateUserModalOpen(true);
												}}
											>
												Edit
											</td>
											<td
												className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
												onClick={(e) => {
													e.preventDefault();
													setUserToDelete(maintainerUser);
													setDeleteUserModalOpen(true);
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
								<table className="w-full table allUsers-table table-auto text-gray-400 border-separate space-y-6 text-sm">
									<thead className="bg-zinc-900 text-zinc-50">
										<tr>
											<th className="p-3">Created At (UTC)</th>
											<th className="p-3 text-left">User ID</th>
											<th className="p-3 text-left">Name</th>
											<th className="p-3 text-left">Email</th>
											<th className="p-3 text-left">Role</th>
											<th className="p-3 text-left">Edit User</th>
											<th className="p-3 text-left">Delete User</th>
										</tr>
									</thead>
								</table>

								<NoDataTableRow />
							</>
						)}
					</div>
				)}
			</div>

			<UpdateUserModal isOpen={isUpdateUserModalOpen} setOpen={setUpdateUserModalOpen} userToUpdate={userToUpdate} />
			<DeleteUserConfirmModal isOpen={isDeleteUserModalOpen} setOpen={setDeleteUserModalOpen} userToDelete={userToDelete} />
		</div>
	) : (
		<div className="mt-20 text-light-500">No users yet</div>
	);
}
