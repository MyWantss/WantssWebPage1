# ╔══════════════════════════════════════════════════════════════════╗
# ║           WANTSS Web Page Creator — Comandos PowerShell        ║
# ║                    Proyecto: Vite + React 19                   ║
# ╚══════════════════════════════════════════════════════════════════╝

# ─────────────────────────────────────────────────────────────────
# 1. NAVEGACIÓN AL PROYECTO
# ─────────────────────────────────────────────────────────────────

cd "C:\Users\Flako\Web-Page Creator Main"

# ─────────────────────────────────────────────────────────────────
# 2. INSTALACIÓN DE DEPENDENCIAS
# ─────────────────────────────────────────────────────────────────

# Instalar todas las dependencias del proyecto
npm install

# Instalar dependencias individuales (ya incluidas en package.json)
npm install react react-dom react-router-dom
npm install framer-motion
npm install gsap
npm install lucide-react

# Instalar dependencias de desarrollo
npm install --save-dev vite @vitejs/plugin-react
npm install --save-dev puppeteer
npm install --save-dev eslint

# ─────────────────────────────────────────────────────────────────
# 3. SERVIDOR DE DESARROLLO
# ─────────────────────────────────────────────────────────────────

# Iniciar servidor de desarrollo (Vite HMR)
npm run dev

# Iniciar en un puerto específico
npx vite --port 5173

# Iniciar y abrir navegador automáticamente
npx vite --open

# ─────────────────────────────────────────────────────────────────
# 4. BUILD DE PRODUCCIÓN
# ─────────────────────────────────────────────────────────────────

# Compilar para producción (output en /dist)
npm run build

# Previsualizar el build de producción
npm run preview

# Previsualizar en un puerto específico
npx vite preview --port 4173

# ─────────────────────────────────────────────────────────────────
# 5. LINTING Y CALIDAD DE CÓDIGO
# ─────────────────────────────────────────────────────────────────

# Ejecutar ESLint
npm run lint

# Ejecutar ESLint con corrección automática
npx eslint --fix "src/**/*.{js,jsx}"

# ─────────────────────────────────────────────────────────────────
# 6. PUPPETEER — CAPTURAS DE PANTALLA
# ─────────────────────────────────────────────────────────────────

# Captura de pantalla completa de la página
npx puppeteer screenshot http://localhost:5173/acctual --fullpage

# Captura con nombre específico
npx puppeteer screenshot http://localhost:5173/acctual --fullpage --output screenshot.png

# Captura con viewport específico (mobile)
npx puppeteer screenshot http://localhost:5173/acctual --fullpage --viewport 375x812 --output mobile.png

# Captura con viewport tablet
npx puppeteer screenshot http://localhost:5173/acctual --fullpage --viewport 768x1024 --output tablet.png

# Captura con viewport desktop
npx puppeteer screenshot http://localhost:5173/acctual --fullpage --viewport 1440x900 --output desktop.png

# ─────────────────────────────────────────────────────────────────
# 7. GIT — CONTROL DE VERSIONES
# ─────────────────────────────────────────────────────────────────

# Inicializar repositorio (si no existe)
git init

# Ver estado de archivos
git status

# Agregar archivos al staging
git add .

# Crear commit
git commit -m "descripción del cambio"

# Ver historial de commits
git log --oneline -10

# Ver diferencias
git diff

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# ─────────────────────────────────────────────────────────────────
# 8. ESTRUCTURA DEL PROYECTO
# ─────────────────────────────────────────────────────────────────

# Ver estructura de carpetas (sin node_modules)
Get-ChildItem -Recurse -Directory | Where-Object { $_.FullName -notmatch "node_modules|\.git|dist" } | Select-Object FullName

# Ver todos los archivos JSX
Get-ChildItem -Recurse -Filter "*.jsx" | Where-Object { $_.FullName -notmatch "node_modules" } | Select-Object FullName

# Ver todos los archivos CSS
Get-ChildItem -Recurse -Filter "*.css" | Where-Object { $_.FullName -notmatch "node_modules" } | Select-Object FullName

# Ver tamaño del directorio dist (después de build)
Get-ChildItem -Recurse "dist" | Measure-Object -Property Length -Sum | Select-Object @{N='SizeMB';E={[math]::Round($_.Sum/1MB,2)}}

# ─────────────────────────────────────────────────────────────────
# 9. LIMPIEZA
# ─────────────────────────────────────────────────────────────────

# Eliminar node_modules y reinstalar
Remove-Item -Recurse -Force node_modules
npm install

# Limpiar caché de npm
npm cache clean --force

# Eliminar build anterior
Remove-Item -Recurse -Force dist

# ─────────────────────────────────────────────────────────────────
# 10. UTILIDADES
# ─────────────────────────────────────────────────────────────────

# Ver qué puerto está usando Vite
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue

# Matar proceso en un puerto específico
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process -Force

# Ver versiones instaladas
node --version
npm --version
npx vite --version

# Listar dependencias del proyecto
npm list --depth=0

# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# ─────────────────────────────────────────────────────────────────
# 11. VARIABLES DE ENTORNO (si se necesitan)
# ─────────────────────────────────────────────────────────────────

# Crear archivo .env
New-Item -ItemType File -Name ".env" -Force

# Ejemplo de variables para Vite (prefijo VITE_)
# VITE_API_URL=https://api.example.com
# VITE_APP_TITLE=WANTSS

# ─────────────────────────────────────────────────────────────────
# 12. DESPLIEGUE RÁPIDO (Netlify / Vercel)
# ─────────────────────────────────────────────────────────────────

# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy a Netlify (después de npm run build)
netlify deploy --dir=dist --prod

# Instalar Vercel CLI
npm install -g vercel

# Deploy a Vercel
vercel --prod
