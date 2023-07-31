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
      <ul aria-label='grid of post previews'>
        {allPosts.map((post) => (
          <PostPreview key={post.id} data={post} />
        ))}
      </ul>
    </main>
  );
}
