import DefaultLayout from "@layouts/default";

export default function Resume(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h3 style={{ fontFamily: "Architects Daughter, cursive;" }}>Work</h3>

      <h4 style={{ fontFamily: "Oswald, sans-serif;" }}>
        🐄 Livestock Nutrition Center / Software Engineer - 2019 to present
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        Full stack Javascript developer wearing all the hats. Testing,
        researching, planning, bug squashing, anything the team needs.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif;" }}>
        🌼 New Daisy Theatre / Marketing Manager - 2016 to 2018
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        I ran social media, web, and physical marketing for a 1200 cap venue. I
        worked with artist management on execution and ad mat.
      </p>

      <h3 style={{ fontFamily: "Architects Daughter, cursive;" }}>Education</h3>

      <h4 style={{ fontFamily: "Oswald, sans-serif;" }}>
        🤠 Nashville Software School / C23 - 2018
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        I was in the 23rd cohort of Nashville Software School. A full time web
        development bootcamp focusing on Node.js for backend.
      </p>

      <h4 style={{ fontFamily: "Oswald, sans-serif;" }}>
        🐯 University of Memphis / Bachelor of Music - 2016
      </h4>
      <p style={{ fontFamily: "Oswald, sans-serif;" }}>
        A major in music industry and a minor in German. Picking a major was
        hard.
      </p>
    </DefaultLayout>
  );
}
