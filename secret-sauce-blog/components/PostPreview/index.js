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
      className='border-black-200 mx-2 cursor-pointer rounded border-2 border-solid p-3 odd:hover:bg-orange-300 even:hover:bg-yellow-200'
    >
      <Link href={`/posts/${data.id}`}>
        <p className='text-sm'>
          Published {published} ago by {data.author}
        </p>
        <h1 className='text-lg'>{data.title}</h1>
        <p>{previewContent}</p>
      </Link>
      <div className='font-semibold'>read more</div>
    </li>
  );
}
