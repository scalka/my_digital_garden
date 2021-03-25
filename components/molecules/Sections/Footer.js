export default function Footer() {
  const copyEmailToClipboard = () => {
    let tooltip = document.querySelector('.copied-msg');
    tooltip.classList.add('visible');
    /* Get the text field */
    let el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = 'calka.sylwia@gmail.com';
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {
      position: 'absolute',
      left: '-9999px',
    };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

    setTimeout(() => {
      tooltip.classList.remove('visible');
    }, 2000);
    return;
  };

  return (
    <footer id="contact-section">
      <h2>
        <mark className="highlighted">Contact</mark>
      </h2>
      <address property="email">
        <h3>
          To get in touch, write to{' '}
          <a className="nav-anchor" onClick={copyEmailToClipboard}>
            calka.sylwia@gmail.com
          </a>
          <span className="copied-msg"> &#8212; copied to your clipboard</span>
        </h3>
      </address>
      <ul className="links-list">
        <li className="links-list-item">
          <a
            href="https://ie.linkedin.com/in/sylwia-calka-08387069"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>LinkedIn
          </a>
        </li>
        <li className="links-list-item">
          <a href="https://github.com/scalka" target="_blank">
            <i className="fab fa-github-square"></i>GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
