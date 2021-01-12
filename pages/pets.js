import DefaultLayout from "@layouts/default";

export default function Pets(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>Missy 🐈</h2>
      </div>
      <img
        src="/missy.jpg"
        alt="Pictures of my cat Missy"
        width="100%"
        height="65%"
      />

      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>
          Sophie 🐕
        </h2>
      </div>
      <img
        src="/sophie.jpg"
        alt="Pictures of my dog Sophie"
        width="100%"
        height="65%"
      />
    </DefaultLayout>
  );
}
