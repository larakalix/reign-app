import React, { useState } from "react"
import { ClockIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/solid';
import { Hit } from '@/interfaces/news';
import { calcTime } from "@/helpers/helpers";
import useFavs from "@/hooks/useFavs";

interface Props {
    hit: Hit;
}

const SingleNewContent = ({ hit }: Props) => {

    const { favs, addFav, removeFavHit } = useFavs();
    const { objectID, author, created_at, story_title } = hit;
    const [state, setState] = useState(favs.filter(h => h.objectID === objectID).length);

    const addFave = (e: any, hit: Hit) => {
        e.preventDefault();
        if (favs.filter(h => h.objectID === objectID).length === 0)
            addFav(hit);
        else if (favs.filter(h => h.objectID === objectID).length === 1)
            removeFavHit(objectID);
    };

    return (
        <>
            <p className="inline-flex items-center mb-2 w-3/4">
                <ClockIcon className="h-4 w-4 text-gray-700" />
                <span className="ml-2 text-xs lg:text-sm text-gray-500">{calcTime({ date: created_at })} ago by {author}</span>
            </p>
            <p className="text-sm text-gray-600 w-3/4 font-semibold" dangerouslySetInnerHTML={{ __html: story_title! }} />
            <button className="absolute z-50 flex justify-center items-center h-full w-1/5 bg-gray-100 top-0 right-0"
                onClick={(e) => addFave(e, hit)}>
                {
                    (favs.filter(h => h.objectID === objectID).length === 1)
                        ? <HeartIconOutline className="h-5 w-5 text-red-600" /> : <HeartIcon className="h-5 w-5 text-red-600" />
                }
            </button>
        </>
    )
}

export default SingleNewContent
