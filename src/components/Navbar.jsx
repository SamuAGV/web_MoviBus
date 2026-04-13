import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={s.nav}
    >
      <div style={s.logo}>
        <motion.img
          src={logo} alt="logo" style={s.img}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <span style={s.name}>MoviBus</span>
      </div>
      <Link to="descarga" smooth duration={700}>
        <motion.button
          style={s.btn}
          whileHover={{ background: '#2E7D2E', y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          Descargar APK
        </motion.button>
      </Link>
    </motion.nav>
  )
}

const s = {
  nav: { background: '#fff', padding: '15px 6%', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    boxShadow: '0 2px 16px rgba(27,77,27,0.08)', position: 'sticky', top: 0, zIndex: 100 },
  logo: { display: 'flex', alignItems: 'center', gap: 10 },
  img: { width: 40, height: 40, borderRadius: 10, objectFit: 'cover' },
  name: { fontSize: 22, fontWeight: 900, color: '#1B4D1B' },
  btn: { background: '#1B4D1B', color: '#fff', fontSize: 13, fontWeight: 700,
    padding: '10px 22px', borderRadius: 10, border: 'none', cursor: 'pointer' }
}
