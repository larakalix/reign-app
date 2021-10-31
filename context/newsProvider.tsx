import { createContext, ReactNode, useState } from "react";
import { Hit, New } from "@/interfaces/news";
import { NewsContextType } from "@/interfaces/newsProvider";

const initState: NewsContextType = {
    loading: true,
    news: {} as New,
    favs: [] as Hit[],
    isLoading: () => { },
    saveNews: () => { },
    addFav: () => { },
    addFavs: () => { },
    removeFav: () => { },
};

export const NewsContext = createContext<NewsContextType>(initState);

const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(initState.loading);
    const [news, setNews] = useState(initState.news);
    const [favs, setFavs] = useState(initState.favs);

    const saveNews = (data: New) => setNews(data);

    const addFavs = (favs: Hit[]) => setFavs(favs);

    const addFav = (fav: Hit) => setFavs([...favs, fav]);

    const removeFav = (id: string) => setFavs([...favs.filter(h => h.objectID !== id)]);

    const isLoading = (state: boolean) => setLoading(state);

    return (
        <NewsContext.Provider value={{
            loading,
            news,
            favs,
            isLoading,
            saveNews,
            addFav,
            addFavs,
            removeFav,
        }} >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;