import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BatForms</title>
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
};
