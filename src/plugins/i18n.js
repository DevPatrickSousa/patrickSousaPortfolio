import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt: {
      home: {
        subtitle: 'Desenvolvedor fullStack',
        welcome: 'Desenvolvedor Fullstack com experiência prática em soluções inovadoras para sistemas. Apaixonado por tecnologia, busco agregar valor aos projetos por meio da inovação e eficiência.',
      },
      about: {
        subtitle: 'Desenvolvedor fullStack',
      },
      contact: {
        
      }
    },
    en: {
      home: {
        subtitle: 'FullStack Developer',
        welcome: 'Fullstack Developer with hands-on experience in innovative solutions for systems. Passionate about technology, I strive to add value to projects through innovation and efficiency.',
      },
      about: {
        subtitle: 'FullStack Developer',
      },
      contact: {
      }
    }
  }
});
