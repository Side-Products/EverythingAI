import Image from "node_modules/next/image";
import Link from "node_modules/next/link";

const BlogTile = ({ post }) => {
  return (
    <Link href={`/blogs${post.uri}`}>
      <div className="border-solid border-2   flex flex-col justify-center items-center rounded-sm bg-slate-50 shadow-lg my-5">
        <Image
          className="w-full h-full object-fit"
          src={post?.featuredImage?.node?.mediaItemUrl}
          width={300}
          height={300}
        />
        <h1 className="text-lg font-semibold my-4 text-center">{post.title}</h1>
      </div>
    </Link>
  );
};

export default BlogTile;
