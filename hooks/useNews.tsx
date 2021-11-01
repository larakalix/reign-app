import { useContext, useEffect } from "react";
import { NewsContext } from "@/context/newsProvider";
import { api } from "@/helpers/fetchHelper";
import { New } from "@/interfaces/news";

interface Props {
    query: string,
    page: number,
    perPage?: number | null;
    concat?: boolean;
}

const useNews = () => {

    const { loading, news, hits, addHits, saveNews, isLoading } = useContext(NewsContext);

    // Retreive data from API
    const getNews = async ({ query, page, perPage, concat = false }: Props) => {
        if (!concat)
            isLoading(true);

        await api
            .get<New>(`${process.env.NEXT_APP_BASE_URL}=${query}&page=${page}&hitsPerPage=${(perPage) ? perPage : 10}`)
            .then((response) => {
                saveNews(response.data as New)
                const data = response
                    .data
                    .hits
                    .filter(h => h.author !== null && h.story_title !== null && h.story_url !== null && h.created_at !== null);
                    
                concat
                    ? addHits([...hits, ...data])
                    : addHits(data);

                isLoading(false);
            });
    }

    useEffect(() => {
        if (Object.keys(news).length === 0)
            getNews({ query: 'reactjs', page: 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading,
        news,
        hits,
        getNews,
    }
}

export default useNews
