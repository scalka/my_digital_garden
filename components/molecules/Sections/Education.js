export default function Experience() {
  return (
    <section id="education-section">
      <hr />
      <h2>
        <mark class="highlighted">Education</mark>
      </h2>
      <article class="cards-container">
        <div class="card">
          <div class="card-logo">
            <img class="img-logo" src="images/iadt.png" alt="IADT logo" />
          </div>
          <div>
            <h3>BSc (Honours) in Creative Computing and Web Engineering</h3>
            <h5 class="h-sub small">
              Institute of Art, Design + Technology &#8212; Dublin, Ireland
            </h5>
            <h5 class="h-sub small">September 2014 &#8212; May 2018</h5>
          </div>
          <div class="card-content">
            <p>Graduated with First Class Honours - GPA 3.9/4</p>
            <p>
              Technical computing skills: developed the technical skills
              required to implement computing applications, with an emphasis on
              web, cloud and mobile applications.
              <br />
              Creative problem solving: learnt to analyse problems and to
              develop creative solutions to those problems.
              <br />
              Design thinking: learnt to design computing applications that
              satisfy the goals and requirements of end-users.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-logo">
            <img class="img-logo" src="images/hdm.png" alt="HDM logo" />
          </div>
          <div>
            <h3>Mobile Media Minor</h3>
            <h5 class="h-sub small">
              Stuttgart Media University &#8212; Stuttgart, Germany
            </h5>
            <h5 class="h-sub small">September 2015 &#8212; July 2016</h5>
          </div>
          <div class="card-content">
            <p>
              Software technology: configuration and programming of complex
              software systems. Research networks: configuration and
              administration of communication networks and their security
              requirements.
              <br />
              Internet technologies: programming web applications and shared
              systems.
              <br />
              Computer graphics: basic computer graphics and computer animation.
              <br />
              Design: User Interface, User Experience and Mobile Game design.
              <br />
            </p>
          </div>
        </div>
      </article>
      <a id="download-btn" href="./Sylwia_Calka_CV.pdf" target="_blank">
        <i class="fas fa-paperclip"></i> Resume
      </a>
    </section>
  );
}
