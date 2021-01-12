import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div style={{ textAlign: "center" }}>
        <Link href="/portfolio">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive"
            }}
          >
            Portfolio
          </a>
        </Link>

        <Link href="/resume">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive",
              marginLeft: 20
            }}
          >
            Resume
          </a>
        </Link>

        <Link href="/pets">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive",
              marginLeft: 20
            }}
          >
            Pets
          </a>
        </Link>

        <Link href="/blog">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive",
              marginLeft: 20
            }}
          >
            Blog
          </a>
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: 10 }}>
        <Link href="/">
          <a>
            <img src="/apple-touch-icon.png" alt="An E logo for Eli" width="100" height="100" />
          </a>
        </Link>
      </div>
      <hr />
    </header>
  );
}
