import { useState, useEffect, useContext } from "react";
import Modal from "@/components/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import successLogo from "/public/ui/success.svg";
import { StatusContext } from "@/store/StatusContextProvider";
import { getFirstName } from "@/utils/Helpers";
import { useSession } from "next-auth/react";

const ShareModal = ({
  isOpen,
  setOpen,
  tool,
  shareableDashboardUser,
  shareMyFavouriteTools,
}) => {
  const { data: session } = useSession();
  /*******************************
   *******  SHARE BUTTONS  *******
   *******************************/

  const { asPath } = useRouter();
  const { setSuccess } = useContext(StatusContext);
  const [currentPageLink, setCurrentPageLink] = useState("");

  useEffect(() => {
    if (shareMyFavouriteTools) {
      if (session && session.user) {
        setCurrentPageLink(
          window.location.origin + asPath + "/" + session.user._id
        );
      }
    } else {
      setCurrentPageLink(window.location.origin + asPath);
    }
  }, [session]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentPageLink);
    setSuccess((prevState) => ({
      ...prevState,
      title: "Sharing Link Copied",
      message:
        shareableDashboardUser || shareMyFavouriteTools
          ? "Link has been copied to clipboard"
          : "Tool link has been copied to clipboard",
      showSuccessBox: true,
    }));
  };

  const sharableMessage = shareableDashboardUser
    ? `Check out ${getFirstName(
        shareableDashboardUser?.name
      )}'s favourite tools on EverythingAI! \nSupercharge your workflows and save time to do things that matter.\n\nCheck out this collection on @everythingai- ${currentPageLink}`
    : shareMyFavouriteTools
    ? `I just created my favourite AI tools on Everything AI. Here are my favorites: ${currentPageLink}. Go create yours as well at https://everythingai.club`
    : `Check out ${tool?.name} on EverythingAI!\nSupercharge your workflows and save time to do things that matter.\n\nCheck out this tool on @everythingai- ${currentPageLink}`;
  const uriEncodedSharableText = encodeURI(sharableMessage);

  return (
    <Modal
      isOpen={isOpen}
      image={
        <div className="relative flex items-center justify-center w-24 h-24 mx-auto">
          <Image src={successLogo} layout="fill" alt="Success" />
        </div>
      }
      title={
        <div className="text-xl">
          <p>
            Supercharge your{" "}
            <span className="text-primary-500">productivity</span>
          </p>
          <p>
            and spread the <span className="text-primary-500">magic</span>
          </p>
          <p className="text-xs mt-3">
            Share this incredible{" "}
            {shareableDashboardUser || shareMyFavouriteTools
              ? "collection"
              : "tool"}{" "}
            with your friends and
          </p>
          <p className="text-xs">
            colleagues to level up your productivity together!
          </p>
        </div>
      }
      content={
        <div>
          <div className="flex items-center justify-between flex-1 px-4 py-2 rounded-lg bg-gray-200">
            <span className="max-w-[180px] md:max-w-[280px] truncate md:text-base align-bottom text-sm font-secondary xl:max-w-none">
              {currentPageLink}
            </span>
            <button className="w-fit h-fit" onClick={copyToClipboard}>
              <i className="far fa-clipboard text-primary-500"></i>
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <div onClick={copyToClipboard}>
              <div className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200">
                <i className="text-2xl fa-solid fa-copy"></i>
              </div>
            </div>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200"
              href={
                "https://twitter.com/intent/tweet?url=" + uriEncodedSharableText
              }
              passHref={true}
            >
              <i className="text-2xl fa-brands fa-twitter"></i>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200"
              href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${currentPageLink}&redirect_uri=${currentPageLink}&hashtag=%23Musixverse`}
              passHref={true}
            >
              <i className="text-2xl fa-brands fa-facebook"></i>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200"
              href={
                `https://web.whatsapp.com/send?text=` + uriEncodedSharableText
              }
              passHref={true}
            >
              <i className="text-2xl fa-brands fa-whatsapp"></i>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200"
              href={
                `https://telegram.me/share/url?url=` + uriEncodedSharableText
              }
              passHref={true}
            >
              <i className="text-2xl fa-brands fa-telegram"></i>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-gray-200"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageLink}&title=${sharableMessage}`}
              passHref={true}
            >
              <i className="text-2xl fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      }
      onClose={() => {
        setOpen(false);
      }}
    ></Modal>
  );
};

export default ShareModal;
