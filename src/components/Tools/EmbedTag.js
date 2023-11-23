import Button from "@/components/ui/Button";
import { useContext } from "react";
import { StatusContext } from "@/store/StatusContextProvider";
import Image from "next/image";

export default function EmbedTag({
  toolSlug,
  hostURL = "https://everythingai.club",
}) {
  const { setSuccess } = useContext(StatusContext);

  const copyToClipboard = async () => {
    const htmlToCopy = `<a href='${hostURL}/tools/${toolSlug}' target="_blank" rel="noopener noreferrer">
        <img src='${hostURL}/api/tools/image/${toolSlug}' alt="everythingai tool" width="200" height="50"></img>
        </a>`;

    await navigator.clipboard.writeText(htmlToCopy);
    setSuccess((prevState) => ({
      ...prevState,
      title: "Sharing Tag Copied",
      message: "Embed tag has been copied to clipboard",
      showSuccessBox: true,
    }));
  };

  return (
    <div>
      <h1 className="text-xl font-semibold md:text-2xl">Promote your tool</h1>
      <div className="flex items-center justify-between p-4 mt-3 border-2 border-gray-200 md:mt-6 rounded-xl">
        <Image
          src={`/api/tools/image/${toolSlug}`}
          className="md:w-[200px] w-[125px] md:h-[50px] h-[32px] "
          alt="sometign"
        />
        <Button
          variant="classic"
          onClick={copyToClipboard}
          classes={"max-w-fit"}
        >
          <span className="text-sm material-symbols-outlined md:text-base">
            content_copy
          </span>
          <span className="ml-2 text-xs md:text-sm">Copy Embed Code</span>
        </Button>
      </div>
    </div>
  );
}
