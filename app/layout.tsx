import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeaCeo Technologies | Innovación y Desarrollo de Startups',
  description: 'Desarrollamos tecnología de vanguardia y construimos startups exitosas. Descubre nuestros últimos proyectos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
