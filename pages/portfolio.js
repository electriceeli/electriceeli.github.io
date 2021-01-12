import DefaultLayout from "@layouts/default";

export default function Portfolio(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div style={{ textAlign: "right" }}>
        <h3 style={{ fontFamily: "Architects Daughter, cursive" }}>
          Game Dev 🎮
        </h3>
      </div>
      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        Coming sooner than the web dev section.
      </p>

      <div style={{ textAlign: "right" }}>
        <h3 style={{ fontFamily: "Architects Daughter, cursive" }}>
          Web Dev 🕷️
        </h3>
      </div>
      <p style={{ fontFamily: "Oswald, sans-serif" }}>
        I'll fill this in one day too though...
      </p>
    </DefaultLayout>
  );
}
