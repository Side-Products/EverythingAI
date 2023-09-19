import Image from "next/image";
import Link from "next/link";
import MarqueeText from "@/components/ui/MarqueeText";

export default function CategoryCard({ category }) {
  return (
    <div className="group transition duration-300 cursor-pointer max-w-fit bg-light-100 rounded-xl shadow-md hover:shadow-2xl">
      <Link
        href={`/categories/${category.name.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl">
          <Image
            src={category.image}
            width={533}
            height={300}
            alt="tool image"
            className="group-hover:scale-110 group-hover:duration-500 duration-500 rounded-t-xl"
          />
        </div>

        <div className="p-5">
          {category.name.length < 20 ? (
            <p className="text-lg font-semibold">{category.name}</p>
          ) : (
            <MarqueeText
              text={category.name}
              classes={"text-lg font-semibold"}
              marqueeWidth={"w-[250px]"}
            />
          )}
        </div>
      </Link>
    </div>
  );
}
