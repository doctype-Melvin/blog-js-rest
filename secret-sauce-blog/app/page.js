import PostPreview from '@/components/PostPreview';

const getAllPosts = async () => {
  const response = await fetch('http://localhost:3001/rest/blogposts');

  if (!response.ok) {
    throw new Error('The posts?! Where are they?!');
  }

  return response.json();
};

// title, author, date, content;

export default async function Home() {
  const allPosts = await getAllPosts();
  return (
    <main>
      <p className='mb-2 bg-orange-300 p-3'>
        Welcome to the Honeypot Blog, where sweetness awaits at every turn! Dive
        into our hive of articles, written with love and buzzing with
        creativity. And the best part? You&apos;re not alone in this indulgence.
        Share the sweetness with your friends by forwarding your favorite posts
        and spreading the joy of discovery. The adventure awaits! 🍯📚🐝
      </p>
      <ul aria-label='grid of post previews'>
        {allPosts.map((post) => (
          <PostPreview key={post.id} data={post} />
        ))}
      </ul>
    </main>
  );
}
