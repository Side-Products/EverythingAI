import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

	return (
		<div className="flex flex-col items-center justify-center w-full h-[360px] bg-dark-900 text-light-100">
			<h3 className="text-light-100 mt-16 text-5xl font-medium">
				<span className="font-semibold text-primary-400">Tools Marketplace</span>
			</h3>
			<p className="sm:my-2 mt-4 sm:text-sm text-xs text-center px-8">Discover AI tools that fit like a glove: handpicked for your industry and goals.</p>
			<ul className="flex mt-8 space-x-12 font-semibold">
				<li className={(currentSelection === 1 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link href="/tools" className={(currentSelection === 1 ? "bg-zinc-800" : "bg-zinc-900") + " px-5 py-3 rounded-lg"}>
						Explore
					</Link>
				</li>

				<li className={(currentSelection === 2 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link href="/tools/trending" className={(currentSelection === 2 ? "bg-zinc-800" : "bg-zinc-900") + " px-5 py-3 rounded-lg"}>
						Trending
					</Link>
				</li>

				<li className={(currentSelection === 3 ? "text-light-100" : "text-zinc-400 hover:text-gray-300 ") + " cursor-pointer"}>
					<Link href="/tools/new-tools" className={(currentSelection === 3 ? "bg-zinc-800" : "bg-zinc-900") + " px-5 py-3 rounded-lg"}>
						New Tools
					</Link>
				</li>
			</ul>
		</div>
	);
}
