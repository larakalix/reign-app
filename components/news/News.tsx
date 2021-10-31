import React from "react";
import Empty from "../general/Empty";
import SingleNew from "./SingleNew";
import { New } from "@/interfaces/news";
import useNews from "@/hooks/useNews";

interface Props {
    news: New;
}

const News = () => {
    
    const { news } = useNews();
    const { hits } = news;

    return (
        <>
            {
                hits?.length > 0 ?
                    (
                        <div className="grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                            {
                                hits.map((hit) => (
                                    <SingleNew key={hit.objectID} hit={hit} />
                                ))
                            }
                        </div>
                    )
                    : <Empty message="No news found" />
            }
        </>
    )
}

export default News
