import DefaultLayout from "@layouts/default";

export default function Resume(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>Tools ⚙️</h2>
      </div>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🕸️ Javascript
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        I build enterprise applications with React, Next.js, Node, GraphQL.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🔲 C#
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        I work in Unity primarily as a gameplay programmer to develop rapid
        prototypes of 2D and 3D games.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        ⛅ Cloud
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        I use resources from AWS (sometimes Azure too) for development like CDK,
        Lambda, DynamoDB, S3, EC2, Quicksight, Athena, Glue, and Elastic
        Beanstalk.
      </p>

      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontFamily: "Architects Daughter, cursive" }}>Story 📰</h2>
      </div>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🐄 Livestock Nutrition Center / Software Engineer - 2019 to present
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        Full stack Javascript developer wearing all the hats. Testing,
        researching, planning, bug squashing, anything the team needs.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🤠 Nashville Software School / C23 - 2018
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        I was in the 23rd cohort of Nashville Software School. A full time web
        development bootcamp focusing on Node.js for backend.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🌼 New Daisy Theatre / Marketing Manager - 2016 to 2018
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        I ran social media, web, and physical marketing for a 1200 cap venue. I
        worked with artist management on execution and ad mat.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 5 }}>
        🐯 University of Memphis / Bachelor of Music - 2016
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif", paddingLeft: 40 }}>
        A major in music industry and a minor in German. Picking a major was
        hard.
      </p>
    </DefaultLayout>
  );
}
