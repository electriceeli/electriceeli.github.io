import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getRecentPosts } from "@api";

export async function getStaticProps() {
  const config = await getConfig();
  const posts = await getRecentPosts();

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
            fontFamily: "Architects Daughter, cursive"
          }}
        >
          Runner Available. 🪶
        </h2>
      </div>

      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        Thanks for stopping by! Take you shoes off and relax. Hi, my name is
        Eli. Have we met? If not, great to meet you. This is my home. It's a
        little small, a little plain, a little just-exactly-like-I-like-it. If
        you're just here for my pets (you know you want to){" "}
        {<a href="/pets">go here</a>}.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        I believe solving problems isn't about libraries or languages. I strive
        to meet needs, create, entertain, and inspire. My tool of choice is no
        tool at all because the problem is solved by simplifying what we have
        rather than adding what we don't.
      </p>

      <div style={{ textAlign: "center" }}>
        <img
          src="/tv-cat.jpg"
          width="85%"
          style={{ border: "5px solid black", borderRadius: 10 }}
        />
      </div>

      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        When I'm on the wrong side of a laptop, I play Sea of Thieves or Monster
        Hunter with friends, soccer, run by the Tennessee river, or make sounds
        with ever-changing arrays of pedals and a semi-hollow electric. I also
        doom scroll Twitter.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        Feel free to read more my ramblings, check my work, hire me if you want
        a good friend with a kind sense of humor blessing your work week.
      </p>
      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        Throw a line using the links at the bottom. I'll argue, laugh, or cry
        depending on the quality of your cold open and the bugs in my backlog.
        Otherwise, elijah.b.wilson at gmail.com.
      </p>

      <h3>🧵 Recent Posts</h3>
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
