import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ToolIntro from "./ToolIntro";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import ShareModal from "@/components/ui/ShareModal";
import Cta from "@/components/Tools/Cta";
import DemoVideo from "@/components/Tools/DemoVideo";
import Features from "@/components/Tools/Features";
import UseCases from "@/components/Tools/UseCases";
import EmbedTag from "@/components/Tools/EmbedTag";
import Collections from "@/components/Tools/Collections";
import Rate from "./Rate";
import Comments from "./Comments";
import Review from "./Review";
import PurchasePlans from "./PurchasePlans";
import { useDispatch } from "react-redux";

export default function Tool() {
  const { tool } = useSelector((state) => state.tool);
  const { query } = useRouter();
  const { purchaseTerms } = useSelector((state) => state.allPurchaseTerms);
  const dispatch = useDispatch();
  /*******************************
   *******  SHARE BUTTON  ********
   *******************************/
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col space-y-20">
        <ToolIntro tool={tool} setShareModalOpen={setShareModalOpen} />
        {tool?.reviews && <Review reviews={tool?.reviews} />}
        <EmbedTag toolSlug={query.tool} />
        <div className="w-full h-full flex p-2 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
          {purchaseTerms && purchaseTerms?.terms?.length > 0 && (
            <PurchasePlans
              terms={purchaseTerms.terms}
              image={tool?.image}
              name={tool?.name}
            />
          )}
        </div>
        <div className="grid w-full h-full md:grid-cols-2 gap-x-10 gap-y-16">
          <div className="flex flex-col w-full h-full space-y-4">
            <div className="text-xl font-semibold md:text-2xl">Features</div>
            <div className="w-full h-full flex p-8 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
              <Features features={tool?.features} />
            </div>
          </div>

          {tool?.youtubeDemoVideoLink && (
            <DemoVideo link={tool?.youtubeDemoVideoLink} />
          )}

          {tool?.useCases && tool?.useCases.length > 0 && (
            <div className="flex flex-col w-full space-y-4">
              <div className="text-2xl font-semibold">Use Cases</div>
              <UseCases useCases={tool?.useCases} />
            </div>
          )}

          <div
            className={
              "md:block hidden flex flex-col w-full space-y-4 " +
              (!tool?.youtubeDemoVideoLink ? " col-span-2" : "")
            }
          >
            <div className="text-2xl font-semibold">
              Explore our collections
            </div>
            <Collections />
          </div>
        </div>

        <div className={"md:hidden block flex flex-col w-full space-y-4"}>
          <div className="text-2xl font-semibold">Explore our collections</div>
          <Collections />
        </div>

        <Cta tool={tool} />
        <div>
          <Rate toolName={tool.name} />
          <Comments toolName={tool.name} />
        </div>
        <ToolsCarousel
          tools={tool.similarTools}
          heading={"Explore Similar Tools"}
        />
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        setOpen={setShareModalOpen}
        tool={tool}
      />
    </>
  );
}
