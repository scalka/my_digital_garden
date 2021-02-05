import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layouts/layout';

export default function SaladRecipe() {
  return (
    <Layout>
      <Head>
        <title>Salad recipe</title>
      </Head>
      <h1>Salad</h1>
      <Link href="/">
        <a className="foo" target="_blank" rel="noopener noreferrer">
          Return home
        </a>
      </Link>
    </Layout>
  );
}
