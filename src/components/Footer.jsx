import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer style={s.wrap}>
      <div style={s.brand}>
        <img src={logo} alt="logo" style={s.img} />
        <span style={s.name}>MoviBus</span>
      </div>
      <div style={s.copy}>© 2026 MoviBus · UTVT</div>
    </footer>
  )
}

const s = {
  wrap: { background: '#132613', padding: '30px 6%', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  brand: { display: 'flex', alignItems: 'center', gap: 10 },
  img: { width: 28, height: 28, borderRadius: 7, objectFit: 'cover' },
  name: { fontSize: 16, fontWeight: 800, color: '#fff' },
  copy: { fontSize: 13, color: 'rgba(255,255,255,0.3)' }
}
