export default function FooterNav() {
  return (
    <nav className="footer-nav" aria-label="App navigation">
      <a className="footer-nav__link footer-nav__link--active" href="/products">
        Scan
      </a>
      <a className="footer-nav__link" href="/vehicles">
        My Car
      </a>
      <a className="footer-nav__link" href="/profile">
        History
      </a>
    </nav>
  );
}