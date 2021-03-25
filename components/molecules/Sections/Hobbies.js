export default function Hobbies() {
  return (
    <section id="hobbies-section" class="hide-m hide-s">
      <article>
        <div class="hobbies_container">
          <h2 class="hobbies_header">Hobbies</h2>
          <ol class="hobbies_list">
            <li id="cycling" class="hobbies_item">
              <span class="hobbies_title">Cycling</span>
            </li>
            <li id="buju" class="hobbies_item">
              <span class="hobbies_title">Bullet Journaling</span>
            </li>
            <li id="photography" class="hobbies_item">
              <span class="hobbies_title">Photography</span>
            </li>
            <li id="yoga" class="hobbies_item">
              <span class="hobbies_title">Yoga</span>
            </li>
            <li id="hiking" class="hobbies_item">
              <span class="hobbies_title">Hiking</span>
            </li>
            <li id="dancing" class="hobbies_item">
              <span class="hobbies_title">Dancing</span>
            </li>
            <li id="cooking" class="hobbies_item">
              <span class="hobbies_title">Cooking</span>
            </li>
          </ol>
        </div>
        <img
          id="hobby-img"
          class=" hobbies_img_medium"
          src="images/profile.png"
          alt="Sylwia's hobbies"
        />
      </article>
    </section>
  );
}
