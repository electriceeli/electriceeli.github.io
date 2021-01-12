import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div style={{ textAlign: "center" }}>
        <Link href="/">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive;",
              marginLeft: 25
            }}
          >
            Home
          </a>
        </Link>
        <Link href="/portfolio">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive;",
              marginLeft: 25
            }}
          >
            Portfolio
          </a>
        </Link>
        <Link href="/resume">
          <a
            style={{
              fontFamily: "Architects Daughter, cursive;",
              marginLeft: 25
            }}
          >
            Resume
          </a>
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: 10 }}>
        <img src="/apple-touch-icon.png" width="100" height="100" />
      </div>
      <hr />
    </header>
  );
}
