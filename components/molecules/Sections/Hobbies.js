import styles from './Hobbies.module.scss';

export default function Hobbies() {
  return (
    <section id="hobbies-section" className="hide-m hide-s">
      <article>
        <div className={styles.hobbies}>
          <h2 className={styles.hobbies_header}>Hobbies</h2>
          <ol className={styles.hobbies_list}>
            <li id="cycling" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Cycling</span>
            </li>
            <li id="buju" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Bullet Journaling</span>
            </li>
            <li id="photography" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Photography</span>
            </li>
            <li id="yoga" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Yoga</span>
            </li>
            <li id="hiking" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Hiking</span>
            </li>
            <li id="dancing" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Dancing</span>
            </li>
            <li id="cooking" className={styles.hobbies_item}>
              <span className={styles.hobbies_title}>Cooking</span>
            </li>
          </ol>
        </div>
        <img
          id="hobby-img"
          className={styles.hobbies_img_medium}
          src="images/profile.png"
          alt="Sylwia's hobbies"
        />
      </article>
    </section>
  );
}
