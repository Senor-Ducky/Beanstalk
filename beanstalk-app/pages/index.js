import Head from "next/head";
import styles from "@/styles/Home.module.css";

// components
import GenerateAPIForm from "@/Components/GenerateAPIForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beanstalk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenerateAPIForm />
    </>
  );
}