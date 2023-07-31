const getAllPosts = async () => {
  const response = await fetch('http://localhost:3001/rest/blogposts');

  if (!response.ok) {
    throw new Error('The posts?! Where are they?!');
  }

  return response.json();
};

export default async function Home() {
  const allPosts = await getAllPosts();
  return <main>{allPosts ? <div>Success</div> : <div>Oopss...</div>}</main>;
}
