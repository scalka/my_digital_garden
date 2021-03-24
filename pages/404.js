import Head from 'next/head';

export default function NotFoundPage({ postData }) {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <h1>404 - Page not found</h1>
    </div>
  );
}
