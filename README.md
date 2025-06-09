# 🏗️ Landing Page Profesional para Servicios de Albañilería - Astro 5.9

Este proyecto es una landing page ultra rápida y visualmente profesional, creada para un **albañil independiente** especializado en **construcción y remodelación de viviendas particulares**. El sitio está desarrollado con **Astro 5.9**, con foco en el rendimiento, la estética, y la conversión mediante contacto directo por **WhatsApp**.

---

## ✅ Características Implementadas

- ✅ **Navegación fija** con scroll suave entre secciones
- ✅ **Carrusel hero** con animaciones automáticas
- ✅ **Secciones completas**: Servicios, Proyectos, Sobre Mí, Contacto
- ✅ **Botón flotante de WhatsApp** con animaciones
- ✅ **Diseño responsivo** optimizado para móvil y escritorio
- ✅ **Animaciones ScrollReveal** en todas las secciones
- ✅ **Colores temáticos** de construcción y albañilería
- ✅ **Build de producción** optimizado y funcional

---

## ⚙️ Tecnologías utilizadas

- **Astro 5.9** – Framework principal para generación de sitios estáticos rápidos
- **Tailwind CSS v4** – Utilizado para estilizado moderno, responsivo y limpio
- **Swiper.js** – Para el carrusel de imágenes destacado
- **ScrollReveal.js** – Para animar secciones al hacer scroll
- **WhatsApp API** – Para contacto directo vía botón flotante
- **TypeScript** – Para un desarrollo más robusto

---

## 🚀 Instalación y uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio** (o usar los archivos del proyecto):
   ```bash
   cd proyecto-mario-landing
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321/`

4. **Generar build de producción**:
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**:
   ```bash
   npm run preview
   ```

---

## 📐 Estructura de la página

### 1. Header/Navegación
- Navegación fija con scroll suave
- Logo y marca profesional
- Menú responsivo para móvil

### 2. Hero/Inicio
- Carrusel de imágenes con proyectos de albañilería
- Mensaje de bienvenida profesional
- Call-to-action principal

### 3. Servicios
- Lista clara de 8 servicios principales
- Íconos visuales representativos
- Grid responsivo animado

### 4. Proyectos/Galería
- Mosaico de proyectos realizados
- Estadísticas de experiencia
- Secciones animadas con ScrollReveal

### 5. Sobre Mí
- Descripción del profesional
- Valores y características
- Imagen placeholder profesional

### 6. Contacto
- Información de contacto completa
- Botón principal de WhatsApp
- Formulario de contacto visual

---

## 🎨 Paleta de colores

- **Tierra**: `#D2691E` - Para elementos naturales
- **Cemento**: `#8C8C8C` - Para fondos neutros  
- **Construcción**: `#FF8C00` - Para CTAs y elementos principales
- **Seguridad**: `#FFD700` - Para destacar información importante

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header.astro          # Navegación principal
│   ├── Carousel.astro        # Carrusel hero con Swiper
│   ├── Services.astro        # Grid de servicios
│   ├── Gallery.astro         # Galería de proyectos
│   ├── About.astro           # Sección sobre el profesional
│   └── Contact.astro         # Información de contacto
├── layouts/
│   └── BaseLayout.astro      # Layout principal con botón flotante
├── pages/
│   └── index.astro           # Página principal
├── styles/
│   └── global.css            # Estilos globales y personalizados
├── utils/
│   └── scrollreveal.js       # Configuración de animaciones
└── public/
    ├── favicon.svg
    └── whatsapp-icon.svg     # Icono de WhatsApp
```

---

## 🔧 Personalización

### Cambiar número de WhatsApp
Buscar y reemplazar `TODO_NUMERO` en:
- `src/layouts/BaseLayout.astro`
- `src/components/Contact.astro`

### Cambiar información personal
Editar los textos en:
- `src/components/About.astro` - Información del profesional
- `src/components/Services.astro` - Lista de servicios
- `src/components/Contact.astro` - Datos de contacto

### Agregar imágenes reales
Reemplazar los placeholders en:
- `src/components/Gallery.astro` - Fotos de proyectos
- `src/components/About.astro` - Foto del profesional
- `src/components/Carousel.astro` - Imágenes del carrusel

---

## 📱 Características responsivas

- **Móvil first**: Diseñado priorizando la experiencia móvil
- **Breakpoints**: Optimizado para tablet y desktop
- **Navegación móvil**: Menú hamburguesa funcional
- **Botones táctiles**: Tamaños optimizados para touch
- **Tipografía escalable**: Legible en todos los dispositivos

---

## 🌟 Mejoras recomendadas

- [ ] Agregar imágenes reales de proyectos
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar Google Analytics
- [ ] Optimizar imágenes para WebP
- [ ] Implementar lazy loading para imágenes
- [ ] Agregar más animaciones personalizadas
- [ ] Integrar Google Maps para ubicación
- [ ] Añadir testimonios de clientes
- [ ] Implementar blog/noticias
- [ ] Agregar certificaciones profesionales

---

## 📄 Licencia

Este proyecto está diseñado específicamente para servicios de albañilería profesional.

---

## 🤝 Contribuciones

Este es un proyecto específico para Mario Albañil. Para sugerencias o mejoras, contactar directamente.

---

**¡La landing page está lista para usar! Solo personalizar los datos y el número de WhatsApp.** 🚧👷‍♂️