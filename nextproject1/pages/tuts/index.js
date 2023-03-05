import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/next.module.css";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { next: data }
    }
}

const Tuts = ({ next }) => {
  return (
    <>
      <Head>
        <title>Next Project | Content-listing</title>
        <meta name="keywords" content="next" />
      </Head>

      <div>
        <h1>next tutorial content</h1>
        {next.map(next => (
            <Link href={'/tuts/' + next.id} key={next.id} className={styles.single}>
                <h3>{ next.name }</h3>
            </Link>
        ))}
      </div>
    </>
  );
};

export default Tuts;
