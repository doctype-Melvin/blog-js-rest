'use client';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import Share from '../Share';
import Image from 'next/image';

export default function PostPreview({ data }) {
  const maxContentLength = 140;
  const previewContent = data.content.slice(0, maxContentLength) + '...';
  const published = formatDistance(new Date(data.created), Date.now());

  return (
    <li
      aria-label='Post Preview'
      className='border-black-200 mx-2 cursor-pointer rounded border-2 border-solid p-3 transition duration-500 ease-in-out odd:hover:bg-orange-300 even:hover:bg-yellow-200 dark:odd:hover:bg-orange-600 dark:even:hover:bg-yellow-500'
    >
      <Link href={`/posts/${data.id}`} className='relative block'>
        <p className='text-sm'>
          Published {published} ago by {data.author}
        </p>
        <Image
          src={`${data.image}`}
          width={150}
          height={150}
          alt='beautiful photo of a snow covered mountain peak'
          className='mx-auto my-3'
        />
        <h1 className='text-lg'>{data.title}</h1>
        <p>{previewContent}</p>
        <div className='font-semibold'>read more</div>
      </Link>
      <Share data={data} />
    </li>
  );
}
