import PostFull from '@/components/PostFull';

const getSinglePost = async (id) => {
  const response = await fetch(`http://localhost:3001/rest/blogpost/${id}`);

  if (!response.ok) {
    throw new Error('The posts?! Where are they?!');
  }

  return response.json();
};

export default async function DetailPage({ params }) {
  const { id } = params;
  const postData = await getSinglePost(id);
  return postData && <PostFull data={postData} />;
}
