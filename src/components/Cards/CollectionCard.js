import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({ collection, toolPage = false }) {
  return (
    <div className="w-full text-center group transition duration-300 cursor-pointer bg-light-100 rounded-xl shadow-md hover:shadow-2xl">
      <Link
        href={`/collections/${collection?.slug}`}
        className="w-full h-full flex flex-col justify-between p-4"
      >
        {toolPage ? (
          <>
            <div className="relative">
              <div className="relative w-full overflow-hidden h-40 rounded-xl">
                {collection?.image && (
                  <Image
                    src={collection?.image}
                    width={453}
                    height={255}
                    alt="collection image"
                    className="duration-500 group-hover:scale-110 group-hover:duration-500 rounded-xl hover:rounded-xl"
                  />
                )}
                <div className="bottom-0 w-full absolute backdrop-blur-2xl rounded-b-xl hover:rounded-b-xl p-4">
                  <p className="text-sm font-semibold text-light-100">
                    {collection?.name}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
                <p className="text-lg font-semibold text-light-100">
                  {collection?.name}
                </p>
              </div>
            </div>

            <p className="px-4 mt-6">{collection?.description}</p>

            <span className="mt-8 text-base font-semibold text-primary-700 group-hover:underline">
              See collection
            </span>
          </>
        )}
      </Link>
    </div>
  );
}
