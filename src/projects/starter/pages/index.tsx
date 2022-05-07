import type { NextPage } from "next";
import Head from "next/head";
import Test from "src/components/Test";

const Home: NextPage = () => {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>New Project!</title>
        <meta name="description" content="New project!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-[1] flex-col justify-center items-center min-h-screen px-0 py-16">
        <h1 className="m-0 text-[4rem] leading-[1.15] font-bold">
          New Project!
        </h1>
        <Test />
      </main>
    </div>
  );
};

export default Home;
