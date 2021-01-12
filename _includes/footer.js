export default function Footer() {
  return (
    <footer style={{ textAlign: "right", marginTop: 75 }}>
      <a
        href="https://github.com/electriceeli"
        target="_blank"
        style={{ fontFamily: "Architects Daughter, cursive", marginLeft: 10 }}
      >
        GitHub
      </a>
      <a
        href="https://twitter.com/electriceeli"
        target="_blank"
        style={{ fontFamily: "Architects Daughter, cursive", marginLeft: 10 }}
      >
        Twitter
      </a>
      <a
        href="https://electriceeli.itch.io/"
        target="_blank"
        style={{ fontFamily: "Architects Daughter, cursive", marginLeft: 10 }}
      >
        Itch
      </a>

      <p style={{ fontFamily: "Architects Daughter, cursive" }}>
        ©2021 Eli Wilson
      </p>
    </footer>
  );
}