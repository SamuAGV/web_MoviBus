import { motion } from 'framer-motion'

const steps = [
  { icon: '🔐', n: 1, title: 'Regístrate', desc: 'Crea tu cuenta con tu correo y elige si eres conductor o estudiante' },
  { icon: '📱', n: 2, title: 'Abre la app', desc: 'Conductor activa su GPS, estudiante ve el mapa en tiempo real' },
  { icon: '📍', n: 3, title: '¡Listo!', desc: 'El bus aparece en el mapa. Recibes alerta cuando se acerca' },
]

export default function Steps() {
  return (
    <div style={s.wrap}>
      <motion.h2
        initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} style={s.h2}
      >
        3 pasos para usarla
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.1 }} style={s.sub}
      >
        Sin complicaciones. En menos de un minuto ya estás rastreando tu autobús.
      </motion.p>

      <div style={s.row}>
        {steps.map((step, i) => (
          <>
            <motion.div key={step.n}
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, type: 'spring', stiffness: 150 }}
              whileHover={{ y: -6 }}
              style={s.step}
            >
              <div style={s.circleWrap}>
                <motion.div style={s.circle}
                  animate={{ boxShadow: ['0 0 0 0px rgba(46,125,46,0.2)', '0 0 0 10px rgba(46,125,46,0)', '0 0 0 0px rgba(46,125,46,0)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                >
                  {step.icon}
                </motion.div>
                <div style={s.num}>{step.n}</div>
              </div>
              <div style={s.title}>{step.title}</div>
              <div style={s.desc}>{step.desc}</div>
            </motion.div>
            {i < 2 && (
              <motion.div key={`arr-${i}`}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.18 }}
                style={s.arrow}
              >→</motion.div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

const s = {
  wrap: { background: '#e8f5e8', padding: '80px 6%', textAlign: 'center' },
  h2: { fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: '#1B4D1B', letterSpacing: -1, marginBottom: 14 },
  sub: { fontSize: 16, color: '#5a8a5a', maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.7 },
  row: { display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 800, margin: '0 auto' },
  step: { flex: 1, minWidth: 160, maxWidth: 200, textAlign: 'center', padding: '0 12px' },
  circleWrap: { position: 'relative', display: 'inline-block', marginBottom: 14 },
  circle: { width: 68, height: 68, borderRadius: '50%', background: '#fff',
    border: '2px solid rgba(46,125,46,0.2)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: 30, margin: '0 auto' },
  num: { position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: '50%',
    background: '#1B4D1B', color: '#fff', fontSize: 11, fontWeight: 800,
    display: 'flex', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 15, fontWeight: 800, color: '#1B4D1B', marginBottom: 6 },
  desc: { fontSize: 13, color: '#5a8a5a', lineHeight: 1.55 },
  arrow: { fontSize: 26, color: 'rgba(46,125,46,0.25)', flexShrink: 0, marginBottom: 40 }
}
