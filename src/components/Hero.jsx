import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../../assets/23rios-logo.png'

function ElegantShape({ delay = 0, width = 400, height = 100, rotate = 0, gradientColor = 'rgba(232,96,122,0.15)', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      style={{ position: 'absolute', ...style }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width, height, position: 'relative' }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '9999px',
          background: `linear-gradient(to right, ${gradientColor}, transparent)`,
          backdropFilter: 'blur(2px)',
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 32px 0 rgba(255,255,255,0.1)',
        }} />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
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
          padding-bottom: 40px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          overflow: hidden;
          background: var(--navy-dark);
        }

        .hero-bg-gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(232,96,122,0.05) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 50%, rgba(71,184,202,0.04) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-shapes {
          position: absolute; inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .hero-bottom-fade {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent, var(--navy));
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          position: relative; z-index: 10;
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

        .hero-star {
          position: absolute;
          pointer-events: none;
          opacity: 0.4;
          z-index: 2;
        }
        .hero-star--tl { top: 22%; left: 8%;  width: 28px; }
        .hero-star--tr { top: 18%; right: 9%; width: 20px; }
        .hero-star--bl { bottom: 22%; left: 12%; width: 16px; }
        .hero-star--br { bottom: 28%; right: 8%; width: 24px; }
      `}</style>

      <section className="hero" ref={ref}>
        {/* Subtle radial gradient base */}
        <div className="hero-bg-gradient" />

        {/* Animated geometric shapes — z-index 0, pointer-events none via CSS class */}
        <div className="hero-shapes">
          <ElegantShape
            delay={0.3}
            width={600} height={140} rotate={12}
            gradientColor="rgba(232,96,122,0.18)"
            style={{ left: '-5%', top: '20%' }}
          />
          <ElegantShape
            delay={0.5}
            width={500} height={120} rotate={-15}
            gradientColor="rgba(245,194,24,0.15)"
            style={{ right: '0%', top: '72%' }}
          />
          <ElegantShape
            delay={0.4}
            width={300} height={80} rotate={-8}
            gradientColor="rgba(71,184,202,0.15)"
            style={{ left: '10%', bottom: '10%' }}
          />
          <ElegantShape
            delay={0.6}
            width={200} height={60} rotate={20}
            gradientColor="rgba(245,194,24,0.18)"
            style={{ right: '18%', top: '12%' }}
          />
          <ElegantShape
            delay={0.7}
            width={150} height={40} rotate={-25}
            gradientColor="rgba(71,184,202,0.18)"
            style={{ left: '22%', top: '8%' }}
          />
        </div>

        {/* Decorative stars */}
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

        <div className="hero-bottom-fade" />
      </section>
    </>
  )
}
