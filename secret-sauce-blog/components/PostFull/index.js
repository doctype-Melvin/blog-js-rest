import Image from 'next/image';
import { format } from 'date-fns';
import Share from '../Share';

export default function PostFull({ data }) {
  const datePublished = format(new Date(data.created), 'MM/dd/yyyy');

  return (
    <section aria-label='full post' className='w-11/12 pb-5 md:w-3/4 lg:w-3/5'>
      <section aria-label='post date and author' className='flex w-full'>
        <p aria-label='date'>{datePublished}</p>
        <p aria-label='author' className='ml-3'>
          {data.author}
        </p>
      </section>
      <Share data={data} />
      <section aria-label='post content'>
        <section aria-label='post title and subtitle' className='text-center'>
          <h1 aria-label='post title' className='mb-2 text-3xl'>
            {data.title}
          </h1>
          <h2 aria-label='post subtitle' className='mb-3 text-2xl'>
            {data.subtitle}
          </h2>
        </section>
        <Image
          src={data.image}
          alt={'beautiful image'}
          width={250}
          height={250}
          className='mx-auto mb-4 lg:float-right lg:my-1 lg:ml-2'
        />
        <p className='mb-2 text-justify'>{data.content}</p>
        <Share data={data} />
      </section>
      {/* Place share button here */}
    </section>
  );
}
