import { createContext, ReactNode, useState } from "react";
import { New } from "@/interfaces/news";
import { NewsContextType } from "@/interfaces/newsProvider";

const initState: NewsContextType = {
    news: {} as New,
    saveNews: () => { },
};

export const NewsContext = createContext<NewsContextType>(initState);

const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [news, setNews] = useState({} as New);

    const saveNews = (data: New) => setNews(data);

    return (
        <NewsContext.Provider value={{ news, saveNews }} >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;