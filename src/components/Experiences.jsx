import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    tag:       'Origen',
    tagColor:  'tag-pill--teal',
    title:     'FÁBRICA ARTESANAL',
    emoji:     '🍺',
    accent:    'var(--teal)',
    desc:      'Cada lote nace aquí, en Luján de Cuyo. Controlamos el proceso completo: selección de maltas, fermentación, guarda y envasado. Recetas propias con identidad mendocina.',
    highlight: 'Producción propia · Recetas exclusivas',
  },
  {
    tag:       'La experiencia',
    tagColor:  'tag-pill--gold',
    title:     'BREWPUB',
    emoji:     '🍻',
    accent:    'var(--gold)',
    desc:      'Vení a tomar la cerveza donde se hace. Generosas pintas, tabla de fiambres, empanadas artesanales y la mejor vibra de Mendoza. Porque la mejor cerveza es la que se toma en su lugar de origen.',
    highlight: 'Cocina · Tragos · Happy Hour',
    cta:       { label: 'Ver Carta', href: 'https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio' },
  },
  {
    tag:       'En movimiento',
    tagColor:  'tag-pill--coral',
    title:     'BEER TRUCK',
    emoji:     '🚚',
    accent:    'var(--coral)',
    desc:      'La cerveza 23 Ríos llega hasta vos. Nuestro beer truck recorre Mendoza para eventos corporativos, festivales, cumpleaños y casamientos. Consultá disponibilidad.',
    highlight: 'Eventos · Festivales · Privados',
    cta:       { label: 'Consultá', href: 'https://wa.me/5492615261046' },
  },
]

export default function Experiences() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <style>{`
        .exp {
          padding: 120px 24px;
          background: var(--teal);
        }
        .exp-header {
          max-width: 1200px;
          margin: 0 auto 64px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .exp-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 88px);
          letter-spacing: 0.04em;
          color: var(--navy-dark);
          line-height: 0.92;
        }
        .exp-title .gold { color: var(--gold); }
        .exp-header-sub {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 400;
          color: rgba(14,14,30,0.65);
          max-width: 280px;
          line-height: 1.6;
        }

        .exp-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .exp-card {
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s var(--ease), border-color 0.3s, box-shadow 0.3s;
        }
        .exp-card:hover {
          transform: translateY(-6px);
          border-color: var(--card-accent);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .exp-emoji {
          font-size: 40px;
          margin-bottom: 20px;
          display: block;
          line-height: 1;
        }
        .exp-card-tag { margin-bottom: 16px; }
        .exp-card-title {
          font-family: var(--font-display);
          font-size: 36px;
          letter-spacing: 0.04em;
          color: var(--navy-dark);
          line-height: 1;
          margin-bottom: 20px;
        }
        .exp-card-desc {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(14,14,30,0.65);
          margin-bottom: 28px;
        }
        .exp-card-highlight {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--card-accent);
          border-top: 1px solid rgba(0,0,0,0.09);
          padding-top: 20px;
          margin-bottom: 20px;
        }
        .exp-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--card-accent);
          transition: gap 0.25s;
        }
        .exp-card-cta:hover { gap: 14px; }

        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr; }
          .exp-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="exp" id="experiencias">
        <motion.div
          ref={ref}
          className="exp-header"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="exp-title">
            UNA CERVEZA,<br /><span className="gold">TRES</span><br />EXPERIENCIAS
          </h2>
          <p className="exp-header-sub">
            Desde la fábrica hasta tu evento, la pasión de 23 Ríos llega a cada rincón de Mendoza.
          </p>
        </motion.div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="exp-card"
              style={{ '--card-accent': exp.accent }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 }}
            >
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '4px',
                  background: exp.accent,
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 + 0.5 }}
              />
              <span className="exp-emoji">{exp.emoji}</span>
              <div className="exp-card-tag">
                <span className={`tag-pill ${exp.tagColor}`}>{exp.tag}</span>
              </div>
              <h3 className="exp-card-title">{exp.title}</h3>
              <p className="exp-card-desc">{exp.desc}</p>
              <p className="exp-card-highlight">{exp.highlight}</p>
              {exp.cta && (
                <a
                  href={exp.cta.href}
                  target="_blank" rel="noopener noreferrer"
                  className="exp-card-cta"
                >
                  {exp.cta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
