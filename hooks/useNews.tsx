import { useContext, useEffect } from "react";
import { NewsContext } from "@/context/newsProvider";
import { api } from "@/helpers/fetchHelper";
import { Hit, New } from "@/interfaces/news";

interface Props {
    query: string,
    page: number,
}

const useNews = () => {

    const { news, favs, saveNews, addFav, removeFav } = useContext(NewsContext);

    const getNews = async ({ query, page }: Props) => await api
        .get<New>(`${process.env.NEXT_APP_BASE_URL}=${query}&page=${page}`)
        .then((response) => saveNews(response.data as New));

    const removeFavHit = (id: string) => {
        removeFav(id);
        sessionStorage.setItem('favs', JSON.stringify(favs));
    }

    useEffect(() => {
        getNews({ query: 'reactjs', page: 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (window) {
            sessionStorage.setItem('favs', JSON.stringify(favs));
        }
    }, [favs]);

    return {
        favs,
        news,
        getNews,
        addFav,
        removeFavHit,
    }
}

export default useNews
