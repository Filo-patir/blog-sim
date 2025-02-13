'use client';

import React from 'react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Post } from '@/lib/definitions';

type PostCardProps = {
  post: Post;
};

export function PostGridCard({ post }: PostCardProps) {
  const router = useRouter();
  const navigate = () => {
    router.push(`/post/${post.id},${post.title}`);
  };
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{
        scale: [null, 1.1, 1.1],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ['easeInOut', 'easeOut'],
        },
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      onClick={navigate}
    >
      <div className="flex flex-col items-center bg-auto justify-end h-72 w-60 absolute">
        <Image
          src={post.image}
          alt=""
          width={60}
          height={72}
          className="w-full h-full absolute -z-10 rounded-xl"
          loading="lazy"
        />
        <h3 className="bg-primary p-2 mx-2 rounded-2xl self-start text-lg">{post.category}</h3>
        <h1 className="text-2xl font-bold px-4 py-2 text-stroke text-start w-full">{post.title}</h1>
      </div>
    </motion.div>
  );
}
