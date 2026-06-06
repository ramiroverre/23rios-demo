import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/23rios-logo.png'

const links = [
  { label: 'Nosotros',     href: '#nosotros' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Ubicación',    href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          display: flex; justify-content: center;
          padding: 16px 24px;
          transition: padding 0.4s var(--ease);
        }
        .nav-wrap.scrolled { padding: 10px 24px; }

        .nav-inner {
          width: 100%; max-width: 1200px;
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
          padding: 12px 24px;
          border-radius: 100px;
          transition: background 0.4s, backdrop-filter 0.4s, border-color 0.4s;
          border: 1px solid transparent;
        }
        .nav-right {
          display: flex; align-items: center; justify-content: flex-end; gap: 12px;
        }
        .nav-wrap.scrolled .nav-inner {
          background: rgba(14,14,30,0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-color: rgba(232,96,122,0.25);
        }

        .nav-logo img {
          height: 38px; width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.92;
          transition: opacity 0.3s, transform 0.3s;
        }
        .nav-logo img:hover { opacity: 1; transform: scale(1.04); }

        .nav-links {
          display: flex; align-items: center; gap: 32px; list-style: none;
        }
        .nav-link {
          position: relative;
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: rgba(238,240,248,0.7);
          transition: color 0.25s;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: -3px; left: 0; right: 0;
          height: 2px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s var(--ease);
          border-radius: 2px;
        }
        .nav-link:hover { color: var(--white); }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-cta {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          background: var(--gold);
          color: var(--navy-dark);
          padding: 10px 24px;
          border-radius: 100px;
          transition: background 0.25s, transform 0.25s;
          letter-spacing: 0.02em;
        }
        .nav-cta:hover { background: #FFD000; transform: translateY(-2px); }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 6px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: var(--text); border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }

        /* Mobile overlay */
        .mobile-overlay {
          position: fixed; inset: 0; z-index: 199;
          background: rgba(14,21,48,0.97);
          backdrop-filter: blur(8px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 40px;
        }
        .mobile-overlay a {
          font-family: var(--font-display);
          font-size: 48px;
          letter-spacing: 0.06em;
          color: var(--text);
          transition: color 0.2s;
        }
        .mobile-overlay a:hover { color: var(--gold); }
        .mobile-overlay .mob-cta {
          font-family: var(--font-heading);
          font-size: 18px; font-weight: 700;
          background: var(--gold); color: var(--navy-dark);
          padding: 14px 40px; border-radius: 100px;
        }

        @media (max-width: 768px) {
          .nav-inner { display: flex; justify-content: space-between; }
          .nav-links { display: none; }
          .nav-cta-desktop { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <motion.div
        className={`nav-wrap${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src={logo} alt="23 Ríos Craftbeer" />
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a
              href="https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank" rel="noopener noreferrer"
              className="nav-cta nav-cta-desktop"
            >
              Ver Carta
            </a>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="https://linktr.ee/23rios?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank" rel="noopener noreferrer"
              className="mob-cta"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Ver Carta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
