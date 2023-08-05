import Pager from "@/components/ui/Pagination/Pager";
import CommentCard from "./CommentCard";
import { useState } from "react";

export default function Comments({comments, resultsPerPage=5, totalCount = 6, toolName='Write Sonic'}){
    const [page, setPage] = useState(1)

    const handlePagination = () => {

    }

    return (
        <>
            <div className="flex flex-col">
                <h3 className="mb-5 font-semibold">See what others say about {toolName}</h3>
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <CommentCard rating={3} authorName={'Jhon Doe'} comment={'aoscoascnl ajslnaljsncljn  lnjlnaslcjnalsn ljnaljsnljasncljan aljljanscljansljjcn alsnclanscljansljcna slanclasnclnaslcn alsncljanslcknalsc'} authorProfile={'http://localhost:3000/_next/image?url=https%3A%2F%2Feverythingai.s3.ap-south-1.amazonaws.com%2F771659c6-d35c-4dda-bbdc-174be6a1a2d6.png&w=640&q=75'}/>
                </div>
                <div className="mt-12">
                    {resultsPerPage < totalCount && (
                        <Pager activePage={page} onPageChange={handlePagination} itemsCountPerPage={resultsPerPage} totalPagesCount={totalCount} />
                    )}
                </div>
            </div>
        </>
    );
}