import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPricingChipClass } from "@/utils/Helpers";
import Button from "@/components/ui/Button";
import ToolSocials from "./ToolUtils/ToolSocials";
import ToolPill from "./ToolUtils/ToolPill";
import { convertTimestampToNormalDate } from "@/utils/Helpers";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { likeTool, deleteLikedTool } from "@/redux/actions/likedToolActions";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import AddToCollectionModal from "@/components/Admin/Modals/Tool/AddToCollectionModal";
import { getAllCollections } from "@/redux/actions/collectionActions";

export default function ToolIntro({ tool, setShareModalOpen }) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { setAuthModalOpen } = useContext(AuthModalContext);
  const router = useRouter();

  const { likedTool } = useSelector((state) => state.createLikedTool);
  useEffect(() => {
    if (likedTool) {
      if (likedTool?._id === tool?._id) {
        tool.liked = true;
      }
    }
  }, [likedTool]);

  useEffect(() => {
    if (session && session.user && session.user.role == "admin") {
      dispatch(getAllCollections());
    }
  }, [dispatch, session]);

  const [isAddToCollectionModalOpen, setAddToCollectionModalOpen] =
    useState(false);

  const createdDate = new Date(tool?.createdAt);
  const hasSocials = () => {
    return (
      (tool?.instagram || tool?.twitter || tool?.linkedin || tool?.youtube)
        ?.length > 0
    );
  };

  return (
    <div>
      {session && session.user && session && session.user.role == "admin" && (
        <div className="flex justify-between w-full p-4 mt-6 mb-12 bg-gray-200 rounded-xl">
          <div className="text-sm font-semibold">Admin Actions</div>
          <div className="flex space-x-8">
            <div
              onClick={() => router.push(`/admin/tools/edit/${tool._id}`)}
              className="text-sm transition duration-300 cursor-pointer text-end hover:text-primary-500"
            >
              <i className="fa-edit fa-solid"></i> Edit
            </div>
            <div
              onClick={() =>
                router.push(`/admin/tools/edit/${tool._id}?feature=true`)
              }
              className="text-sm transition duration-300 cursor-pointer text-end hover:text-primary-500"
            >
              <i className="fa-bolt fa-solid"></i> Feature on hero section
            </div>
            <div
              onClick={() => setAddToCollectionModalOpen(true)}
              className="text-sm transition duration-300 cursor-pointer text-end hover:text-primary-500"
            >
              <i className="fa-solid fa-circle-plus"></i> Add to a collection
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:gap-y-0 gap-y-12 lg:grid-cols-2 gap-x-0 lg:gap-x-12 xl:gap-x-12 2xl:gap-x-0">
        <Image
          className="rounded-xl justify-self-start lg:w-[580px] lg:h-[300px] xl:w-[640px] xl:h-[360px]"
          width={640}
          height={360}
          src={tool?.image}
          priority
          alt="tool image"
        />
        <div className="flex flex-col flex-1 h-full">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 md:space-x-3">
                <a
                  href={tool?.utmLink || tool?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold cursor-pointer md:text-3xl lg:text-4xl font-secondary hover:text-primary-600"
                >
                  {tool?.name}
                </a>
                <Image
                  className="md:w-[22px] aspect-square w-[16px]"
                  src={"/verified_tick.svg"}
                  width={22}
                  height={22}
                  alt="verified tick"
                />
              </div>
            </div>

            <div className="flex w-full mt-4 mb-auto space-x-3">
              <ToolPill pillText={tool?.category?.name} />
              {tool?.subCategory?.name && (
                <ToolPill pillText={tool?.subCategory?.name} />
              )}
              <ToolPill
                pillText={tool?.pricing?.name}
                chipStyle={getPricingChipClass(tool?.pricing?.name)}
                tooltip={tool?.pricing?.meta}
              />
            </div>

            <p className="mt-5 text-sm font-medium md:mt-10 md:text-lg">
              {tool?.oneLiner}
            </p>
          </div>
          <div className="flex flex-col items-end justify-between w-full mt-auto">
            <div className="flex flex-col justify-between w-full mt-auto xl:flex-row xl:items-end">
              <div className="mb-5 xl:mb-0">
                {hasSocials() && <ToolSocials tool={tool} />}
              </div>
              <div className="flex space-x-3">
                <div className="flex space-x-3">
                  <Button
                    onClick={() => {
                      if (session && session.user) {
                        if (tool?.liked) {
                          dispatch(deleteLikedTool(tool?._id));
                          tool.liked = false;
                        } else {
                          dispatch(likeTool(tool?._id));
                          tool.liked = true;
                        }
                      } else {
                        setAuthModalOpen(true);
                      }
                    }}
                    type="button"
                    variant="classic-100"
                    active={tool?.liked}
                    classes="relative group/like-btn px-10"
                  >
                    <i
                      className={
                        "fa-solid fa-thumbs-up text-xs md:text-base lg:text-lg " +
                        (tool?.liked
                          ? "text-light-100"
                          : "text-dark-200 group-hover/like-btn:text-primary-400")
                      }
                    ></i>
                  </Button>
                  <Button
                    type="button"
                    variant="classic-100"
                    onClick={() => setShareModalOpen(true)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <i className="text-xs sm:text-sm md:text-lg fa-solid fa-share-nodes"></i>
                      <span className="text-xs sm:text-sm md:text-base">
                        Share
                      </span>
                    </div>
                  </Button>
                </div>
                <Link
                  href={tool?.utmLink || tool?.url || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Button
                    type="button"
                    classes={"py-2 px-7 text-xs md:text-sm md:text-base"}
                  >
                    <i className="mr-2 text-xs sm:text-sm md:text-base fa-solid fa-arrow-up-right-from-square text-light-100"></i>
                    Visit Site
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddToCollectionModal
        isOpen={isAddToCollectionModalOpen}
        setOpen={setAddToCollectionModalOpen}
        toolId={tool?._id}
      />
    </div>
  );
}
