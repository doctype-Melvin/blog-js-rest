import Image from 'next/image';
import { format } from 'date-fns';
import Share from '../Share';

export default function PostFull({ data }) {
  const datePublished = format(new Date(data.created), 'MM/dd/yyyy');

  return (
    <section aria-label='full post' className='w-11/12 md:w-3/4 lg:w-3/5'>
      <section aria-label='post header' className='flex w-full justify-between'>
        <p aria-label='author'>{data.author}</p>
        <p aria-label='date'>{datePublished}</p>
      </section>
      <Share data={data} />
      <section aria-label='post content'>
        <h1 aria-label='post title' className='text-3xl'>
          {data.title}
        </h1>
        <h2 aria-label='post subtitle' className='text-2xl'>
          {data.subtitle}
        </h2>
        <Image
          src={data.image}
          alt={'beautiful image'}
          width={250}
          height={250}
          className='mx-auto my-5'
        />
        <p className='text-justify'>{data.content}</p>
        <Share data={data} />
      </section>
      {/* Place share button here */}
    </section>
  );
}
