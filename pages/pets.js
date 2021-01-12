import DefaultLayout from "@layouts/default";
import Image from "next/image";

export default function Pets(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>Missy 🐈</h2>
      </div>
      <Image
        src="/missy.png"
        alt="Pictures of my cat Missy"
        width={550}
        height={300}
      />

      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>
          Sophie 🐕
        </h2>
      </div>
      <Image
        src="/sophie.png"
        alt="Pictures of my dog Sophie"
        width={550}
        height={300}
      />
    </DefaultLayout>
  );
}
