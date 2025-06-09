# Listado de Tareas Paso a Paso

A continuación encontrarás un listado muy detallado y desglosado en tareas pequeñas para crear la landing page en Astro 5.9 según el prompt acordado. Cada tarea es lo más simple y autocontenida posible.

---

## 1. Preparación del Proyecto

1. Inicializar un proyecto Astro nuevo:
   - Ejecutar `npm create astro@latest`.
2. Seleccionar plantilla “basic” cuando lo solicite el CLI.
3. Acceder a la carpeta del proyecto:
   - `cd <nombre-de-tu-proyecto>`.
4. Instalar dependencias iniciales:
   - `npm install`.
5. Instalar Tailwind CSS:
   - `npm install -D tailwindcss postcss autoprefixer`.
   - `npx tailwindcss init -p`.
6. Configurar `tailwind.config.js`:
   - Establecer rutas en `content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}']`.
7. Crear archivo de estilos globales:
   - `src/styles/global.css`.
   - Incluir directivas `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
8. Importar `global.css` en `src/pages/_template.astro` o en `src/layouts/BaseLayout.astro`.

---

## 2. Estructura de Carpetas y Archivos

1. Crear carpeta de componentes:
   - `mkdir src/components`.
2. Crear carpeta de layouts:
   - `mkdir src/layouts`.
3. Crear componente de layout base:
   - `src/layouts/BaseLayout.astro`.
4. Crear página de inicio:
   - `src/pages/index.astro`.

---

## 3. Configuración de ScrollReveal

1. Instalar ScrollReveal:
   - `npm install scrollreveal`.
2. Crear archivo de utilidades:
   - `src/utils/scrollreveal.js`.
3. Importar y configurar ScrollReveal en `scrollreveal.js`:
```js
   import ScrollReveal from 'scrollreveal';
   export function initScrollReveal() {
     ScrollReveal().reveal('.sr', { distance: '50px', duration: 500, origin: 'bottom', reset: true });
   }
```

4. Importar `initScrollReveal` en `src/layouts/BaseLayout.astro`.
5. Llamar a `initScrollReveal()` dentro de un bloque `<script>` al final del `body`.

---

## 4. Carrusel de Imágenes

1. Instalar Swiper.js:

   * `npm install swiper`.
2. Crear componente `Carousel.astro` en `src/components`:

   * Importar los estilos de Swiper.
   * Estructura básica de slides.
3. Añadir clases `sr` (ScrollReveal) a cada slide si quieres animarlas.
4. Importar `Carousel.astro` en `index.astro` dentro de la sección Hero.

---

## 5. Sección Hero / Inicio

1. En `index.astro`, crear sección `<section id="hero">`.
2. Insertar componente `<Carousel />` dentro de `#hero`.
3. Debajo del carrusel, añadir un título:

   * `<h1 class="sr text-4xl font-bold">Construyendo confianza, ladrillo a ladrillo</h1>`.
4. Marcar este `h1` con clase `sr`.

---

## 6. Sección Servicios

1. Crear componente `Services.astro` en `src/components`.
2. Definir un array de servicios con nombre e ícono.
3. Renderizar cada servicio en un grid responsivo.
4. Asignar clase `sr` a cada tarjeta de servicio.
5. Importar `Services.astro` en `index.astro` tras la sección Hero.

---

## 7. Sección Proyectos / Galería

1. Crear componente `Gallery.astro`.
2. Preparar placeholder para imágenes reales y genéricas.
3. Diseñar un grid o masonry layout.
4. Añadir clase `sr` a cada imagen.
5. Importar `Gallery.astro` en `index.astro`.

---

## 8. Sección Sobre Mí

1. Crear componente `About.astro`.
2. Añadir un párrafo breve con experiencia y valores.
3. Incluir foto de perfil placeholder.
4. Marcar párrafo y foto con clase `sr`.
5. Importar `About.astro` en `index.astro`.

---

## 9. Sección Contacto

1. Crear componente `Contact.astro`.
2. Añadir texto breve de invitación al contacto.
3. Añadir botón con:

   ```html
   <a
     href="https://wa.me/TODO_NUMERO"
     class="btn-whatsapp sr"
     target="_blank"
     rel="noopener"
   >
     <img src="/whatsapp-icon.svg" alt="WhatsApp" class="inline-block w-6 h-6" />
     ¡Escríbeme por WhatsApp!
   </a>
   ```
4. Guardar `TODO_NUMERO` como placeholder.
5. Importar `Contact.astro` en `index.astro`.

---

## 10. Botón Flotante de WhatsApp

1. En `BaseLayout.astro`, añadir elemento `<div id="whatsapp-float">`.
2. Estilizarlo con Tailwind para posición fija abajo a la derecha.
3. Añadir animación CSS o JS:

   * Detectar scroll hasta sección `#contacto`.
   * Mover el botón a su posición dentro de la sección.
   * Fijarlo con `position: fixed`.
4. Marcar el contenedor con clase `sr` si quieres animarlo al aparecer.

---

## 11. Optimización y Preparación Final

1. Revisar que todas las imágenes tengan atributos `alt`.
2. Comprimir y optimizar imágenes (WebP / JPEG optimizado).
3. Probar en móvil y escritorio.
4. Asegurar que todas las clases `sr` funcionan correctamente.
5. Generar build de producción:

   * `npm run build`.
6. Servir localmente para inspeccionar:

   * `npm run preview`.

---

## 12. Documentación del README

1. Copiar el contenido del prompt en `README.md`.
2. Ajustar enlaces y placeholders (`TODO_NUMERO`, logo, etc.).
3. Incluir instrucciones de instalación y puesta en marcha.
4. Guardar y commitear todo en el repositorio.

---

> **Nota:** Si surge cualquier duda o falta de información en alguno de estos pasos, por favor consúltame antes de avanzar.
