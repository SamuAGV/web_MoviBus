import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { useState } from 'react'

export default function Download() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      // Método con fetch y blob para forzar la descarga
      const response = await fetch('/movibus.apk')
      if (!response.ok) throw new Error('Archivo no encontrado')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'MoviBus.apk')
      link.setAttribute('target', '_blank')
      document.body.appendChild(link)
      link.click()
      
      // Limpiar
      setTimeout(() => {
        link.remove()
        window.URL.revokeObjectURL(url)
      }, 100)
      
    } catch (error) {
      console.error('Error en descarga:', error)
      // Fallback: abrir en nueva ventana
      window.open('/movibus.apk', '_blank')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div style={s.wrap} id="descarga">
      <div style={s.dots} />

      <motion.img 
        src={logo} 
        alt="MoviBus"
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 180, damping: 13 }}
        style={s.logo}
      />

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        style={s.h2}
      >
        Descarga MoviBus gratis
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        style={s.p}
      >
        Disponible para Android. Instala el APK y empieza a usarla hoy mismo.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        style={s.meta}
      >
        {[['Gratis','Precio'],['Android','Sistema'],['v1.0','Versión']].map(([n,k]) => (
          <div key={k} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#F5A623' }}>{n}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{k}</div>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={handleDownload}
        disabled={downloading}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(245,166,35,0.45)' }}
        whileTap={{ scale: 0.97 }}
        style={s.btn}
      >
        {downloading ? '⬇ Preparando descarga...' : '⬇ Descargar APK'}
      </motion.button>

      {/* Instrucciones para cuando se cancela la descarga */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
        style={s.instructions}
      >
        <p style={s.instructionTitle}>📱 ¿La descarga se cancela?</p>
        <ol style={s.instructionList}>
          <li>Abre Chrome o tu navegador</li>
          <li>Ve a Ajustes → Descargas</li>
          <li>Toca "Reanudar" o "Permitir descarga"</li>
          <li>O prueba con otro navegador (Edge, Firefox)</li>
          <li>Si el problema persiste, copia este enlace en tu navegador:</li>
        </ol>
        <div style={s.linkContainer}>
          <code style={s.linkCode}>{window.location.origin}/movibus.apk</code>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.origin + '/movibus.apk')
              alert('✅ Enlace copiado al portapapeles')
            }}
            style={s.copyBtn}
          >
            📋 Copiar
          </button>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        style={s.note}
      >
        ⚠️ <strong>Importante:</strong> Si la descarga se cancela automáticamente, revisa la carpeta de Descargas y toca "Reanudar"<br/>
        Requiere Android 8.0 o superior · Activa "Fuentes desconocidas" en Ajustes antes de instalar
      </motion.p>
    </div>
  )
}

const s = {
  wrap: { 
    background: '#1B4D1B', 
    padding: '90px 6%', 
    textAlign: 'center', 
    position: 'relative', 
    overflow: 'hidden' 
  },
  dots: { 
    position: 'absolute', 
    inset: 0,
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '26px 26px' 
  },
  logo: { 
    width: 88, 
    height: 88, 
    borderRadius: 22, 
    objectFit: 'cover',
    marginBottom: 22, 
    boxShadow: '0 14px 36px rgba(0,0,0,0.3)', 
    position: 'relative' 
  },
  h2: { 
    fontSize: 'clamp(26px,4vw,42px)', 
    fontWeight: 900, 
    color: '#fff', 
    letterSpacing: -1, 
    marginBottom: 12, 
    position: 'relative' 
  },
  p: { 
    fontSize: 16, 
    color: 'rgba(255,255,255,0.6)', 
    maxWidth: 400, 
    margin: '0 auto 28px', 
    lineHeight: 1.65, 
    position: 'relative' 
  },
  meta: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: 36, 
    marginBottom: 32, 
    position: 'relative' 
  },
  btn: { 
    display: 'inline-block', 
    background: '#F5A623', 
    color: '#1B4D1B', 
    fontSize: 17,
    fontWeight: 900, 
    padding: '17px 42px', 
    borderRadius: 14, 
    textDecoration: 'none',
    position: 'relative', 
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease'
  },
  instructions: {
    background: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: '18px 22px',
    marginTop: 28,
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    position: 'relative',
    backdropFilter: 'blur(10px)'
  },
  instructionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F5A623',
    marginBottom: 12
  },
  instructionList: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    paddingLeft: 20,
    lineHeight: 1.7,
    marginBottom: 12
  },
  linkContainer: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  linkCode: {
    background: 'rgba(0,0,0,0.3)',
    padding: '8px 12px',
    borderRadius: 8,
    fontSize: 11,
    color: '#F5A623',
    fontFamily: 'monospace',
    wordBreak: 'break-all',
    flex: 1
  },
  copyBtn: {
    background: 'rgba(245,166,35,0.2)',
    border: '1px solid rgba(245,166,35,0.3)',
    color: '#F5A623',
    padding: '8px 16px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 600,
    transition: 'all 0.2s ease'
  },
  note: { 
    fontSize: 12, 
    color: 'rgba(255,255,255,0.4)', 
    marginTop: 20, 
    lineHeight: 1.6, 
    position: 'relative' 
  }
}