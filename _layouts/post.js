import DefaultLayout from "@layouts/default";
import Head from "next/head";

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1 style={{fontFamily: 'Architects Daughter, cursive;'}}>{props.title}</h1>
        <div style={{fontFamily: 'Oswald, sans-serif;'}} dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </DefaultLayout>
  );
}
