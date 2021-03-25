import Head from 'next/head';
import styles from './PostLayout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export const siteTitle = 'Weekly recipe generator';

export default function PostLayout({ children, theme = 'light' }) {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Recipe for a fantastic salas" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
