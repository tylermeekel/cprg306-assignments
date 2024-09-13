import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Tyler Meekel</p>
            <Link className="underline text-cyan-600 hover:text-cyan-300" href="https://github.com/tylermeekel/cprg306-assignments">Github Repo Link</Link>
        </div>
    )
}