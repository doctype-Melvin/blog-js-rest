import Image from 'next/image';
import { format } from 'date-fns';
import Share from '../Share';

export default function PostFull({ data }) {
  const datePublished = format(new Date(data.created), 'MM/dd/yyyy');

  return (
    <section aria-label='full post'>
      <section aria-label='post header'>
        <p aria-label='author'>{data.author}</p>
        <p aria-label='date'>{datePublished}</p>
      </section>
      <Share data={data} />
      <section aria-label='post content'>
        <h1 aria-label='post title'>{data.title}</h1>
        <h2 aria-label='post subtitle'>{data.subtitle}</h2>
        <Image
          src={data.image}
          alt={'beautiful image'}
          width={250}
          height={250}
        />
        <p>{data.content}</p>
      </section>
      {/* Place share button here */}
    </section>
  );
}
