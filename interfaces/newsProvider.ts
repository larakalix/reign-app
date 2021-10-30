import { New } from "./news";

export type NewsContextType = {
    news: New;
    saveNews: (data: New) => void,
};
