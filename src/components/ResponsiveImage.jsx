import React from 'react'
import manifest from '../assets/image-manifest.json'

export default function ResponsiveImage({ name, alt = '', sizes = '(max-width: 640px) 100vw, 640px', className = '' }) {
  const entry = manifest[name]
  if (!entry) return <img src="/images/placeholder.jpg" alt={alt} className={className} />

  // build srcsets
  const jpgSrcSet = entry.map(v => `${v.jpg} ${v.width}w`).join(', ')
  const webpSrcSet = entry.map(v => `${v.webp} ${v.width}w`).join(', ')
  const largest = entry.reduce((a, b) => (a.width > b.width ? a : b))

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img src={largest.jpg} srcSet={jpgSrcSet} sizes={sizes} alt={alt} loading="lazy" className={className} />
    </picture>
  )
}
