import Image from 'next/image';
import './footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <Image
        src="/logo-transparente.png"
        alt="logo"
        className="footer__logo"
        width={400}
        height={70}
      />
      <p className="footer__credits">© 2023 Julián Reyes Botello</p>
    </section>
  );
}
