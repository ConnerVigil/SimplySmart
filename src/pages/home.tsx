import React from "react";
import styles from "./index.module.css";
import Head from "next/head";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        {/* Your dashboard content goes here */}
        <div>
          <Head>
            <title>Home</title>
          </Head>
          <main className={styles.mainHome}>
            <h1 className={styles.title}>Home</h1>
          </main>
        </div>
        <h1>Welcome to the Dashboard</h1>
      </main>
    </div>
  );
}
