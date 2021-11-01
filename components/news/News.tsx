import React, { useEffect, useState } from "react";
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
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-between mt-8">
                <CategoryDropdown selected={selected} setSelected={filterNews} />
                <p className="text-sm">Category: <span className="text-blue-500 font-semibold">{selected}</span></p>
            </div>
            {
                loading ? <Empty state="loading" message="Fetching data"><></></Empty> :
                    (
                        hits?.length > 0 ?
                            (
                                <InfiniteScroll
                                    dataLength={hits.length}
                                    next={() => { getNews({ query: selected.toLowerCase(), page: page + 1, concat: true }) }}
                                    hasMore={nbPages > 0}
                                    loader={null}
                                    endMessage={<Empty state="success" message="No more news for today (:"><></></Empty>}
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
                            : <Empty state="error" message="No news found"><></></Empty>
                    )
            }
            {
                !loading && hits?.length <= 8
                    ? (
                        <Empty state="loading" message="Not enough data">
                            <button className="bg-blue-600 text-white p-2 rounded-md mt-4" onClick={() => getNews({ query: selected.toLowerCase(), perPage: 150, page })}>Retreive more data</button>
                        </Empty>
                    ) : null
            }
        </div>
    )
}

export default News
