import Link from "next/link";

export default function Header() {
  return (
    <header>
      <p>Portfolio for Eli Wilson (@electriceeli)</p>
      <Link href="/">
        <a>Home</a>
      </Link>
      <hr />
    </header>
  );
}
