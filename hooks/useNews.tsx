import { useContext, useEffect } from "react";
import { api } from "../helpers/fetchHelper";
import { New } from "../interfaces/news";
import { NewsContext } from "../context/newsProvider";

interface Props {
    query: string,
    page: number,
}

const useNews = () => {

    const { news, saveNews } = useContext(NewsContext);

    const getNews = async ({ query, page }: Props) => await api
        .get<New>(`${process.env.NEXT_APP_BASE_URL}=${query}&page=${page}`)
        .then((response) => saveNews(response.data));

    useEffect(() => {
        getNews({ query: 'reactjs', page: 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        news,
        getNews,
    }
}

export default useNews
