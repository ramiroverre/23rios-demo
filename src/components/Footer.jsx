import logo from '../../assets/23rios-logo.png'

const cols = [
  {
    heading: 'Experiencias',
    items: [
      { label: 'Fábrica Artesanal', href: '#experiencias' },
      { label: 'Brewpub',          href: '#experiencias' },
      { label: 'Beer Truck',       href: '#experiencias' },
    ],
  },
  {
    heading: 'Descubrí',
    items: [
      { label: 'Nuestra Carta',  href: 'https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio', external: true },
      { label: 'TripAdvisor',    href: 'https://www.tripadvisor.com/Restaurant_Review-g1102365-d23881168-Reviews-23_Rios_Craftbeer-Lujan_de_Cuyo_Mendoza_Province_of_Mendoza_Cuyo.html', external: true },
      { label: 'Ubicación',      href: '#ubicacion' },
    ],
  },
  {
    heading: 'Contacto',
    items: [
      { label: 'WhatsApp',          href: 'https://wa.me/5492615261046', external: true },
      { label: '@23riosbeer',       href: 'https://www.instagram.com/23riosbeer/', external: true },
      { label: 'Acceso Sur - Lateral Este 5269', href: '#ubicacion' },
      { label: 'Luján de Cuyo, Mendoza', href: '#ubicacion' },
    ],
  },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--navy-dark);
          border-top: 3px solid var(--gold);
        }
        .footer-top {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 24px 56px;
          display: grid;
          grid-template-columns: 1.6fr repeat(3, 1fr);
          gap: 48px;
        }
        .footer-logo {
          height: 56px; width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.3s;
          margin-bottom: 20px;
          display: block;
        }
        .footer-logo:hover { opacity: 1; }
        .footer-tagline {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .footer-socials {
          display: flex; gap: 10px;
        }
        .footer-social-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--navy-mid);
          border: 1px solid var(--border-dim);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted);
          transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s;
        }
        .footer-social-btn:hover {
          background: var(--gold);
          color: var(--navy-dark);
          border-color: var(--gold);
          transform: translateY(-3px);
        }

        .footer-col-heading {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .footer-col-links {
          list-style: none;
          display: flex; flex-direction: column; gap: 12px;
        }
        .footer-col-links a {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 400;
          color: var(--text-muted);
          transition: color 0.25s;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-col-links a:hover { color: var(--text); }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px;
          border-top: 1px solid var(--border-dim);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 400;
          color: rgba(238,240,248,0.25);
          letter-spacing: 0.03em;
        }
        .footer-copy span { color: rgba(245,184,0,0.5); }

        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 540px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-brand { grid-column: auto; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#">
              <img src={logo} alt="23 Ríos Craftbeer" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              Cerveza artesanal nacida del agua<br />
              de los Andes. Luján de Cuyo,<br />
              Mendoza · Argentina.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/23riosbeer/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://wa.me/5492615261046" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g1102365-d23881168-Reviews-23_Rios_Craftbeer-Lujan_de_Cuyo_Mendoza_Province_of_Mendoza_Cuyo.html" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="TripAdvisor" style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: 'currentColor' }}>
                TA
              </a>
            </div>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <p className="footer-col-heading">{col.heading}</p>
              <ul className="footer-col-links">
                {col.items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>23 Ríos Craftbeer</span>. Todos los derechos reservados.
          </p>
          <p className="footer-copy">Acceso Sur - Lateral Este 5269 · Luján de Cuyo · Mendoza</p>
        </div>
      </footer>
    </>
  )
}
