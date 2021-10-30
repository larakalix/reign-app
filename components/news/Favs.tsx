import useNews from "@/hooks/useNews";
import React from "react";
import Empty from "../general/Empty";
import SingleNew from "./SingleNew";

const Favs = () => {
    const { favs } = useNews();

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
                    : <Empty message="No faves found" />
            }
        </>
    )
}

export default Favs
