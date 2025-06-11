export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconUrl: string;
  colorClass: string;
  bgColorClass: string;
}

export const services: Service[] = [
  {
    id: "socioemocional",
    title: "Desarrollo Socioemocional",
    description: "Talleres Sobre resiliencia, inteligencia emocional y liderazgo Juvenil.",
    longDescription: `Nuestros talleres de desarrollo socioemocional están diseñados para fortalecer las habilidades emocionales y sociales de niños y jóvenes. 
    
    Incluyen:
    • Manejo de emociones y autorregulación
    • Desarrollo de la empatía y habilidades sociales
    • Técnicas de resiliencia y adaptación
    • Formación en liderazgo juvenil
    • Resolución de conflictos
    • Trabajo en equipo y colaboración`,
    iconUrl: "https://img.icons8.com/?size=300&id=vDlden3lMLKn&format=png&color=000000",
    colorClass: "text-primary",
    bgColorClass: "bg-primary/10"
  },
  {
    id: "neuroplasticidad",
    title: "Neuroplasticidad y Aprendizaje",
    description: "Estrategias basadas en DUA para potenciar habilidades cognitivas",
    longDescription: `Nuestro programa de neuroplasticidad y aprendizaje se fundamenta en el Diseño Universal para el Aprendizaje (DUA) y las últimas investigaciones en neurociencia educativa.
    
    Ofrecemos:
    • Evaluación de estilos de aprendizaje
    • Estrategias personalizadas de estudio
    • Técnicas de memoria y concentración
    • Desarrollo del pensamiento crítico
    • Herramientas para la metacognición
    • Apoyo en dificultades específicas del aprendizaje`,
    iconUrl: "https://img.icons8.com/?size=300&id=9ezUlv7zefR0&format=png&color=000000",
    colorClass: "text-secondary",
    bgColorClass: "bg-secondary/10"
  },
  {
    id: "sostenibilidad",
    title: "Educación para la Sostenibilidad",
    description: "Integración de los ODS en proyectos comunitarios y ambientales",
    longDescription: `Nuestro programa de educación para la sostenibilidad está alineado con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.
    
    Actividades y proyectos:
    • Talleres de conciencia ambiental
    • Proyectos de reciclaje y reutilización
    • Huertos escolares y comunitarios
    • Programas de ahorro energético
    • Iniciativas de desarrollo comunitario
    • Educación en consumo responsable`,
    iconUrl: "https://img.icons8.com/?size=300&id=rN0tPNSeFkgH&format=png&color=000000",
    colorClass: "text-accent",
    bgColorClass: "bg-accent/10"
  },
  {
    id: "creatividad",
    title: "Creatividad y expresión",
    description: "Espacios para el arte, la música y la escritura",
    longDescription: `Fomentamos la expresión creativa a través de diversas formas artísticas y culturales.
    
    Nuestros espacios incluyen:
    • Talleres de artes plásticas
    • Clases de música y expresión corporal
    • Talleres de escritura creativa
    • Teatro y dramatización
    • Fotografía y medios digitales
    • Exposiciones y presentaciones artísticas`,
    iconUrl: "https://img.icons8.com/?size=300&id=24W3YiVHWvNC&format=png&color=000000",
    colorClass: "text-info",
    bgColorClass: "bg-info/10"
  },
  {
    id: "empoderamiento",
    title: "Empoderamiento Juvenil",
    description: "Formación en autonomía, Emprendimiento y participación social.",
    longDescription: `Nuestro programa de empoderamiento juvenil busca desarrollar líderes conscientes y activos en su comunidad.
    
    El programa incluye:
    • Formación en liderazgo y autonomía
    • Talleres de emprendimiento social
    • Proyectos de impacto comunitario
    • Desarrollo de habilidades comunicativas
    • Mentoría y orientación vocacional
    • Participación en iniciativas sociales`,
    iconUrl: "https://img.icons8.com/?size=300&id=M5wgBy3XOiGW&format=png&color=000000",
    colorClass: "text-success",
    bgColorClass: "bg-success/10"
  }
]; 