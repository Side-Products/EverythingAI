import Image from "node_modules/next/image";
// NOTE SQUARE ASPECT FITS BETTER IN TABLE
export default function TrendTable({tools, startIdx, limit}) {
    const contentArr = [];
    if(tools){
        for(let i = startIdx; i-startIdx < Math.min(limit,tools.length-startIdx); i++){
            contentArr.push(
                <div key={'i'+i} className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-gray-200 rounded-xl">
                    <p className="w-[48px]">{i+1}</p>
                    <div className="flex items-center w-[50%]">
                        <Image src={tools[i].image} className="rounded-xl" alt="tool icon" width={75} height={75}/>
                        <p className="pl-6">{tools[i].name}</p>
                    </div>
                    <p className="w-[20%] text-right">{tools[i].category.name}</p>
                    <p className="w-[20%] text-right">{tools[i].pricing.name}</p>
                </div>
            );
        }
    }
    else{
        // ADD LOADER TABLE ROWS CODE HERE
    }
    return (
        <div className="flex flex-col w-[48%] mb-20">
            {/* Header div */}
            <div className="flex items-center w-full px-4 pb-3 mb-2 border-b-[1px] border-[#e5e8eb]  text-[#646d75] text-sm justify-between">
                <p className="w-[48px] text-left">Rank</p>
                <p className="w-[50%] text-left">Tool</p>
                <p className="w-[20%] text-right">Cateory</p>
                <p className="w-[20%] text-right">Pricing</p>
            </div>

            {/* Content */}
            {contentArr}
        </div>
    );
}