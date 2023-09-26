import { product_name } from "@/config/constants";
import StarRating from "../ui/StarRating";
import Link from "node_modules/next/link";
import Image from "node_modules/next/image";

export default function Review({ reviews }) {
  console.log({ reviews });
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="text-2xl font-semibold text-center">Ratings</div>
      <div className="flex flex-col md:flex-row w-full  justify-content items-center">
        {reviews?.productHunt?.stars && (
          <div className="flex flex-col md:p-3 items-center w-1/3">
            <div className="object-contain h-20 w-60 ">
              <Image src="/ui/product_hunt.png" width={300} height={300} />
            </div>
            <StarRating rating={reviews?.productHunt?.stars} />
            {/* Single review */}
            {reviews?.productHunt?.stars}/5
            {reviews?.productHunt?.link && (
              <Link href={reviews?.productHunt?.link} target="_blank">
                <div className="font-bold underline line-clamp-1">
                  Product Hunt
                  <i class="ml-2 fas fa-external-link-alt" />
                </div>
              </Link>
            )}
          </div>
        )}
        {reviews?.G2.stars && (
          <div className="flex flex-col md:p-3 items-center  w-1/3">
            <div className="flex justify-center object-contain relative top-2 h-20 items-center w-20">
              <Image src="/ui/g2.png" height={100} width={50} loading="lazy" />
            </div>
            <StarRating rating={reviews?.G2?.stars} />
            {/* Single review */}
            {reviews?.G2?.stars}/5
            {reviews?.G2?.link && (
              <Link href={reviews?.G2?.link} target="_blank">
                <div className="font-bold underline">
                  G2
                  <i class="ml-2 fas fa-external-link-alt" />
                </div>
              </Link>
            )}
          </div>
        )}
        {reviews?.trustPilot.stars && (
          <div className="flex flex-col md:p-3 items-center w-1/3">
            <div className="flex justify-center object-contain relative top-2 h-20 items-center w-30">
              <Image
                src="/ui/trustpilot.png"
                height={200}
                width={200}
                loading="lazy"
              />
            </div>
            <StarRating rating={reviews?.trustPilot?.stars} />
            {/* Single review */}
            {reviews?.trustPilot?.stars}/5
            {reviews?.trustPilot?.link && (
              <Link href={reviews?.trustPilot?.link} target="_blank">
                <div className="font-bold underline ">
                  Trustpilot
                  <i class="ml-2 fas fa-external-link-alt" />
                </div>
              </Link>
            )}
          </div>
        )}
        {reviews?.everythingAI.stars && (
          <div className="flex flex-col p-3 items-center w-1/3">
            <div className="flex justify-center object-contain h-20 items-center w-30">
              <Image src="/logo.png" height={200} width={200} loading="lazy" />
            </div>
            <div className="relative flex flex-col justify-center items-center bottom-4">
              <StarRating rating={reviews?.everythingAI?.stars} />
              {/* Single review */}
              {reviews?.everythingAI?.stars}/5
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
