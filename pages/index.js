import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  };
}

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <hr />
      <p>🚧 Under construction. Come back soon! 🚧</p>
      <p>Signed,</p>
      <p>Eli :)</p>
      <hr />
      {/* TODO: Build page then actually use the posts */}
      {/* Built with https://css-tricks.com/building-a-blog-with-next-js/ */}
      {/* TODO: Build a separate portfolio page that shows games/showGO */}
      {/* <ul>
        {props.posts.map(function(post, idx) {
          return (
            <li key={idx}>
              <Link href={"/posts/" + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </DefaultLayout>
  );
}
