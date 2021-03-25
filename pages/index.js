import Head from 'next/head';

import HomeLayout, { siteTitle } from '../components/layouts/homeLayout';
import Intro from '../components/molecules/Sections/Intro';
import Hobbies from '../components/molecules/Sections/Hobbies';
import About from '../components/molecules/Sections/About';
import Experience from '../components/molecules/Sections/Experience';
import Footer from '../components/molecules/Sections/Footer';
import Date from '../components/atoms/Date';

export default function Home({ allPostsData }) {
  return (
    <HomeLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <About />
      <Hobbies />
      <Experience />
      <Footer />
    </HomeLayout>
  );
}
