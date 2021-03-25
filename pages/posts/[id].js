import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import PostLayout from '../../components/layouts/postLayout';
import Date from '../../components/atoms/Date';

import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }) {
  return (
    <PostLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </PostLayout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    // return 404 if page not found
    // can be: true, blocking
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
