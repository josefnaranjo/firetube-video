"use client";

import Image from "next/image"
import Link from 'next/link'
import styles from "./navbar.module.css"
import SignIn from "./sign-in"
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from  "react";
import { User } from "firebase/auth";

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    useEffect( () => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user)
        });
        return () => unsubscribe();
    });
    
    // Returns a JSX element that displays the navbar based on whether or not user is logged in
    return (
        <nav className={styles.nav}> 
            <Link href="/" >
                <Image width={90}  height={20}
                    src="/youtube-logo.svg" alt="Youtube Logo" />
            </Link>
            {
                // TODO : Implement add a upload
            }
            <SignIn user={user} />
        </nav>
    )
}