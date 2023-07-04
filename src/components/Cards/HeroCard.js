import Image from "next/image";
import Link from "next/link";

export default function HeroCard({ tool }) {
	return (
		<div className={"cursor-pointer relative aspect-square w-full transition-transform group overflow-hidden rounded-xl"}>
			<Link href={`/tools/${tool.slug}`}>
				<Image className="duration-500 group-hover:scale-110" src={tool.logo} alt="promo card" fill />
				<div className="relative w-full h-full bg-gradient-to-t from-black/60 via-black/20 to-black/5">
					<div className="absolute bottom-0 w-full p-5 text-white">
						<h1 className="text-2xl font-bold">{tool.name}</h1>
						<div className="mt-1 flex justify-between w-full">
							<p>{tool.pricing.name}</p>
							<p>{tool.category.name}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
