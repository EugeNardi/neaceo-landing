# NeaCeo Technologies - Landing Page

Una landing page moderna y profesional diseñada con el estilo de Apple, Notion y Shadcn UI, con animaciones elegantes para presentar proyectos y servicios de tecnología.

## 🚀 Características

- **Diseño Moderno**: Inspirado en Apple, Notion y Shadcn UI
- **Animaciones Fluidas**: Implementadas con Framer Motion
- **Responsive**: Totalmente adaptable a todos los dispositivos
- **TypeScript**: Código type-safe y mantenible
- **Tailwind CSS**: Estilos utility-first para desarrollo rápido
- **Next.js 14**: Framework React de última generación

## 📦 Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Shadcn UI Components

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── public/
```

## 🎨 Secciones

- **Hero**: Sección principal con animaciones de fondo dinámicas y CTAs interactivos
- **Features**: Características clave con animaciones de hover y rotación
- **Servicios**: 4 servicios principales con animaciones interactivas
- **Contacto**: Formulario funcional con Netlify Forms + números de teléfono
- **Footer**: Navegación simplificada y email de contacto

## 📞 Información de Contacto

- **Email**: neaceotechnologies@gmail.com
- **Teléfonos**:
  - Eugenio: +54 9 3467 41 2501
  - Franco: +54 9 351 56 37053
  - Contacto: +54 9 3472 58 70 90

## 🚀 Deployment

### Netlify (Recomendado)

La aplicación está configurada para deployment en Netlify:

```bash
npm run build
```

Esto generará una carpeta `out` lista para deployment.

**Ver instrucciones completas en [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Local

Para ejecutar en producción localmente:

```bash
npm run build
npm start
```

## 📝 Personalización

Puedes personalizar fácilmente:
- Colores en `tailwind.config.ts`
- Servicios en `components/Services.tsx`
- Features en `components/Features.tsx`
- Email de contacto: actualmente configurado como `neaceotechnologies@gmail.com`

## ✉️ Formulario de Contacto

El formulario está configurado con **Netlify Forms**:
- Envío directo desde el sitio web
- Notificaciones a: neaceotechnologies@gmail.com
- Protección anti-spam incluida
- Fallback a mailto si falla el envío
- Campos: nombre, email, empresa (opcional), mensaje

### Configuración en Netlify:
1. El formulario se detecta automáticamente al hacer deploy
2. Configura notificaciones en: Site Settings → Forms → Notifications
3. Agrega el email: neaceotechnologies@gmail.com

## 📄 Licencia

© 2024 NeaCeo Technologies. Todos los derechos reservados.
"# neaceo-landing" 
