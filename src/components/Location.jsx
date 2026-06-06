import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Location() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <style>{`
        .loc {
          padding: 120px 24px;
          background: var(--navy-mid);
          border-top: 1px solid var(--border-dim);
        }
        .loc-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .loc-tag { margin-bottom: 24px; }
        .loc-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 80px);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: var(--white);
          margin-bottom: 32px;
        }
        .loc-title .gold { color: var(--gold); }

        .loc-address {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 40px;
        }
        .loc-pin {
          width: 40px; height: 40px;
          background: var(--gold);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .loc-address-text {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-muted);
        }
        .loc-address-text strong {
          color: var(--text);
          font-weight: 700;
          display: block;
          font-size: 19px;
        }

        .loc-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 32px;
        }
        .loc-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: var(--navy);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-muted);
          transition: border-color 0.25s, color 0.25s, background 0.25s;
          letter-spacing: 0.02em;
        }
        .loc-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(245,184,0,0.04);
        }
        .loc-btn svg { flex-shrink: 0; }

        /* TripAdvisor card */
        .ta-card {
          background: var(--navy);
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          padding: 28px 28px;
          transition: border-color 0.3s;
        }
        .ta-card:hover { border-color: rgba(52,168,83,0.4); }
        .ta-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .ta-badge {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #34A853;
          text-transform: uppercase;
        }
        .ta-stars { display: flex; gap: 3px; }
        .ta-quote {
          font-family: var(--font-heading);
          font-size: 16px;
          font-style: italic;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 20px;
          border-left: 3px solid #34A853;
          padding-left: 16px;
        }
        .ta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #34A853;
          transition: gap 0.25s;
        }
        .ta-link:hover { gap: 13px; }

        /* Map */
        .map-card {
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;
          margin-bottom: 16px;
        }
        .map-card iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          border: 0; display: block;
        }
        .map-open-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--navy-dark);
          background: var(--gold);
          padding: 10px 24px;
          border-radius: 100px;
          transition: background 0.25s, transform 0.25s;
        }
        .map-open-btn:hover { background: #FFD000; transform: translateY(-2px); }

        @media (max-width: 900px) {
          .loc-inner { grid-template-columns: 1fr; gap: 48px; }
          .loc-btns { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="loc" id="ubicacion">
        <div className="loc-inner" ref={ref}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="loc-tag">
              <span className="tag-pill tag-pill--gold">Dónde encontrarnos</span>
            </div>
            <h2 className="loc-title">
              EN EL<br />CORAZÓN DE<br /><span className="gold">MENDOZA</span>
            </h2>

            <div className="loc-address">
              <div className="loc-pin">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" fill="var(--navy-dark)"/>
                  <circle cx="9" cy="6" r="2" fill="var(--gold)"/>
                </svg>
              </div>
              <div className="loc-address-text">
                <strong>23 Ríos Craftbeer</strong>
                Acceso Sur - Lateral Este 5269<br />
                Luján de Cuyo, Mendoza<br />
                Argentina
              </div>
            </div>

            <div className="loc-btns">
              <a href="https://wa.me/5492615261046" target="_blank" rel="noopener noreferrer" className="loc-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/23riosbeer/" target="_blank" rel="noopener noreferrer" className="loc-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                @23riosbeer
              </a>
            </div>

            <div className="ta-card">
              <div className="ta-top">
                <span className="ta-badge">TripAdvisor</span>
                <div className="ta-stars">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#34A853"><path d="M7 1l1.5 3 3.3.5-2.4 2.3.6 3.3L7 8.7l-3 1.4.6-3.3L2.2 4.5l3.3-.5z"/></svg>
                  ))}
                </div>
              </div>
              <p className="ta-quote">
                "Un lugar único en Mendoza. La cerveza artesanal es excepcional
                y el ambiente del brewpub es perfecto para compartir."
              </p>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g1102365-d23881168-Reviews-23_Rios_Craftbeer-Lujan_de_Cuyo_Mendoza_Province_of_Mendoza_Cuyo.html"
                target="_blank" rel="noopener noreferrer"
                className="ta-link"
              >
                Ver reseñas
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <div className="map-card">
              <iframe
                src="https://maps.google.com/maps?q=-32.9857242,-68.8481591&t=&z=16&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="23 Ríos Craftbeer - Ubicación"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/23+R%C3%ADos+Craftbeer+Luj%C3%A1n+de+Cuyo/@-32.9619938,-68.8705004,15z/data=!4m6!3m5!1s0x967e0b043b3dc37d:0xdf8dd1560e4dc18f!8m2!3d-32.9857242!4d-68.8481591"
              target="_blank" rel="noopener noreferrer"
              className="map-open-btn"
            >
              Abrir en Google Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
