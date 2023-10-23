import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import styles from "./index.module.css";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className={styles.loginButton}
        onClick={
          sessionData
            ? () => void signOut({ callbackUrl: `${window.location.origin}` })
            : () => void signIn()
        }
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
