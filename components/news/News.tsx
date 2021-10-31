import React, { useState } from "react";
import Empty from "../general/Empty";
import SingleNew from "./SingleNew";
import useNews from "@/hooks/useNews";
import { Category } from "@/interfaces/data";
import { ReplyIcon } from "@heroicons/react/outline";
import CategoryDropdown from "./CategoryDropdown";

const News = () => {

    const { loading, news, getNews } = useNews();
    const [selected, setSelected] = useState('Reactjs');
    const { hits } = news;

    const filterNews = (value: string) => {
        setSelected(value);
        getNews({ query: value.toLowerCase(), page: 0 });
    }

    if (loading)
        return (<Empty state="loading" message="Fetching data" />)

    return (
        <>
            <div className="flex items-center">
                <CategoryDropdown selected={selected} setSelected={filterNews} />
            </div>
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
                    : <Empty state="error" message="No news found" />
            }
        </>
    )
}

export default News
