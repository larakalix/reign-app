import { createContext, ReactNode, useState } from "react";
import { Hit, New } from "@/interfaces/news";
import { NewsContextType } from "@/interfaces/newsProvider";

const initState: NewsContextType = {
    news: {} as New,
    favs: [] as Hit[],
    saveNews: () => { },
    addFav: () => { },
    addFavs: () => { },
    removeFav: () => { },
};

export const NewsContext = createContext<NewsContextType>(initState);

const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [news, setNews] = useState({} as New);
    const [favs, setFavs] = useState([] as Hit[]);

    const saveNews = (data: New) => setNews(data);

    const addFavs = (favs: Hit[]) => setFavs(favs);

    const addFav = (fav: Hit) => setFavs([...favs, fav]);

    const removeFav = (id: string) => setFavs([...favs.filter(h => h.objectID !== id)]);

    return (
        <NewsContext.Provider value={{
            news,
            favs,
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