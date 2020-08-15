import Link from "next/link";
import Head from "next/head";
import Layout from "../../src/template/Layout";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </h2>
        <img src="/vercel.svg" alt="Vertical Logo" className="logo" />
      </Layout>
    </>
  );
};

export default FirstPost;
