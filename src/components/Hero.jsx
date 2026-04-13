import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <div style={s.wrap}>
      <div style={s.ring1} />
      <div style={s.ring2} />

      <motion.img src={logo} alt="MoviBus"
        initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        style={s.logo}
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        style={s.h1}
      >
        Sabe exactamente dónde<br />
        está <em style={{ color: '#F5A623', fontStyle: 'normal' }}>tu autobús</em>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={s.p}
      >
        MoviBus conecta a conductores y estudiantes de la UTVT en tiempo real.
        Nunca más pierdas el camión.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
        style={s.btns}
      >
        <Link to="descarga" smooth duration={700}>
          <motion.button style={s.btnMain}
            whileHover={{ background: '#2E7D2E', y: -3, boxShadow: '0 12px 28px rgba(27,77,27,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            ⬇ Descargar gratis
          </motion.button>
        </Link>
        <Link to="como" smooth duration={700}>
          <motion.button style={s.btnOut}
            whileHover={{ borderColor: '#2E7D2E', y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            ¿Cómo funciona?
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={s.stats}
      >
        {[['10s','Intervalo GPS'],['100m','Alerta proximidad'],['En vivo','Firebase RT'],['2','Roles de usuario']].map(([n,l]) => (
          <div key={l} style={s.stat}>
            <div style={s.statN}>{n}</div>
            <div style={s.statL}>{l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const s = {
  wrap: { background: '#e8f5e8', padding: '100px 6% 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  ring1: { position: 'absolute', width: 560, height: 560, borderRadius: '50%',
    border: '2px dashed rgba(46,125,46,0.1)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  ring2: { position: 'absolute', width: 360, height: 360, borderRadius: '50%',
    border: '1.5px dashed rgba(46,125,46,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  logo: { width: 120, height: 120, borderRadius: 28, objectFit: 'cover',
    marginBottom: 26, boxShadow: '0 14px 36px rgba(27,77,27,0.22)', position: 'relative' },
  h1: { fontSize: 'clamp(34px,6vw,64px)', fontWeight: 900, lineHeight: 1.1,
    letterSpacing: -2, color: '#1B4D1B', marginBottom: 18, position: 'relative' },
  p: { fontSize: 17, color: '#3d6b3d', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7, position: 'relative' },
  btns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' },
  btnMain: { background: '#1B4D1B', color: '#fff', fontSize: 15, fontWeight: 800,
    padding: '14px 30px', borderRadius: 12, border: 'none', cursor: 'pointer' },
  btnOut: { background: '#fff', color: '#1B4D1B', fontSize: 15, fontWeight: 700,
    padding: '14px 30px', borderRadius: 12, border: '1.5px solid rgba(27,77,27,0.2)', cursor: 'pointer' },
  stats: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
    background: '#fff', borderRadius: 20, marginTop: 52, boxShadow: '0 4px 20px rgba(27,77,27,0.07)',
    position: 'relative', maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' },
  stat: { textAlign: 'center', padding: '20px 32px', borderRight: '1px solid rgba(46,125,46,0.08)' },
  statN: { fontSize: 28, fontWeight: 900, color: '#1B4D1B', letterSpacing: -1 },
  statL: { fontSize: 12, color: '#6b9a6b', marginTop: 3, fontWeight: 500 }
}
