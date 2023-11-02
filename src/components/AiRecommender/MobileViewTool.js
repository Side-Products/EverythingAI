import { useContext } from "react";
import ToolCard from "@/components/Cards/ToolCard";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import StarRating from "@/components/ui/StarRating";
import Accordion from "../Tools/Accordion";
import { getPricingChipClass } from "@/utils/Helpers";
import ToolPill from "../Tools/ToolUtils/ToolPill";
import Button from "@/components/ui/Button";
import { useDispatch } from "react-redux";
import { likeTool, deleteLikedTool } from "@/redux/actions/likedToolActions";
import { AuthModalContext } from "@/store/AuthModalContextProvider";

const MobileViewTool = ({ tool, position }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { setAuthModalOpen } = useContext(AuthModalContext);

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
    <div className="w-full flex flex-col gap-y-6 mt-6">
      <div
        className={
          "text-2xl font-bold text-center " +
          (position == "1" ? "" : "mt-8 text-3xl")
        }
      >
        {position == "1" ? (
          <>
            Tool 1{" "}
            <span className="text-gradient-secondary-tr">(Recommended)</span>
          </>
        ) : position == "2" ? (
          "Tool 2"
        ) : (
          "Tool 3"
        )}
      </div>
      <div className="w-full flex mt-2 bg-primary-100 rounded-lg py-3 gap-8">
        <div className="font-bold ml-5">Tool Name</div>
        {tool?.name}
      </div>
      <div className="flex justify-center">
        <div className="flex max-w-[350px]">
          <ToolCard tool={tool} />
        </div>
      </div>
      <div className="w-full flex bg-indigo-100 rounded-lg py-3 mt-2">
        <div className="font-bold ml-5">Trust</div>
      </div>
      <div className="w-full flex justify-between">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          <Image src="/ui/g2.png" height={100} width={30} loading="lazy" />
          G2 Reviews
        </div>
        <div className="flex flex-col items-end">
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
            <span className="text-center w-full flex justify-center">-</span>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          <Image
            src="/ui/trustpilot.png"
            height={100}
            width={120}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-end">
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
                      G2
                      <i className="ml-2 fas fa-external-link-alt" />
                    </div>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <span className="text-center w-full flex justify-center">-</span>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          <Image src="/logo.png" height={100} width={130} loading="lazy" />
        </div>
        <div className="flex flex-col items-end">
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
            <span className="text-center w-full flex justify-center">-</span>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="col-span-2 flex items-end gap-2 font-medium">
          Product Hunt Reviews
        </div>
        <div className="flex flex-col items-end">
          {tool.reviews?.productHunt?.stars ? (
            <>
              <StarRating
                rating={tool.reviews?.productHunt?.stars}
                size={"small"}
              />
              <div className="flex gap-x-8 mt-2">
                {tool.reviews?.productHunt?.stars}/5
                {tool.reviews?.productHunt?.link && (
                  <Link href={tool.reviews?.productHunt?.link} target="_blank">
                    <div className="font-bold underline">
                      G2
                      <i className="ml-2 fas fa-external-link-alt" />
                    </div>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <span className="text-center w-full flex justify-center">-</span>
          )}
        </div>
      </div>

      <div className="w-full flex justify-between items-center bg-orange-100 rounded-lg py-3 mt-2">
        <div className="font-bold ml-5">Social</div>
        <div className="flex gap-2 mr-2">
          {tool.linkedin ? (
            <Link
              href={tool.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-gray-200/60 hover:bg-primary-100"
            >
              <i className="text-xl fa-brands fa-linkedin"></i>
            </Link>
          ) : (
            <></>
          )}
          {tool.twitter ? (
            <Link
              href={tool.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-gray-200/60 hover:bg-primary-100"
            >
              <i className="text-xl fa-brands fa-twitter"></i>
            </Link>
          ) : (
            <></>
          )}
          {tool.instagram ? (
            <Link
              href={tool.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-gray-200/60 hover:bg-primary-100"
            >
              <i className="text-xl fa-brands fa-instagram"></i>
            </Link>
          ) : (
            <></>
          )}
          {tool.youtube ? (
            <Link
              href={tool.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-gray-200/60 hover:bg-primary-100"
            >
              <i className="text-xl fa-brands fa-youtube"></i>
            </Link>
          ) : (
            <></>
          )}
          {!tool.linkedin &&
            !tool.twitter &&
            !tool.instagram &&
            !tool.youtube && <>-</>}
        </div>
      </div>

      <div className="w-full flex bg-amber-100 rounded-lg py-3 mt-2">
        <div className="font-bold ml-5">Usability</div>
      </div>
      <div className="w-full flex flex-col">
        <div className="font-bold">Features</div>
        <div className="text-base whitespace-pre-line features-list pl-4 mt-4">
          <ContentToList content={tool.features} />
        </div>
      </div>
      <div className="w-full flex flex-col mt-4">
        <div className="font-bold">Use Cases</div>
        <div className="flex items-start text-base whitespace-pre-line features-list mt-4">
          <Accordion useCases={tool.useCases} size={"small"} />
        </div>
      </div>

      <div className="w-full flex justify-between mt-2">
        <div className="font-bold">Pricing</div>
        <div className="flex justify-center">
          <ToolPill
            pillText={tool.pricing?.name}
            chipStyle={getPricingChipClass(tool.pricing?.name)}
            tooltip={tool.pricing?.meta}
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-2">
        <div className="w-2/3 flex justify-center">
          <Button
            variant={"classic"}
            type={"button"}
            onClick={() => {
              if (session && session.user) {
                if (tool.liked) {
                  dispatch(deleteLikedTool(tool._id));
                  tool.liked = false;
                } else {
                  dispatch(likeTool(tool._id));
                  tool.liked = true;
                }
              } else {
                setAuthModalOpen(true);
              }
            }}
            active={tool.liked}
            classes="relative group/like-btn"
          >
            {tool.liked ? (
              <span className="text-white">Remove from collection</span>
            ) : (
              <>
                Add to collection
                <i className="ml-2 fa-solid fa-circle-plus text-lg text-dark-200 group-hover/like-btn:text-primary-400"></i>
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-1">
        <Link
          href={`/tools/${tool?.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button type={"button"}>
            Check out tool{" "}
            <i className="ml-2 text-xs fas fa-external-link-alt" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileViewTool;
