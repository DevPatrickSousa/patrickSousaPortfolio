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
        music: 'Gostaria de ouvir uma música para relaxar antes de continuarmos?',
        buttons: {
          confirm: 'Sim',
          cancel: 'Não',
          details: 'Saiba mais'
        }
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
        music: 'Would you like to listen to a song before we continue?',
        buttons: {
          confirm: 'Yes',
          cancel: 'No',
          details: 'See more'
        }
      },
      about: {
        subtitle: 'FullStack Developer',
      },
      contact: {
      }
    }
  }
});
