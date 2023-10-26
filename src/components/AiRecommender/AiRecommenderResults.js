import ToolCard from "@/components/Cards/ToolCard";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import Accordion from "../Tools/Accordion";
import { getPricingChipClass } from "@/utils/Helpers";
import ToolPill from "../Tools/ToolUtils/ToolPill";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";

const AiRecommenderResults = ({ recommendation }) => {
  const ContentToList = ({ content }) => {
    // Split the content into separate lines
    const lines = content.split("\n").filter((line) => line.trim() !== "");

    return (
      <ul className="list-disc flex flex-col space-y-4">
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div>
        The results here are unbiased and created based on your use case.
      </div>
      <div className="mt-8 text-2xl font-semibold">Compare</div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-8 font-bold">
        <div className="col-span-2"></div>
        <div className="col-span-3">Tool 1 (Recommended)</div>
        <div className="col-span-3">Tool 2</div>
        <div className="col-span-3">Tool 3</div>
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6 bg-primary-100 rounded-lg py-3">
        <div className="col-span-2 font-bold ml-5">Tool Name</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            {tool.name}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2"></div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              <div className="w-11/12">
                <ToolCard tool={tool} />
              </div>
            </div>
          ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-10 bg-indigo-100 rounded-lg py-3">
        <div className="col-span-2 font-bold ml-5">Popularity</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3"></div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-center mt-6">
        <div className="col-span-2 font-medium text-sm">
          No. of times tool visited by people on EverythingAI
        </div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              {tool.timesVisited ? tool.timesVisited : <>-</>}
            </div>
          ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-12 bg-success-100 rounded-lg py-3">
        <div className="col-span-2 font-bold ml-5">Trust</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3"></div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          <Image src="/ui/g2.png" height={100} width={30} loading="lazy" />
          G2 Reviews
        </div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            {tool.reviews?.G2?.stars ? (
              <>
                <StarRating rating={tool.reviews?.G2?.stars} size={"small"} />
                <div className="flex gap-x-8 mt-2">
                  {tool.reviews?.G2?.stars}/5
                  {tool.reviews?.G2?.link && (
                    <Link href={tool.reviews?.G2?.link} target="_blank">
                      <div className="font-bold underline">
                        G2
                        <i className="ml-2 fas fa-external-link-alt" />
                      </div>
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <>-</>
            )}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2 flex items-end gap-2">
          <Image
            src="/ui/trustpilot.png"
            height={100}
            width={120}
            loading="lazy"
          />
        </div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            {tool.reviews?.trustPilot?.stars ? (
              <>
                <StarRating
                  rating={tool.reviews?.trustPilot?.stars}
                  size={"small"}
                />
                <div className="flex gap-x-8 mt-2">
                  {tool.reviews?.trustPilot?.stars}/5
                  {tool.reviews?.trustPilot?.link && (
                    <Link href={tool.reviews?.trustPilot?.link} target="_blank">
                      <div className="font-bold underline">
                        Trustpilot
                        <i className="ml-2 fas fa-external-link-alt" />
                      </div>
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <>-</>
            )}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2 flex items-end gap-2">
          <Image src="/logo.png" height={100} width={120} loading="lazy" />
        </div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            {tool.reviews?.everythingAI?.stars ? (
              <>
                <StarRating
                  rating={tool.reviews?.everythingAI?.stars}
                  size={"small"}
                />
                <div className="flex gap-x-8 mt-2">
                  {tool.reviews?.everythingAI?.stars}/5
                </div>
              </>
            ) : (
              <>-</>
            )}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          Product Hunt Reviews
        </div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            {tool.reviews?.productHunt?.stars ? (
              <>
                <StarRating
                  rating={tool.reviews?.productHunt?.stars}
                  size={"small"}
                />
                <div className="flex gap-x-8 mt-2">
                  {tool.reviews?.productHunt?.stars}/5
                  {tool.reviews?.productHunt?.link && (
                    <Link
                      href={tool.reviews?.productHunt?.link}
                      target="_blank"
                    >
                      <div className="font-bold underline">
                        Product Hunt
                        <i className="ml-2 fas fa-external-link-alt" />
                      </div>
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <>-</>
            )}
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-11 gap-10 items-start mt-12 bg-blue-100 rounded-lg py-3">
        <div className="col-span-2 font-bold ml-5">Social</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3"></div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-center mt-6">
        <div className="col-span-2 font-semibold">LinkedIn</div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              {tool.linkedin ? (
                <Link
                  href={tool.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
                >
                  <i className="text-xl fa-brands fa-linkedin"></i>
                </Link>
              ) : (
                <>-</>
              )}
            </div>
          ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-center mt-6">
        <div className="col-span-2 font-semibold">Twitter</div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              {tool.twitter ? (
                <Link
                  href={tool.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
                >
                  <i className="text-xl fa-brands fa-twitter"></i>
                </Link>
              ) : (
                <>-</>
              )}
            </div>
          ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-center mt-6">
        <div className="col-span-2 font-semibold">Instagram</div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              {tool.instagram ? (
                <Link
                  href={tool.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
                >
                  <i className="text-xl fa-brands fa-instagram"></i>
                </Link>
              ) : (
                <>-</>
              )}
            </div>
          ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-center mt-6">
        <div className="col-span-2 font-semibold">YouTube</div>
        {recommendation.tools &&
          recommendation.tools.length > 0 &&
          recommendation.tools.map((tool) => (
            <div className="col-span-3" key={tool._id}>
              {tool.youtube ? (
                <Link
                  href={tool.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-primary-100"
                >
                  <i className="text-xl fa-brands fa-youtube"></i>
                </Link>
              ) : (
                <>-</>
              )}
            </div>
          ))}
      </div>

      <div className="w-full grid grid-cols-11 gap-10 items-start mt-12 bg-red-100 rounded-lg py-3">
        <div className="col-span-2 font-bold ml-5">Usability</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3"></div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-6">
        <div className="col-span-2 font-bold">Features</div>
        {recommendation?.tools?.map((tool, i) => (
          <div
            key={i}
            className="col-span-3 text-base whitespace-pre-line features-list pl-4"
          >
            <ContentToList content={tool.features} />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-10">
        <div className="col-span-2 font-bold">Use Cases</div>
        {recommendation?.tools?.map((tool, i) => (
          <div
            key={i}
            className="col-span-3 text-base whitespace-pre-line features-list pl-4"
          >
            <Accordion useCases={tool.useCases} size={"small"} />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-11 gap-10 items-start mt-10">
        <div className="col-span-2 font-bold">Pricing</div>
        {recommendation?.tools?.map((tool, i) => (
          <div key={i} className="col-span-3">
            <ToolPill
              pillText={tool?.pricing?.name}
              chipStyle={getPricingChipClass(tool?.pricing?.name)}
              tooltip={tool?.pricing?.meta}
            />
          </div>
        ))}
      </div>

      <div className="w-full mt-20">
        <ToolsCarousel
          tools={recommendation.similarTools}
          heading={"Similar Tools"}
        />
      </div>

      {/* <div className="w-full grid grid-cols-4 gap-12 mt-8">
        <div className="w-full flex flex-col gap-y-6 font-bold">
          <div className="opacity-0">.</div>
          <div className="">Tool Name</div>
          <div className="opacity-0">.</div>
          <div className="">Trust</div>
        </div>

        <div className="w-full flex flex-col gap-y-6">
          <div className="font-bold">Tool 1 (Recommended)</div>
          <div>{recommendation?.tools[0]?.name}</div>
          <div>
            <ToolCard tool={recommendation?.tools[0]} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-6">
          <div className="font-bold">Tool 2</div>
          <div>{recommendation?.tools[1]?.name}</div>
          <div>
            <ToolCard tool={recommendation?.tools[1]} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-6">
          <div className="font-bold">Tool 3</div>
          <div>{recommendation?.tools[2]?.name}</div>
          <div>
            <ToolCard tool={recommendation?.tools[2]} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AiRecommenderResults;
