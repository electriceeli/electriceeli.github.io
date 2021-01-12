import DefaultLayout from "@layouts/default";

export default function Pets(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h2 style={{fontFamily: 'Architects Daughter, cursive'}}>🐈 Missy</h2>
      <img src="/missy.png" width="100%" height="65%"/>

      <h2 style={{fontFamily: 'Architects Daughter, cursive'}}>🐕 Sophie</h2>
      <img src="/sophie.png" width="100%" height="65%"/>
    </DefaultLayout>
  );
}
