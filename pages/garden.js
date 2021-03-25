import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';

export default function GardenPage({ allPostsData }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h1>Digital garden</h1>
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
