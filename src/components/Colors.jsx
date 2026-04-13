import { motion } from 'framer-motion'

const colors = [
  { color: '#4CAF4C', bg: '#e8f5e8', title: 'Verde',   textColor: '#1B4D1B', dist: 'Menos de 100 m', msg: '¡Sal ya!' },
  { color: '#F5A623', bg: '#fff8ec', title: 'Naranja',  textColor: '#7a4f00', dist: 'Menos de 500 m', msg: 'Alístate' },
  { color: '#E24B4A', bg: '#fff0f0', title: 'Rojo',     textColor: '#7a1a1a', dist: 'Menos de 1 km',  msg: 'Está en camino' },
  { color: '#378ADD', bg: '#eef4ff', title: 'Azul',     textColor: '#0c447c', dist: 'Más de 1 km',    msg: 'Tranquilo aún' },
]

export default function Colors() {
  return (
    <div style={s.wrap}>
      <motion.h2
        initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} style={s.h2}
      >
        Los colores te lo dicen todo
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.1 }} style={s.sub}
      >
        Sin leer números. Un vistazo y ya sabes si el bus está cerca o lejos.
      </motion.p>

      <div style={s.grid}>
        {colors.map((c, i) => (
          <motion.div key={c.title}
            initial={{ y: 30, opacity: 0, scale: 0.92 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 160 }}
            whileHover={{ y: -8, scale: 1.04 }}
            style={{ ...s.card, background: c.bg }}
          >
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              style={{ ...s.dot, background: c.color }}
            />
            <div style={{ fontSize: 22, fontWeight: 900, color: c.textColor }}>{c.title}</div>
            <div style={{ fontSize: 13, color: c.textColor, opacity: 0.7, marginTop: 6, lineHeight: 1.5 }}>
              {c.dist}<br /><strong>{c.msg}</strong>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const s = {
  wrap: { background: '#fff', padding: '80px 6%', textAlign: 'center' },
  h2: { fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 900, color: '#1B4D1B', letterSpacing: -1, marginBottom: 10 },
  sub: { fontSize: 16, color: '#5a8a5a', maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.6 },
  grid: { display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', maxWidth: 720, margin: '0 auto' },
  card: { borderRadius: 18, padding: '22px 26px', minWidth: 148, textAlign: 'center', cursor: 'default' },
  dot: { width: 20, height: 20, borderRadius: '50%', margin: '0 auto 12px' }
}
