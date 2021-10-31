import { useContext, useEffect } from "react";
import { NewsContext } from "@/context/newsProvider";
import { api } from "@/helpers/fetchHelper";
import { New } from "@/interfaces/news";

interface Props {
    query: string,
    page: number,
}

const useNews = () => {

    const { loading, news, saveNews, isLoading } = useContext(NewsContext);

    const getNews = async ({ query, page }: Props) => {
        isLoading(true);
        await api
            .get<New>(`${process.env.NEXT_APP_BASE_URL}=${query}&page=${page}`)
            .then((response) => {
                console.log('response', response)
                saveNews(response.data as New)
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
        getNews,
    }
}

export default useNews
