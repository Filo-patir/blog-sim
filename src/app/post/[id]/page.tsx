import React from 'react';
import { notFound } from 'next/navigation';

import { getPostByID } from '@/lib/data';

export default async function Page(props: {
  params: Promise<{
    id: string;
  }>;
}) {
  const id = (await props.params).id.split('%2C')[0];
  console.log(id);
  const post = getPostByID(id);
  if (!post) return notFound();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
