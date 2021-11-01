import React from "react";
import useFavs from "@/hooks/useFavs";
import { Hit } from "@/interfaces/news";
import Empty from "../general/Empty";
import SingleNew from "../news/SingleNew";
import Grid from "../general/Grid";

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
                        <Grid>
                            {
                                favs.map((hit) => (
                                    <SingleNew key={hit.objectID} hit={hit} />
                                ))
                            }
                        </Grid>
                    )
                    : <Empty state="error" message="No faves found" />
            }
        </>
    )
}

export default Favs
