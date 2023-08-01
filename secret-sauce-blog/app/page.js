import PostPreview from '@/components/PostPreview';

const getAllPosts = async () => {
  const response = await fetch('http://localhost:3001/rest/blogposts');

  if (!response.ok) {
    throw new Error('The posts?! Where are they?!');
  }

  return response.json();
};

export default async function Home() {
  const allPosts = await getAllPosts();
  return (
    <main className='flex flex-col'>
      <section className='flex w-full items-center justify-center'>
        <p className='mb-2 p-4 text-justify md:w-2/3'>
          Welcome aboard the tranquil waters of Mar de Cor! Just like the
          boundless ocean, our blog embraces a sea of diverse topics, each wave
          carrying a tale waiting to be explored. But remember, you&apos;re not
          sailing alone on this exhilarating voyage. Share the magic of Mar de
          Cor with your dear companions, letting them too sail along with you.
          The more souls we reach, the wider our horizon of inspiration becomes.
        </p>
      </section>
      <ul
        aria-label='grid of post previews'
        className='mx-1 grid flex-1 gap-2 pb-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {allPosts.map((post) => (
          <PostPreview key={post.id} data={post} />
        ))}
      </ul>
    </main>
  );
}
