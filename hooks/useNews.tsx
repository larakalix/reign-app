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
            .get<New>(`${process.env.NEXT_APP_BASE_URL}=${query}&page=${page}&hitsPerPage=${(perPage) ? perPage : 20}`)
            .then((response) => {
                console.log('response', response.data)
                saveNews(response.data as New)
                concat
                    ? addHits([...hits, ...response.data.hits])
                    : addHits(response.data.hits);
                    
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
