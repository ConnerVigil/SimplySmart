import Head from "next/head";
import { api } from "~/utils/api";
import styles from "./index.module.css";
import AuthShowcase from "./auth-showcase";

export default function LandingPage() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Portfolio Manager</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Portfolio Manager</h1>
          <AuthShowcase />
        </div>
      </main>
    </>
  );
}
