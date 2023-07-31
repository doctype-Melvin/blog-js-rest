'use client';
import { formatDistance } from 'date-fns';
import Link from 'next/link';

export default function PostPreview({ data }) {
  const maxContentLength = 140;
  const previewContent = data.content.slice(0, maxContentLength) + '...';
  const published = formatDistance(new Date(data.created), Date.now());

  return (
    <li
      aria-label='Post Preview'
      className='mx-2 rounded bg-gradient-to-br from-amber-100 to-amber-200 p-3'
    >
      <p className='text-sm'>
        Published {published} ago by {data.author}
      </p>
      <h1 className='text-lg'>{data.title}</h1>
      <p>{previewContent}</p>
      <Link href={`/posts/${data.id}`} className='font-semibold'>
        read more
      </Link>
    </li>
  );
}
