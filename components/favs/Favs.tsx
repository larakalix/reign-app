import useFavs from "@/hooks/useFavs";
import { Hit } from "@/interfaces/news";
import React from "react";
import Empty from "../general/Empty";
import SingleNew from "../news/SingleNew";

interface Props {
    favs: Hit[];
}

const Favs = () => {

    const { favs } = useFavs();

    return (
        <>
            {
                favs?.length > 0 ?
                    (
                        <div className="grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                            {
                                favs.map((hit) => (
                                    <SingleNew key={hit.objectID} hit={hit} />
                                ))
                            }
                        </div>
                    )
                    : <Empty state="error" message="No faves found" />
            }
        </>
    )
}

export default Favs
