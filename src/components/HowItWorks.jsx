import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { y: 35, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { delay, duration: 0.65 }
})

const driver = ['Activa tu ubicación con un toque','Tu posición se comparte mientras manejas','Al cerrar la app, desapareces del mapa','Ves tu velocidad actual en pantalla']
const student = ['Ve todos los buses activos en el mapa','Toca un bus para ver cuánto falta','Recibe alerta cuando el bus está a 100 m','Los colores dicen si está cerca o lejos']

export default function HowItWorks() {
  return (
    <div style={s.wrap} id="como">
      <motion.h2 {...fade()} style={s.h2}>¿Cómo funciona?</motion.h2>
      <motion.p {...fade(0.1)} style={s.sub}>
        Dos roles, una sola app. El conductor comparte su ubicación y los estudiantes la ven en el mapa.
      </motion.p>
      <div style={s.grid}>
        <motion.div {...fade(0.2)} whileHover={{ y: -6 }} style={{ ...s.card, background: '#e8f5e8', border: '1px solid rgba(46,125,46,0.15)' }}>
          <div style={s.icon}>🚌</div>
          <h3 style={s.ct}>Para el conductor</h3>
          <p style={{ ...s.tag, color: '#2E7D2E' }}>ROL: CONDUCTOR</p>
          {driver.map((t, i) => (
            <motion.div key={i} initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }} style={s.item}>
              <span style={{ color: '#4CAF4C', fontWeight: 900 }}>✓</span> {t}
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fade(0.3)} whileHover={{ y: -6 }} style={{ ...s.card, background: '#fffbf0', border: '1px solid rgba(245,166,35,0.2)' }}>
          <div style={s.icon}>🎓</div>
          <h3 style={s.ct}>Para el estudiante</h3>
          <p style={{ ...s.tag, color: '#b07800' }}>ROL: ESTUDIANTE</p>
          {student.map((t, i) => (
            <motion.div key={i} initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }} style={s.item}>
              <span style={{ color: '#F5A623', fontWeight: 900 }}>✓</span> {t}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const s = {
  wrap: { background: '#fff', padding: '80px 6%', textAlign: 'center' },
  h2: { fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: '#1B4D1B', letterSpacing: -1, marginBottom: 14 },
  sub: { fontSize: 16, color: '#5a8a5a', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, maxWidth: 860, margin: '0 auto' },
  card: { borderRadius: 20, padding: '32px 28px', textAlign: 'left', transition: 'all .3s' },
  icon: { fontSize: 36, marginBottom: 16 },
  ct: { fontSize: 18, fontWeight: 900, color: '#1B4D1B', marginBottom: 6 },
  tag: { fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 18 },
  item: { fontSize: 14, color: '#3d5a3d', lineHeight: 1.5, marginBottom: 12, display: 'flex', gap: 8 }
}
