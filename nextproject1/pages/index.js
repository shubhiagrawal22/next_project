import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Next Project | Home</title>
      <meta name="keywords" content="next" />
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem{" "}
      </p>
      <Link href="/tuts" className={styles.btn}>See content listing</Link>
    </div>
    </>
  );
}
