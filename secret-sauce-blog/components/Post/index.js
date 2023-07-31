import Image from 'next/image';

export default function Post({
  author,
  date,
  title,
  subtitle,
  imgSrc,
  content,
}) {
  return (
    <section aria-label='full post'>
      <section aria-label='post header'>
        <p aria-label='author'>{author}</p>
        <p aria-label='date'>{date}</p>
      </section>
      <section aria-label='post content'>
        <h1 aria-label='post title'>{title}</h1>
        {subtitle && <h2 aria-label='post subtitle'>{subtitle}</h2>}
        <Image src={imgSrc} alt={'beautiful image'} width={500} height={500} />
        <p>{content}</p>
      </section>
      {/* Place share button here */}
    </section>
  );
}
