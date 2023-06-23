import ToolIntro from "./ToolUtils/ToolIntro";
import ExploreTools from "./ToolUtils/ExploreTools";

export default function Tool({}) {
    const tool = {
        name: 'Idea2Business',
        instagram: '#',
        linkedin: '#',
        youtube: '#',
        twitter: '#',
        url:'#',
        image: 'https://everythingai.s3.ap-south-1.amazonaws.com/07c728d1-d819-44cc-a14b-365917e7b885.jpg',
        oneLiner: 'An AI Saas to take your ideas to a full scale Business model along with tips on Go to market strategy, pitchdecks and many more',
        category: {
            name: 'Marketing'
        },
        subcategory: {
            name: 'Branding',
        },
        createdAt: '2023-06-21T16:49:29.422+00:00',
        pricing: {
            name: 'Freemium',
            meta: 'pay on the go'
        }
    }
    const toolsArr = [];
    for(let i = 0; i < 12; i++)
        toolsArr.push(tool);
    return (
        <>
            <ToolIntro tool={tool}/>
            <ExploreTools tools={toolsArr}/>
        </>
    );
}