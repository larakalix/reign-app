import { Hit, New } from "./news";

export type NewsContextType = {
    loading: boolean,
    news: New,
    favs: Hit[],
    isLoading: (state: boolean) => void,
    saveNews: (data: New) => void,
    addFav: (fav: Hit) => void,
    addFavs: (favs: Hit[]) => void,
    removeFav: (id: string) => void,
};
