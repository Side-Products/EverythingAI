import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Cta({ partner }) {
	return (
		<div className="flex flex-col items-center justify-center text-center bg-gradient-tertiary-r sm:py-16 sm:px-16 lg:px-32 px-6 py-8 rounded-3xl">
			<span className="text-4xl sm:text-6xl font-bold tracking-[-2px] sm:tracking-[-2.5px] text-light-100">
				Check out {partner?.name}&apos;s special offer ⚡️
			</span>
			<p className="mt-10 text-light-300 text-xl sm:text-3xl tracking-[-0.5px]">
				{partner?.offerOneLiner ?? "Supercharge your workflows and accelerate your productivity"}!
			</p>

			<div className="w-3/4 sm:w-1/3 md:w-1/3 xl:w-1/4 mt-12">
				<Link
					href={partner?.utmLink || partner?.url || partner?.cta || "https://everythingai.club"}
					target="_blank"
					rel="noopener noreferrer"
					className="h-full"
				>
					<Button type="button" variant={"classic"} rounded={true} classes="text-lg rounded-full px-8 py-3 shadow-2xl relative group/link-btn">
						Try it out now
						<i className="ml-3 text-base fa-solid fa-arrow-up-right-from-square text-dark-200 group-hover/link-btn:text-primary-500"></i>
					</Button>
				</Link>
			</div>
		</div>
	);
}
