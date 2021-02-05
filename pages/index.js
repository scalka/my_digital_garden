import Head from 'next/head';
import Layout, { siteTitle } from '../components/layouts/layout';
import utilStyles from '../styles/utils/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This will be a super cool weekly recipe generator</p>
      </section>
    </Layout>
  );
}
