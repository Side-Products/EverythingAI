import { useRouter } from "next/router";

export default function CollectionCard({ collection }) {
	const router = useRouter();

	return (
		<div className="w-full text-center group transition duration-300 cursor-pointer bg-light-100 rounded-xl shadow-md hover:shadow-2xl">
			<div className="w-full h-full flex flex-col justify-between p-4" onClick={() => router.push(`/collections/${collection.slug}`)}>
				<div className="w-full bg-gradient-tertiary-tr rounded-lg p-6">
					<p className="text-lg font-semibold text-light-100">{collection.name}</p>
				</div>

				<p className="px-4 mt-10">{collection.description}</p>

				<span className="mt-8 text-base font-semibold text-primary-700 group-hover:underline">See collection</span>
			</div>
		</div>
	);
}
