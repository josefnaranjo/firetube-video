"use client";

import { Fragment } from "react";
import { signInWithGoogle, signOut } from "../firebase/firebase"
import styles from  "./sign-in.module.css";
import { User } from "firebase/auth";

interface SignProps {
    user: User | null;
}
// Sign In component
export default function SignIn({ user }: SignProps) {
    // Conditional rendering of buttons
    return (
        <Fragment>
            {
                // If user is logged in, show Sign Out button
                user ? (
                    <button className={styles.signin} onClick={signOut}>
                        Sign Out
                    </button>
                ) : (
                    // If user is not logged in, show Sign In button
                    <button className={styles.signin} onClick={signInWithGoogle}>
                        Sign In
                    </button>
                )
            }
        </Fragment>
    )
}
