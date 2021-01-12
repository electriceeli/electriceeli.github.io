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
      {/* Built with https://css-tricks.com/building-a-blog-with-next-js/ */}
      {/* TODO: Build a separate portfolio page that shows games/showGO */}

      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        Thanks for stopping by! Take you shoes off, relax, no one here will
        judge you. Hi, my name is Eli. Have we met? If not, it's great to meet
        you. This is my home. It's a little small, a little plain, a little
        just-exactly-like-I-like-it.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        I believe solving problems isn't about libraries or languages. I work
        with people to meet needs, create, entertain, and inspire. My tool of
        choice is not having to choose a tool at all because the problem was
        solved by simplifying what is rather than adding what isn't.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        When I'm on the wrong side of a laptop I like to play Sea of Thieves
        with my friends, soccer in recreational adult leagues, go for a run on
        the Tennessee river, or make cool sounds with a constantly changing
        array of guitar pedals and a semi-hollow electric. I also doom scroll
        Twitter to catch up on the latest.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        Feel free to read more of my ramblings, check my work, hire me if you
        want to have a good friend with a kind sense of humor bless you during
        the work week.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        Throw a line my way using the links at the bottom. I'll happily argue,
        laugh, or cry depending on the quality of your cold open and the number
        of bugs in my backlog.
      </p>

      <h3>🧵 Recent Posts</h3>
      {props.posts.map(function(post, idx) {
        return (
          <h4 key={idx}>
            <Link href={"/posts/" + post.slug}>
              <a>{post.title}</a>
            </Link>
          </h4>
        );
      })}
    </DefaultLayout>
  );
}
