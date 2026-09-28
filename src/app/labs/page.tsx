import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2 id="wd-student-name">Hung-Ju Lin</h2>
      <p id="wd-student-section">CS5610 Web Development, Section 02</p>
      <a
        id="wd-github"
        href="https://github.com/song856854132/kambaz-node-server-song856854132"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub repository
      </a>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4: Client States</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: React and Next.js</Link>
        </li>
        <li>
          <Link href="/">Kambaz Home</Link>
        </li>
      </ul>
    </div>
  );
}