import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className=" text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="underline text-cyan-600 hover:text-cyan-300"><Link href="/week-2">Week 2</Link></li>
        <li className="underline text-cyan-600 hover:text-cyan-300"><Link href="/week-3">Week 3</Link></li>
      </ul>
    </main>
  );
}
