import { useContext, useEffect } from "react";
import { NewsContext } from "@/context/newsProvider";

const useFavs = () => {

    const { favs, addFav, addFavs, removeFav } = useContext(NewsContext);

    // Remove hit from favorite hits
    const removeFavHit = (id: string) => {
        removeFav(id);
        localStorage.setItem('favs', JSON.stringify(favs));
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('favs')!);
        if (data) {
            localStorage.setItem('favs', JSON.stringify(data));
            addFavs(data);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (window)
            if (favs?.length > 0)
                localStorage.setItem('favs', JSON.stringify(favs));
    }, [favs]);

    return {
        favs,
        addFav,
        removeFavHit,
    }
}

export default useFavs
