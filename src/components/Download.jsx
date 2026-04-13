import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Download() {
  return (
    <div style={s.wrap} id="descarga">
      <div style={s.dots} />

      <motion.img src={logo} alt="MoviBus"
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 180, damping: 13 }}
        style={s.logo}
      />

      <motion.h2
        initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.15 }} style={s.h2}
      >
        Descarga MoviBus gratis
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.25 }} style={s.p}
      >
        Disponible para Android. Instala el APK y empieza a usarla hoy mismo.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.35 }} style={s.meta}
      >
        {[['Gratis','Precio'],['Android','Sistema'],['v1.0','Versión']].map(([n,k]) => (
          <div key={k} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#F5A623' }}>{n}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{k}</div>
          </div>
        ))}
      </motion.div>

          <motion.a 
      href="/movibus.apk"
      download
      initial={{ y: 20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }} 
      transition={{ delay: 0.45 }}
      whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(245,166,35,0.45)' }}
      whileTap={{ scale: 0.97 }}
      style={s.btn}
    >

        ⬇ Descargar APK
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.6 }} style={s.note}
      >
        Requiere Android 8.0 o superior · Activa "Fuentes desconocidas" en Ajustes antes de instalar
      </motion.p>
    </div>
  )
}

const s = {
  wrap: { background: '#1B4D1B', padding: '90px 6%', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  dots: { position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '26px 26px' },
  logo: { width: 88, height: 88, borderRadius: 22, objectFit: 'cover',
    marginBottom: 22, boxShadow: '0 14px 36px rgba(0,0,0,0.3)', position: 'relative' },
  h2: { fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, color: '#fff', letterSpacing: -1, marginBottom: 12, position: 'relative' },
  p: { fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 400, margin: '0 auto 28px', lineHeight: 1.65, position: 'relative' },
  meta: { display: 'flex', justifyContent: 'center', gap: 36, marginBottom: 32, position: 'relative' },
  btn: { display: 'inline-block', background: '#F5A623', color: '#1B4D1B', fontSize: 17,
    fontWeight: 900, padding: '17px 42px', borderRadius: 14, textDecoration: 'none',
    position: 'relative', cursor: 'pointer' },
  note: { fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 16, lineHeight: 1.6, position: 'relative' }
}
