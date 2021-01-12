import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";

export async function getStaticProps() {
  const config = await getConfig();
  const posts = await getAllPosts();

  return {
    props: {
      posts,
      title: config.title,
      description: config.description
    }
  };
}

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      {/* Built with https://css-tricks.com/building-a-blog-with-next-js/ */}
      {/* TODO: Build a separate portfolio page that shows games/showGO */}
      <div style={{ textAlign: "right" }}>
        <h2
          style={{
            fontFamily: "Architects Daughter, cursive",
          }}
        >
          All Posts. 🔮
        </h2>
      </div>

      {props.posts.map(function(post, idx) {
        return (
          <h4 key={idx}>
            <Link href={"/posts/" + post.slug}>
              <a>
                {post.title} ({post.date})
              </a>
            </Link>
          </h4>
        );
      })}
    </DefaultLayout>
  );
}
