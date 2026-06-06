import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHONE = '5492615261046'
const WA_URL = `https://wa.me/${PHONE}?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%2023%20R%C3%ADos%20Craftbeer`

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    const tooltipTimer = setTimeout(() => setTooltip(false), 6000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <>
      <style>{`
        .wa-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }
        .wa-tooltip {
          background: #0C0A06;
          border: 1px solid #221E13;
          color: #ADA494;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          padding: 10px 16px;
          border-radius: 4px;
          white-space: nowrap;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          max-width: 220px;
          text-align: right;
        }
        .wa-tooltip strong { color: #EDE6D3; }
        .wa-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
          color: white;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);
        }
        .wa-pulse {
          position: absolute;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.25);
          animation: waPulse 2.5s ease-out infinite;
          pointer-events: none;
        }
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>

      <AnimatePresence>
        {visible && (
          <div className="wa-fab">
            <AnimatePresence>
              {tooltip && (
                <motion.div
                  className="wa-tooltip"
                  initial={{ opacity: 0, x: 12, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 12, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <strong>¿Hablamos?</strong><br />
                  Reservas y consultas
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              style={{ position: 'relative' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wa-pulse" />
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
                aria-label="Contactar por WhatsApp"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
