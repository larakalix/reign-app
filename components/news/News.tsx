import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "../general/Empty";
import useNews from "@/hooks/useNews";
import SingleNew from "./SingleNew";
import CategoryDropdown from "./CategoryDropdown";
import Grid from "../general/Grid";

const News = () => {

    const { loading, hits, news, getNews } = useNews();
    // const { hits } = news;
    const [selected, setSelected] = useState('Reactjs');
    const { page, nbPages } = news;

    // Retreive news from API depending to selected cagetory, and set selected dropdown item
    const filterNews = (value: string) => {
        setSelected(value);
        getNews({ query: value.toLowerCase(), page: 0 });
    }

    return (
        <div id="news">
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-between mt-4">
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
                                    // loader={<Empty state="loading" message="Fetching data" />}
                                    endMessage={<Empty state="success" message="Nothing more news for today" />}
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
        </div>
    )
}

export default News
