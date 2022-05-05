const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Post = ({ post }) => {
  return (
    <ul>
      <li>{post}</li>
    </ul>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const post = Math.floor(Math.random() * 1000);

  await sleep(40000);

  fetch(
    `https://3622-2800-810-487-5e7-6946-e48b-7dcf-a038.ngrok.io/post/${post}`
  ).catch(console.log);

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = [
    { params: { postId: "1" } },
    { params: { postId: "2" } },
    { params: { postId: "3" } },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default Post;
