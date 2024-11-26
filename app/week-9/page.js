"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, githubSignIn, firebaseSignOut } = useUserAuth();

    function handleLoginButtonClick() {
        githubSignIn();
    }

    function handleLogoutButtonClick() {
        firebaseSignOut();
    }

    return (
        <div className="flex items-center h-screen justify-center bg-slate-900">
            <div className="flex flex-col bg-slate-800 p-4 rounded-sm">
                {user ? <p>Welcome, {user.displayName} ({user.email})</p> : <p>You are not logged in!</p>}
                {user ? 
                    <div className="flex flex-col items-center">
                        <button onClick={handleLogoutButtonClick}>Logout</button>
                        <Link href="/week-9/shopping-list">Go to Shopping List</Link>
                    </div>
                : <button onClick={handleLoginButtonClick}>Login</button>}
            </div>
        </div>
    )
}