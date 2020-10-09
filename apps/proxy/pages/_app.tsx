import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NX Monorepo!</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
