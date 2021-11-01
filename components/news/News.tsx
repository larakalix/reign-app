import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "../general/Empty";
import useNews from "@/hooks/useNews";
import SingleNew from "./SingleNew";
import CategoryDropdown from "./CategoryDropdown";
import Grid from "../general/Grid";
import { ChevronDownIcon } from "@heroicons/react/outline";

const News = () => {

    // const { hits } = news;
    const [selected, setSelected] = useState('reactjs');
    const { loading, hits, news, getNews } = useNews();
    const { page, nbPages } = news;

    // Retreive news from API depending to selected cagetory, and set selected dropdown item
    const filterNews = (value: string) => {
        setSelected(value);
        getNews({ query: value.toLowerCase(), page: 0 });
    }

    useEffect(() => {
        const filter = localStorage.getItem('filter');
        if (filter)
            setSelected(filter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="news">
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-between mt-8">
                <CategoryDropdown selected={selected} setSelected={filterNews} />
                <p className="text-sm">Category: <span className="text-blue-500 font-semibold">{selected}</span></p>
            </div>
            {
                loading ? <Empty state="loading" message="Fetching data" /> :
                    (
                        hits?.length > 0 ?
                            (
                                <InfiniteScroll
                                    dataLength={hits.length}
                                    next={() => { getNews({ query: selected.toLowerCase(), page: page + 1, concat: true }) }}
                                    hasMore={nbPages > 0}
                                    loader={null}
                                    endMessage={<Empty state="success" message="No more news for today (:" />}
                                >
                                    <Grid>
                                        {
                                            hits.map((hit, index) => (
                                                <SingleNew key={`${hit.objectID}${index}`} hit={hit} />
                                            ))
                                        }
                                    </Grid>
                                </InfiniteScroll>
                            )
                            : <Empty state="error" message="No news found" />
                    )
            }
            {
                !loading && hits?.length > 0 && hits?.length <= 8
                    ? (
                        <div className="flex flex-col justify-center items-center">
                            <button className="flex flex-col justify-center items-center text-blue-600 font-medium p-2 rounded-md mt-4" onClick={() => getNews({ query: selected.toLowerCase(), perPage: 50, page })}>
                                <span>Get more</span>
                                <ChevronDownIcon className="w-6 h-6 text-blue-600" />
                            </button>
                        </div>
                    ) : null
            }
        </div>
    )
}

export default News
