import Link from 'next/link';
import styles from './Main.module.scss';
export default function MainMenu() {
  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
        <a href="#front-section">
          <img
            className={styles.logo__img}
            src="images/myLogo2.svg"
            alt="Sylwia's logo"
          />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#experience-section">Experience</a>
          </li>
          <li>
            <a href="#projects-section">Portfolio</a>
          </li>
          <li>
            <a href="#skills-section">Skills</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
          <li>
            <Link href="/garden">Digital Garden</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
