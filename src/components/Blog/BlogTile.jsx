import Image from "node_modules/next/image";
import Link from "node_modules/next/link";

const BlogTile = (posts) => {
  return (
    <Link href={`/blogs/${posts?.slug}`}>
      <div className="border-solid border-2   flex flex-col justify-center items-center rounded-sm bg-slate-50 shadow-lg my-5">
        <Image
          className="w-full h-full object-fit"
          src={posts?.featuredImage?.node?.mediaItemUrl}
          width={300}
          height={300}
        />
        <h1 className="text-lg font-semibold my-4 text-center">
          {posts.title}
        </h1>
      </div>
    </Link>
  );
};

export default BlogTile;
