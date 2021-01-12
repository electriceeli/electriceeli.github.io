import DefaultLayout from "@layouts/default";
import Image from "next/image";

export default function Pets(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h2 style={{fontFamily: 'Architects Daughter, cursive'}}>🐈 Missy</h2>
      <Image src="/missy.png" alt="Pictures of my cat Missy" width="100%" height="65%"/>

      <h2 style={{fontFamily: 'Architects Daughter, cursive'}}>🐕 Sophie</h2>
      <Image src="/sophie.png" alt="Pictures of my dog Sophie" width="100%" height="65%"/>
    </DefaultLayout>
  );
}
