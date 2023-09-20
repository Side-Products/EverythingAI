import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ToolsCarousel from "../Tools/ToolsCarousel";
import HeroCard from "../Cards/HeroCard";
import TopGradient from "@/components/ui/BgGradient/TopGradient";
import BottomGradient from "@/components/ui/BgGradient/BottomGradient";
import { ToolContext } from "@/store/ToolContextProvider";

export default function HeroSection({ featuredTools }) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const heroTools = featuredTools?.map((tool, idx) => {
    return <HeroCard key={idx} tool={tool} />;
  });

  const [searchText, setSearchText] = useState("");
  const { setFilteredTools } = useContext(ToolContext);
  const router = useRouter();

  return (
    <div className="relative">
      <div className="mb-6 z-[2] backdrop-blur-2xl">
        <TopGradient />

        <div className="mt-6 leading-normal space-y-5 px-2 sm:px-8 md:px-16 text-[40px] sm:text-[50px] md:text-[80px] lg:text-[100px] leading-[120px] text-center font-extrabold tracking-[-2.5px] text-black">
          <h1>We Only Feature The Top </h1>
          <h1>1% of The AI Tools</h1>
        </div>

        <div className="flex justify-center w-full mt-10 mb-8">
          {/* <div className="px-8 py-3 text-center border rounded-full w-fit border-zinc-300 text-zinc-500">
						Discover AI tools that fit like a glove: handpicked for your industry and goals.
					</div> */}

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log("searchText", searchText);
              const queryParams = {
                search: searchText,
              };
              // Merge the new query parameters with the existing ones
              const updatedQuery = { ...router.query, ...queryParams };
              // Convert the updated query object to a search string
              const search = new URLSearchParams(updatedQuery).toString();
              // Push the updated search string to the router
              router.push(`/tools?${search}`, undefined, { shallow: true });
              const { data } = await axios.get(`/api/tools`, {
                params: updatedQuery,
              });
              setFilteredTools(data?.tools);
            }}
            className="relative flex justify-center w-10/12 bg-transparent md:w-1/2"
          >
            <input
              className="w-full px-8 py-3 transition duration-200 bg-transparent border rounded-full text-start border-zinc-300 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              type="text"
              placeholder="Discover AI tools that fit like a glove: handpicked for your industry and goals."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 right-[4px] transform -translate-y-1/2 flex items-center justify-center p-3 transition duration-200 rounded-full cursor-pointer w-[43px] h-[43px] bg-search-100 hover:bg-dark-800 hover:text-light-100 text-dark-200"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div>
          {heroTools && (
            <ToolsCarousel
              childrenSlides={heroTools}
              setActiveSlideIdx={setActiveSlideIdx}
            />
          )}
        </div>

        <BottomGradient />
      </div>
    </div>
  );
}
