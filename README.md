# 🚧 Landing Page Profesional para Servicios de Albañilería - Astro 5.9

Este proyecto es una landing page ultra rápida y visualmente profesional, creada para un **albañil independiente** especializado en **construcción y remodelación de viviendas particulares**. El sitio está desarrollado con **Astro 5.9**, con foco en el rendimiento, la estética, y la conversión mediante contacto directo por **WhatsApp**.

---

## ✅ Objetivo

Diseñar una landing page moderna que transmita **confianza, experiencia y profesionalismo**, optimizada para móviles y escritorio, con **efectos visuales atractivos** y **animaciones suaves al hacer scroll**.

---

## ⚙️ Tecnologías utilizadas

- **Astro 5.9** – Framework principal para generación de sitios estáticos rápidos.
- **Tailwind CSS** – Utilizado para estilizado moderno, responsivo y limpio.
- **Swiper.js** – Para el carrusel de imágenes destacado.
- **ScrollReveal.js** – Para animar secciones al hacer scroll ([documentación oficial](https://scrollrevealjs.org/guide/installation.html)).
- **WhatsApp API** – Para contacto directo vía botón flotante o en sección final.

---

## 📐 Estructura de la página

### 1. Hero / Inicio

- Carrusel de imágenes con proyectos de albañilería.
- Mensaje de bienvenida profesional.

### 2. Servicios

- Lista clara de servicios ofrecidos (construcción, ampliaciones, reformas, etc.).
- Íconos visuales representativos de cada servicio.

### 3. Proyectos / Galería

- Mosaico o grid de imágenes de trabajos anteriores.
- Secciones animadas con ScrollReveal.

### 4. Sobre mí

- Descripción breve del profesional, su experiencia y valores.

### 5. Contacto

- Botón destacado que abre conversación en WhatsApp:
  - Formato sugerido: `https://wa.me/<número>` o `https://api.whatsapp.com/send?phone=<número>`
  - Incluye ícono de WhatsApp claramente visible.

---

## 🎨 Estética y diseño

- Colores: tonos tierra, gris cemento, naranja construcción y amarillo seguridad.
- Tipografía robusta, clara y legible.
- Diseño profesional, espacioso, con animaciones sutiles y enfoque en la experiencia del usuario.

---

## 📁 Organización del proyecto

El proyecto se estructura usando la arquitectura típica de Astro:

```

src/
├── components/
│   ├── Header.astro
│   ├── Services.astro
│   ├── Gallery.astro
│   ├── About.astro
│   ├── Contact.astro
│   └── Carousel.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
public/
tailwind.config.js
astro.config.mjs

```

---

## 🚀 Recomendaciones

- Optimizar imágenes para la web.
- Agregar datos reales del profesional (texto, número de WhatsApp, fotos propias).
- Hacer pruebas en dispositivos móviles y escritorio para validar la responsividad.
- Personalizar animaciones con ScrollReveal según preferencias.
- Considerar SEO básico (títulos, descripciones, etiquetas alt en imágenes).
- Implementar Google Analytics o similar para seguimiento de visitas.
- Asegurar que el sitio sea accesible (contraste, etiquetas ARIA, etc.).
---