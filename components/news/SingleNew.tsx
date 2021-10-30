import React, { useState } from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { Hit } from "../../interfaces/news";

interface Props {
  hit: Hit;
}

const SingleNew = ({ hit }: Props) => {

  const [fav, setFav] = useState(false);
  const { author, story_title, story_url, url } = hit;

  return (
    <Link href={story_url ? story_url! : url!}>
      <a className="relative flex flex-col items-start w-full px-4 py-6 border-2 rounded-md overflow-hidden hover:cursor-pointer">
        <p className="text-xs capitalize w-3/4 text-gray-500 font-light">Author: <b>{author}</b></p>
        <p className="text-sm text-gray-600 font-semibold" dangerouslySetInnerHTML={{ __html: story_title! }} />
        <button className="absolute z-50 flex justify-center items-center h-full w-1/5 bg-gray-100 top-0 right-0">
          {
            fav
              ? (<HeartIcon className="h-5 w-5 text-red-600" />)
              : (<HeartIconOutline className="h-5 w-5 text-red-600" />)
          }
        </button>
      </a></Link>
  );
};

export default SingleNew;
