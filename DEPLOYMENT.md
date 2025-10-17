# Guía de Deployment en Netlify

## 📋 Preparación

La aplicación ya está configurada para deployment en Netlify con las siguientes características:

- ✅ Formulario de contacto con Netlify Forms
- ✅ Email configurado: neaceotechnologies@gmail.com
- ✅ Export estático de Next.js
- ✅ Configuración de redirects

## 🚀 Pasos para Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NeaCeo Technologies"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/neaceo-technologies.git
   git push -u origin main
   ```

2. **Conectar con Netlify:**
   - Ve a [Netlify](https://app.netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Elige el repositorio `neaceo-technologies`
   - Configuración de build:
     - **Build command:** `npm run build`
     - **Publish directory:** `out`
   - Click en "Deploy site"

3. **Configurar nombre del sitio:**
   - Ve a "Site settings" → "Site details"
   - Click en "Change site name"
   - Ingresa: `neaceo` (quedará como neaceo.netlify.app)

### Opción 2: Deploy Manual (Drag & Drop)

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```

2. **Subir a Netlify:**
   - Ve a [Netlify](https://app.netlify.com)
   - Arrastra la carpeta `out` a la zona de deploy
   - Configura el nombre del sitio a `neaceo`

## 📧 Configuración de Netlify Forms

Una vez desplegado:

1. **Verificar el formulario:**
   - Ve a "Site settings" → "Forms"
   - Deberías ver el formulario "contact"

2. **Configurar notificaciones por email:**
   - En "Forms" → "Form notifications"
   - Click en "Add notification" → "Email notification"
   - Email: `neaceotechnologies@gmail.com`
   - Selecciona el formulario "contact"
   - Guarda los cambios

3. **Configurar spam protection:**
   - Netlify Forms incluye protección anti-spam automática
   - El honeypot field ya está configurado

## 🔧 Configuración Post-Deploy

### Custom Domain (Opcional)
Si tienes un dominio propio:
1. Ve a "Domain settings"
2. Click en "Add custom domain"
3. Sigue las instrucciones para configurar DNS

### HTTPS
- Netlify habilita HTTPS automáticamente
- Espera unos minutos después del deploy

### Environment Variables
No se requieren variables de entorno para esta aplicación.

## 📝 Actualizar el Sitio

### Desde GitHub:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```
Netlify detectará los cambios y redesplegará automáticamente.

### Manual:
1. Ejecuta `npm run build`
2. Arrastra la carpeta `out` a Netlify

## ✅ Verificación

Después del deploy, verifica:

- [ ] La página carga correctamente en neaceo.netlify.app
- [ ] El formulario de contacto funciona
- [ ] Los emails llegan a neaceotechnologies@gmail.com
- [ ] Todos los links de navegación funcionan
- [ ] Los números de teléfono son clickeables
- [ ] Las animaciones se reproducen correctamente
- [ ] El sitio es responsive en mobile

## 🐛 Troubleshooting

### El formulario no envía emails:
1. Verifica que el formulario esté en "Site settings" → "Forms"
2. Confirma que las notificaciones estén configuradas
3. Revisa la carpeta de spam

### Error 404 en rutas:
- Verifica que el archivo `netlify.toml` esté en la raíz
- Confirma que `_redirects` esté en la carpeta `public`

### Build falla:
- Verifica que todas las dependencias estén instaladas
- Revisa los logs de build en Netlify
- Asegúrate de usar Node.js 18+

## 📞 Soporte

Si tienes problemas con el deployment, contacta a:
- Email: neaceotechnologies@gmail.com
- Documentación Netlify: https://docs.netlify.com
