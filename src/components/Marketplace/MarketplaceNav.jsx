import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { ToolContext } from "@/store/ToolContextProvider";

export default function MarketplaceNav({ currentSelection, setCurrentSelection }) {
	const router = useRouter();

	useEffect(() => {
		if (router.pathname == "/tools") {
			setCurrentSelection(1);
		} else if (router.pathname.startsWith("/tools/trending")) {
			setCurrentSelection(2);
		} else if (router.pathname.startsWith("/tools/new-tools")) {
			setCurrentSelection(3);
		}
	}, [router.pathname, setCurrentSelection]);

	const [searchText, setSearchText] = useState("");
	const { setFilteredTools } = useContext(ToolContext);

	return (
		<div className="flex flex-col items-center justify-center w-full h-[400px] bg-dark-900 text-light-100">
			<h3 className="lg:block hidden mt-24 text-3xl font-medium text-light-100 md:text-5xl">
				<span className="font-semibold text-primary-400">Tools Marketplace</span>
			</h3>
			<div className="lg:hidden block flex justify-center w-full mt-10 mb-4">
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						console.log("searchText", searchText);
						const queryParams = {
							search: searchText,
						};
						// Merge the new query parameters with the existing ones
						const updatedQuery = { ...router.query, ...queryParams };
						// Convert the updated query object to a search string
						const search = new URLSearchParams(updatedQuery).toString();
						// Push the updated search string to the router
						router.push(`/tools?${search}`, undefined, { shallow: true });
						const { data } = await axios.get(`/api/tools`, {
							params: updatedQuery,
						});
						setFilteredTools(data?.tools);
					}}
					className="relative flex justify-center w-10/12 bg-transparent md:w-1/2"
				>
					<input
						className="w-full px-8 py-2 transition duration-200 bg-transparent border rounded-full text-start border-zinc-200 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
						type="text"
						placeholder="Search..."
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						required
					/>
					<button
						type="submit"
						className="absolute top-1/2 right-[4px] transform -translate-y-1/2 flex items-center justify-center p-2 transition duration-200 rounded-full cursor-pointer w-[32px] h-[32px] bg-search-100 hover:bg-dark-800 hover:text-light-100 text-dark-200"
					>
						<i className="fas fa-search"></i>
					</button>
				</form>
			</div>
			<p className="px-8 mt-4 text-xs text-center sm:my-2 sm:text-sm">Discover AI tools that fit like a glove: handpicked for your industry and goals.</p>
			<ul className="flex mt-8 space-x-6 text-sm font-semibold md:space-x-12 md:text-base">
				<li className={(currentSelection === 1 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link href="/tools" className={(currentSelection === 1 ? "bg-zinc-800" : "bg-zinc-900") + " md:px-5 py-2 px-4 md:py-3 rounded-lg"}>
						Explore
					</Link>
				</li>

				<li className={(currentSelection === 2 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link href="/tools/trending" className={(currentSelection === 2 ? "bg-zinc-800" : "bg-zinc-900") + " md:px-5 md:py-3 py-2 px-4 rounded-lg"}>
						Trending
					</Link>
				</li>

				<li className={(currentSelection === 3 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link
						href="/tools/new-tools"
						className={(currentSelection === 3 ? "bg-zinc-800" : "bg-zinc-900") + " md:px-5 md:py-3 py-2 px-4 rounded-lg"}
					>
						New Tools
					</Link>
				</li>
			</ul>
		</div>
	);
}
