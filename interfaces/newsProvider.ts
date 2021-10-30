import { Hit, New } from "./news";

export type NewsContextType = {
    news: New;
    favs: Hit[];
    saveNews: (data: New) => void,
    addFav: (fav: Hit) => void,
    removeFav: (id: string) => void,
};
