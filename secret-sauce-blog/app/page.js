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
    <main className='flex-1'>
      <section class='md:h-1/7 h-50 flex w-full items-center justify-center'>
        <p className='mb-2 p-4 text-justify md:w-2/3'>
          Welcome to the Honeypot Blog, where sweetness awaits at every turn!
          Dive into our hive of articles, written with love and buzzing with
          creativity. And the best part? You&apos;re not alone in this
          indulgence. Share the sweetness with your friends by forwarding your
          favorite posts and spreading the joy of discovery. The adventure
          awaits! 🍯📚🐝
        </p>
      </section>
      <ul
        aria-label='grid of post previews'
        className='mx-1 grid gap-2 pb-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {allPosts.map((post) => (
          <PostPreview key={post.id} data={post} />
        ))}
      </ul>
    </main>
  );
}
