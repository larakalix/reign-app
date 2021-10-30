import React from "react"
import { HeartIcon } from '@heroicons/react/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';

interface Props {
    author: string,
    created_at: string;
    story_title: null | string;
    fav: boolean;
}

const SingleNewContent = ({ author, created_at, story_title, fav }: Props) => {
    return (
        <>
            <p className="text-xs capitalize text-gray-500 font-light">Author: <b>{author}</b></p>
            <p className="text-sm text-gray-600 w-3/4 font-semibold" dangerouslySetInnerHTML={{ __html: story_title! }} />
            <button className="absolute z-50 flex justify-center items-center h-full w-1/5 bg-gray-100 top-0 right-0">
                {
                    fav
                        ? (<HeartIcon className="h-5 w-5 text-red-600" />)
                        : (<HeartIconOutline className="h-5 w-5 text-red-600" />)
                }
            </button>
        </>
    )
}

export default SingleNewContent
