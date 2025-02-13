import React from 'react';

import { Carousel } from '@/components/homepage/Carousel';
import { getRandomPost } from '@/lib/data';

import { PostGridCard } from '../../components/common/PostGridCard';

export default function Home() {
  return (
    <>
      <Carousel
        images={[
          { src: 'globe.svg', alt: 'globe' },
          { src: 'next.svg', alt: 'next' },
          { src: 'vercel.svg', alt: 'vercel' },
        ]}
      />
      <div id="Trending" className="flex flex-col gap-14">
        <div id="TrendingPosts" className="flex gap-72">
          <PostGridCard post={getRandomPost()} />
          <PostGridCard post={getRandomPost()} />
        </div>
      </div>
    </>
  );
}
