import DefaultLayout from "@layouts/default";
import Head from "next/head";

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <div style={{ textAlign: "right" }}>
          <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>
            {props.title}
          </h2>
          <h3 style={{ fontFamily: "Architects Daughter, cursive" }}>
            {props.date}
          </h3>
        </div>
        <div
          style={{ fontFamily: "Oswald, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </article>
    </DefaultLayout>
  );
}
