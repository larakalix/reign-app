import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "../general/Empty";
import useNews from "@/hooks/useNews";
import SingleNew from "./SingleNew";
import CategoryDropdown from "./CategoryDropdown";

const News = () => {

    const { loading, hits, news, getNews } = useNews();
    const [selected, setSelected] = useState('Reactjs');
    const { page, nbPages } = news;

    const filterNews = (value: string) => {
        setSelected(value);
        getNews({ query: value.toLowerCase(), page: 0 });
    }

    return (
        <>
            <div className="flex items-center justify-between mt-4">
                <CategoryDropdown selected={selected} setSelected={filterNews} />
                <p className="text-sm">Category: <span className="text-blue-700 font-semibold">{selected}</span></p>
            </div>
            {
                loading ? <Empty state="loading" message="Fetching data" /> :
                    (
                        hits?.length > 0 ?
                            (
                                <InfiniteScroll
                                    dataLength={hits.length}
                                    next={() => { getNews({ query: selected.toLowerCase(), page: page + 1 }) }}
                                    hasMore={nbPages > 0}
                                    loader={<Empty state="loading" message="Fetching data" />}
                                    endMessage={<Empty state="success" message="Nothing more news for today" />}
                                >
                                    <div className="grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                                        {
                                            hits.map((hit, index) => (
                                                <SingleNew key={`${hit.objectID}${index}`} hit={hit} index={index} />
                                            ))
                                        }
                                    </div>
                                </InfiniteScroll>
                            )
                            : <Empty state="error" message="No news found" />
                    )
            }
        </>
    )
}

export default News
