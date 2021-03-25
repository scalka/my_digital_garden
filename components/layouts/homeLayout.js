import Head from 'next/head';
import styles from './homeLayout.module.scss';
import cn from 'classnames';
import MainMenu from '../molecules/Menus/Main';

export const siteTitle = "Sylwia's digital garden";

export default function HomeLayout({ children, theme = 'light' }) {
  return (
    <div
      className={cn({
        [styles.home]: true,
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sylwia's Calka portfolio and digital garden"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainMenu />
      <main className={styles.sections}>{children}</main>
    </div>
  );
}
