import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function About() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { value: '100%', label: 'Artesanal', color: 'var(--gold)' },
    { value: '23',   label: 'Ríos de Mendoza', color: 'var(--teal)' },
    { value: 'IPA+', label: 'Estilos en carta', color: 'var(--coral)' },
    { value: '∞',    label: 'Pasión por la cerveza', color: 'var(--gold)' },
  ]

  return (
    <>
      <style>{`
        .about {
          padding: 60px 24px 120px;
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        /* Big watermark text */
        .about-watermark {
          position: absolute;
          font-family: var(--font-display);
          font-size: clamp(100px, 18vw, 240px);
          letter-spacing: 0.06em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(245,184,0,0.05);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-tag {
          margin-bottom: 20px;
        }
        .about-title {
          font-family: var(--font-display);
          font-size: clamp(52px, 7vw, 88px);
          letter-spacing: 0.04em;
          color: var(--white);
          line-height: 0.92;
          margin-bottom: 32px;
        }
        .about-title .gold { color: var(--gold); }

        .about-body {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .about-body strong {
          color: var(--text);
          font-weight: 600;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .stat-card {
          background: var(--navy-mid);
          padding: 32px 28px;
          border: 1px solid var(--border-dim);
          transition: border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--stat-color, var(--gold));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s var(--ease);
        }
        .stat-card:hover::before { transform: scaleX(1); }
        .stat-card:hover { border-color: rgba(255,255,255,0.1); }

        .stat-value {
          font-family: var(--font-display);
          font-size: 52px;
          letter-spacing: 0.02em;
          color: var(--stat-color, var(--gold));
          display: block;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(238,240,248,0.4);
        }

        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr; gap: 48px; }
          .about-watermark { display: none; }
        }
      `}</style>

      <section className="about" id="nosotros" ref={ref}>
        <div className="about-watermark">23RÍOS</div>

        <div className="about-inner">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="about-tag">
              <span className="tag-pill tag-pill--gold">Nuestra historia</span>
            </div>
            <h2 className="about-title">
              DONDE EL<br />AGUA SE<br />VUELVE <span className="gold">ARTE</span>
            </h2>
            <p className="about-body">
              En <strong>Luján de Cuyo</strong>, donde la cordillera de los Andes alimenta
              con sus deshielos a los 23 ríos más puros de Mendoza, nació esta cervecería.
              Un homenaje al agua que corre por la tierra cuyana y que da vida a cada lúpulo,
              a cada malta, a cada fermentación.
            </p>
            <p className="about-body">
              Somos una <strong>fábrica de cerveza artesanal, brewpub y beer truck</strong>
              {' '}con una sola obsesión: que cada sorbo refleje la identidad de esta región.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.18)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="stats-grid">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  style={{ '--stat-color': s.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
