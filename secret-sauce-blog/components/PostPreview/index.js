'use client';
import { formatDistance } from 'date-fns';
import Link from 'next/link';

export default function PostPreview({ data }) {
  const maxContentLength = 140;
  const previewContent = data.content.slice(0, maxContentLength) + '...';
  const published = formatDistance(new Date(data.created), Date.now());

  return (
    <li aria-label='Post Preview' className='p-2'>
      <p>
        Published {published} ago by {data.author}
      </p>
      <h1>{data.title}</h1>
      <p>{previewContent}</p>
      <Link href={`/posts/${data.id}`}>read more</Link>
    </li>
  );
}
