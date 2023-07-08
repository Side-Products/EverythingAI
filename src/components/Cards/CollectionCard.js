import { useRouter } from "next/router";
import Image from "next/image";

export default function CollectionCard({ collection }) {
	const router = useRouter();

	return (
		<div className="w-full text-center group transition duration-300 cursor-pointer bg-light-100 rounded-xl shadow-md hover:shadow-2xl">
			<div className="w-full h-full flex flex-col justify-between p-4" onClick={() => router.push(`/collections/${collection.slug}`)}>
				<div>
					<div className="relative w-full overflow-hidden h-44 rounded-t-xl">
						{collection?.image && (
							<Image
								src={collection?.image}
								width={533}
								height={300}
								alt="collection image"
								className="duration-500 group-hover:scale-110 group-hover:duration-500 rounded-t-xl"
							/>
						)}
					</div>
					<div className="w-full bg-gradient-to-tr from-gray-800 to-gray-900 rounded-b-xl p-6">
						<p className="text-lg font-semibold text-light-100">{collection.name}</p>
					</div>
				</div>

				<p className="px-4 mt-6">{collection.description}</p>

				<span className="mt-8 text-base font-semibold text-primary-700 group-hover:underline">See collection</span>
			</div>
		</div>
	);
}
