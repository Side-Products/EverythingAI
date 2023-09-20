import { product_name } from "@/config/constants";
import StarRating from "../ui/StarRating";
import Link from "node_modules/next/link";
import Image from "node_modules/next/image";

export default function Review({ reviews }) {
  console.log({ reviews });
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="text-2xl font-semibold text-center">Reviews</div>
      <div className="flex flex-col md:flex-row w-full  justify-content items-center">
        {reviews?.productHunt && (
          <div className="flex flex-col p-3 items-center w-1/3">
            <Link href={reviews?.productHunt?.link} target="_blank">
              <div className="object-contain h-20 w-60">
                <Image src="/ui/product_hunt.png" width={300} height={300} />
              </div>
            </Link>
            <StarRating rating={reviews?.productHunt?.stars} />
            {/* Single review */}
            {reviews?.productHunt?.stars}/5
          </div>
        )}
        {reviews?.G2 && (
          <div className="flex flex-col p-3 items-center w-1/3">
            <Link href={reviews?.G2?.link} target="_blank">
              <div className="flex justify-center object-contain h-20 items-center w-20">
                <Image
                  src="/ui/g2.png"
                  height={100}
                  width={50}
                  loading="lazy"
                />
              </div>
            </Link>
            <StarRating rating={reviews?.G2?.stars} />
            {/* Single review */}
            {reviews?.G2?.stars}/5
          </div>
        )}
        {reviews?.trustPilot && (
          <div className="flex flex-col p-3 items-center w-1/3">
            <Link href={reviews?.trustPilot?.link} target="_blank">
              <div className="flex justify-center object-contain h-20 items-center w-30">
                <Image
                  src="/ui/trustpilot.png"
                  height={200}
                  width={200}
                  loading="lazy"
                />
              </div>
            </Link>
            <StarRating rating={reviews?.trustPilot?.stars} />
            {/* Single review */}
            {reviews?.trustPilot?.stars}/5
          </div>
        )}
      </div>
    </div>
  );
}
