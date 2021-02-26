import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/layouts/layout';
import Date from '../components/atoms/Date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This will be a super cool weekly recipe generator</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {date && <Date dateString={date} />}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//To use Server-side Rendering, you need to export getServerSideProps(context) instead of getStaticProps from your page.
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData();
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allPostsData,
    },
  };
}
