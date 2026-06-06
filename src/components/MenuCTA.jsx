import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const beers = [
  { style: 'Golden',  color: 'var(--gold)' },
  { style: 'IPA',     color: 'var(--coral)' },
  { style: 'Stout',   color: 'rgba(238,240,248,0.7)' },
  { style: 'Scottish',color: 'var(--teal)' },
  { style: 'Honey',   color: 'var(--gold)' },
  { style: 'Lager',   color: 'var(--coral)' },
]

export default function MenuCTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgShift = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <>
      <style>{`
        /* ── Gold band ───────────────────────────────────── */
        .menu-band {
          background: var(--gold);
          padding: 20px 24px;
          overflow: hidden;
          border: none;
        }
        .menu-band-inner {
          display: flex;
          gap: 48px;
          align-items: center;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        .menu-band-item {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: 0.08em;
          color: var(--navy-dark);
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }
        .menu-band-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(21,30,63,0.4);
          flex-shrink: 0;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Main CTA section ───────────────────────────── */
        .menu-cta-section {
          padding: 140px 24px;
          background: var(--navy-dark);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .menu-cta-bg-text {
          position: absolute;
          font-family: var(--font-display);
          font-size: clamp(140px, 22vw, 300px);
          letter-spacing: 0.04em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(245,184,0,0.04);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .menu-cta-inner {
          max-width: 800px;
          margin: 0 auto;
          position: relative; z-index: 1;
        }
        .menu-cta-tag { margin-bottom: 24px; }
        .menu-cta-title {
          font-family: var(--font-display);
          font-size: clamp(56px, 9vw, 112px);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: var(--white);
          margin-bottom: 28px;
        }
        .menu-cta-title .gold { color: var(--gold); }
        .menu-cta-desc {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Beer styles strip */
        .beer-strip {
          display: flex;
          justify-content: center;
          gap: 0;
          flex-wrap: nowrap;
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          overflow: hidden;
          margin-top: 72px;
          background: var(--navy-mid);
        }
        .beer-item {
          flex: 1 1 0;
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid var(--border-dim);
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .beer-item:last-child { border-right: none; }
        .beer-item:hover { background: rgba(255,255,255,0.03); }
        .beer-item::after {
          content: '';
          position: absolute; bottom: 0; left: 10%; right: 10%;
          height: 2px;
          background: var(--beer-color);
          transform: scaleX(0);
          transition: transform 0.35s var(--ease);
          border-radius: 2px;
        }
        .beer-item:hover::after { transform: scaleX(1); }
        .beer-style-name {
          font-family: var(--font-display);
          font-size: 24px;
          letter-spacing: 0.06em;
          color: var(--beer-color);
          display: block;
        }

        @media (max-width: 600px) {
          .beer-item { padding: 20px 6px; }
          .beer-style-name { font-size: 14px; letter-spacing: 0.03em; }
        }
      `}</style>

      {/* Marquee band */}
      <div className="menu-band">
        <div className="menu-band-inner">
          {[...Array(2)].map((_, r) =>
            ['CRAFTBEER', 'MENDOZA', 'BREWPUB', 'ARTESANAL', 'BEER TRUCK', '23 RÍOS', 'LUJÁN DE CUYO', 'CRAFTBEER'].map((t, i) => (
              <div key={`${r}-${i}`} className="menu-band-item">
                {t}
                <span className="menu-band-dot" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main CTA */}
      <section className="menu-cta-section" ref={ref}>
        <motion.div className="menu-cta-bg-text" style={{ y: bgShift }}>
          CARTA
        </motion.div>

        <div className="menu-cta-inner">
          <motion.div
            className="menu-cta-tag"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tag-pill tag-pill--coral">Lo que elaboramos</span>
          </motion.div>

          <motion.h2
            className="menu-cta-title"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            NUESTRA<br /><span className="gold">CARTA</span><br />COMPLETA
          </motion.h2>

          <motion.p
            className="menu-cta-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Cervezas artesanales, comidas, postres, tragos clásicos y de autor.
            Descubrí todo lo que 23 Ríos tiene para ofrecerte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          >
            <a
              href="https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank" rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: '18px', padding: '18px 48px' }}
            >
              Ver Carta Completa
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="beer-strip"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {beers.map((b, i) => (
              <motion.div
                key={b.style}
                className="beer-item"
                style={{ '--beer-color': b.color }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 + i * 0.07 }}
              >
                <span className="beer-style-name">{b.style}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
