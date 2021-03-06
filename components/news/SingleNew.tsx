import React, { useRef } from 'react';
import Link from 'next/link';
import { Hit } from '@/interfaces/news';
import SingleNewContent from './SingleNewContent';
import { cleanUrl } from '@/helpers/helpers';

interface Props {
  hit: Hit;
}

const SingleNew = ({ hit }: Props) => {

  const { objectID, story_url, url } = hit;

  const classRef = useRef("hit-row relative z-20 flex flex-col items-start w-full md:max-h-36 lg:max-h-24 p-6 border-2 border-gray-400 rounded-md overflow-hidden opacity-100 transition-opacity hover:opacity-70");

  return (
    // Validate if story_url or url are not empty, but...
    (story_url || url)
      ? (
        <Link href={story_url ? cleanUrl(story_url) : cleanUrl(url!)} >
          <a target="_blank" className={`${classRef.current} hover:cursor-pointer`}>
            <SingleNewContent key={objectID} {...{ hit }} />
          </a>
        </Link>
      )
      // but if so, the hit is not allowed to redirect
      : (
        <div className={`${classRef.current} hover:cursor-not-allowed`}>
          <SingleNewContent key={objectID} {...{ hit }} />
        </div>
      )
  );
};

export default SingleNew;
