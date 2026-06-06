import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../../assets/23rios-logo.png'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }
  const logoAnim = {
    hidden: { opacity: 0, scale: 0.82, filter: 'brightness(0) invert(1) blur(16px)' },
    show:   { opacity: 1, scale: 1,    filter: 'brightness(0) invert(1) blur(0px)',
      transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          padding-top: 90px;
          padding-bottom: 120px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          overflow: hidden;
          background: var(--navy-dark);
        }

        /* Radial glow behind logo */
        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,96,122,0.18) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -55%);
          pointer-events: none;
        }

        /* Diagonal stripe pattern overlay */
        .hero-pattern {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(232,96,122,0.02) 40px,
            rgba(232,96,122,0.02) 41px
          );
          pointer-events: none;
        }

        .hero-bottom-fade {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent, var(--navy));
          pointer-events: none;
        }

        .hero-content {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          padding: 0 24px;
          max-width: 860px;
        }

        .hero-logo {
          width: min(240px, 50vw);
          margin-bottom: 36px;
        }

        .hero-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-heading);
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .hero-label-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold);
        }

        .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(72px, 12vw, 140px);
          line-height: 0.92;
          letter-spacing: 0.04em;
          color: var(--white);
          margin-bottom: 0;
        }
        .hero-h1 .highlight { color: var(--gold); }

        .hero-sub {
          font-family: var(--font-heading);
          font-size: clamp(17px, 2.5vw, 22px);
          font-weight: 400;
          color: rgba(238,240,248,0.55);
          margin: 20px 0 48px;
          letter-spacing: 0.01em;
        }
        .hero-sub strong {
          color: rgba(238,240,248,0.85);
          font-weight: 700;
        }

        .hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
        }

        /* Scroll cue */
        .scroll-cue {
          position: absolute; bottom: 40px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          z-index: 2;
        }
        .scroll-cue-text {
          font-family: var(--font-heading);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(238,240,248,0.3);
        }
        .scroll-mouse {
          width: 22px; height: 34px;
          border: 1.5px solid rgba(245,184,0,0.35);
          border-radius: 12px;
          position: relative;
          display: flex; justify-content: center;
        }
        .scroll-mouse-dot {
          width: 3px; height: 8px;
          background: var(--gold);
          border-radius: 2px;
          margin-top: 6px;
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(8px); }
        }

        /* Gold star decorators */
        .hero-star {
          position: absolute;
          pointer-events: none;
          opacity: 0.4;
        }
        .hero-star--tl { top: 22%; left: 8%;  width: 28px; }
        .hero-star--tr { top: 18%; right: 9%; width: 20px; }
        .hero-star--bl { bottom: 22%; left: 12%; width: 16px; }
        .hero-star--br { bottom: 28%; right: 8%; width: 24px; }
      `}</style>

      <section className="hero" ref={ref}>
        <motion.div className="hero-glow" style={{ y }} />
        <div className="hero-pattern" />

        {/* Decorative stars from the brand */}
        {['tl','tr','bl','br'].map(pos => (
          <svg key={pos} className={`hero-star hero-star--${pos}`} viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
        ))}

        <motion.div
          className="hero-content"
          style={{ opacity }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src={logo} alt="23 Ríos Craftbeer"
            className="hero-logo"
            variants={logoAnim}
          />

          <motion.div className="hero-label" variants={fadeUp}>
            <span className="hero-label-dot" />
            Luján de Cuyo · Mendoza · Argentina
            <span className="hero-label-dot" />
          </motion.div>

          <motion.h1 className="hero-h1" variants={fadeUp}>
            <span className="highlight">CERVEZA</span><br />ARTESANAL
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp}>
            <strong>Fábrica · Brewpub · Beer Truck</strong> en el corazón de Mendoza
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a
              href="https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank" rel="noopener noreferrer"
              className="btn-gold"
            >
              Ver Carta
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5492615261046"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline"
            >
              Reservas / Consultas
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="scroll-cue-text">Scroll</span>
          <div className="scroll-mouse">
            <div className="scroll-mouse-dot" />
          </div>
        </motion.div>

        <div className="hero-bottom-fade" />
      </section>
    </>
  )
}
