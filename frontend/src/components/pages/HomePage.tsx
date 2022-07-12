import React from 'react';
import Head from 'next/head';
import Header from '../Header';

const HomePage: React.FC = () => {
    return(
    <>
    <Head>
        <title>BatForms</title>
    </Head>
    <Header />
    </>
    );
}

export default HomePage;

