## Tenerife Next Academy – quick ops guide

### Desarrollo local
```bash
npm install
npm run dev
```
- Variables necesarias para el formulario (añadir a `.env.local`):
  - `RESEND_API_KEY=` (o SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
  - `CONTACT_TO_EMAIL=jorge@tenerifenextacademy.com`
  - `CONTACT_FROM_EMAIL=tna@notifications.tenerifenextacademy.com` (o similar admitido por tu proveedor)
  - `NEXT_PUBLIC_SITE_URL=http://localhost:3000` (o la URL real en prod)

### Despliegue en Vercel (resumen)
1. Conecta el repo a Vercel.
2. Añade las variables anteriores en Project Settings → Environment Variables.
3. Asigna dominio (p. ej. `tenerifenextacademy.com`) en Vercel, apunta DNS (A/ALIAS/CNAME) según indique Vercel.
4. Vercel emitirá HTTPS automático; verifica en el dashboard.

### Despliegue self-hosted (Ubuntu)
1. Build: `npm run build` y arranque: `npm start` (o con `pm2`/`systemd`).
2. Nginx como reverse proxy a `localhost:3000`.
3. Certbot para HTTPS en Nginx.

### Contenido / blog
- Noticias en `content/news/*.mdx` con frontmatter: `title`, `date`, `summary`, `tags`, `heroImage`.
- Las páginas se generan en `/latest-news` y `/latest-news/[slug]`.
