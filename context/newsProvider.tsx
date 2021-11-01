import { createContext, ReactNode, useState } from "react";
import { Hit, New } from "@/interfaces/news";
import { NewsContextType } from "@/interfaces/newsProvider";

const initState: NewsContextType = {
    loading: true,
    news: {} as New,
    hits: [] as Hit[],
    favs: [] as Hit[],
    isLoading: () => { },
    saveNews: () => { },
    addFav: () => { },
    addFavs: () => { },
    addHits: () => { },
    removeFav: () => { },
};

export const NewsContext = createContext<NewsContextType>(initState);

const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(initState.loading);
    const [news, setNews] = useState(initState.news);
    const [hits, setHits] = useState(initState.hits);
    const [favs, setFavs] = useState(initState.favs);

    const saveNews = (data: New) => setNews(data);

    const addFavs = (favs: Hit[]) => setFavs(favs);

    const addHits = (hits: Hit[]) => setHits(hits);

    const addFav = (fav: Hit) => setFavs([...favs, fav]);

    const removeFav = (id: string) => {

        const index: number = favs.indexOf(favs.filter(h => h.objectID === id)[0]);
        if (index > -1)
            favs.splice(index, 1);

        setFavs([...favs])
    };

    const isLoading = (state: boolean) => setLoading(state);

    return (
        <NewsContext.Provider value={{
            loading,
            news,
            hits,
            favs,
            isLoading,
            saveNews,
            addFav,
            addFavs,
            addHits,
            removeFav,
        }} >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;