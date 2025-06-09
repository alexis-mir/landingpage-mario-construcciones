// Utilidad para manejar variables de entorno del proyecto
// filepath: c:\Users\Alexis\Desktop\workspace\proyecto-mario\src\utils\env.js

/**
 * Configuración centralizada de variables de entorno
 */
export const ENV_CONFIG = {
  // Números de teléfono
  PHONE_NUMBER: import.meta.env.PHONE_NUMBER || '34123456789',
  PHONE_DISPLAY: import.meta.env.PHONE_DISPLAY || '+34 123 456 789',
  
  // Información de contacto
  EMAIL: import.meta.env.EMAIL || 'mario@albanil.com',
  LOCATION: import.meta.env.LOCATION || 'Madrid y alrededores',
  
  // Configuración de la empresa
  COMPANY_NAME: import.meta.env.COMPANY_NAME || 'Mario Albañil',
  COMPANY_DESCRIPTION: import.meta.env.COMPANY_DESCRIPTION || 'Construcción Profesional',
  
  // Horarios
  WORK_HOURS: import.meta.env.WORK_HOURS || 'Lunes a Viernes: 8:00 - 18:00',
  
  // Zona de trabajo
  WORK_RADIUS: import.meta.env.WORK_RADIUS || 'Radio de 50km'
};

/**
 * Genera URL de WhatsApp con mensaje personalizado
 * @param {string} message - Mensaje a enviar
 * @returns {string} URL completa de WhatsApp
 */
export function getWhatsAppUrl(message = 'Hola Mario, me interesa obtener un presupuesto para un proyecto de albañilería. ¿Podrías ayudarme?') {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${ENV_CONFIG.PHONE_NUMBER}?text=${encodedMessage}`;
}

/**
 * Mensajes predefinidos para WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  PRESUPUESTO: 'Hola Mario, me interesa obtener un presupuesto para un proyecto de albañilería. ¿Podrías ayudarme?',
  CONSULTA_GENERAL: 'Hola Mario, tengo algunas preguntas sobre sus servicios de construcción.',
  REFORMA: 'Hola Mario, me gustaría saber sobre sus servicios de reforma integral.',
  CONSTRUCCION: 'Hola Mario, estoy interesado en construir una vivienda nueva.',
  AMPLIACION: 'Hola Mario, me gustaría ampliar mi vivienda actual.'
};
