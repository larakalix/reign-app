import React from "react";
import Empty from "../general/Empty";
import SingleNew from "./SingleNew";
import { New } from "@/interfaces/news";
import useNews from "@/hooks/useNews";
import { Category } from "@/interfaces/data";

const categories: Category[] = [
    {
        id: '122b0f6e-4dec-4d19-9c4a-7cfb145c06f0',
        label: 'Angular',
        icon: null,
    },
    {
        id: '9f4e5830-8c65-48f4-b539-f8ca7ced700d',
        label: 'Reactjs',
        icon: null,
    },
    {
        id: 'acd7c901-8292-41ae-80e8-8c158a309988',
        label: 'Vuejs',
        icon: null,
    },
];

interface Props {
    news: New;
}

const News = () => {

    const { loading, news, getNews } = useNews();
    const { hits } = news;

    const filterNews = (value: string) => {
        getNews({ query: value.toLowerCase(), page: 0 });
    }

    if (loading)
        return (<Empty state="loading" message="Fetching data" />)

    return (
        <>
            <div>
                <ul>
                    {
                        categories.map(({ id, label }) => (
                            <li key={id} className="hover:cursor-pointer" onClick={() => filterNews(label)}> {label}</li>
                        ))
                    }
                </ul>
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
