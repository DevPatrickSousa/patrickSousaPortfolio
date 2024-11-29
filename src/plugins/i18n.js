import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: ["pt", 'en'],
  messages: {
    pt: {
      home: {
        subtitle: 'Desenvolvedor fullStack',
        welcome: 'Desenvolvedor Fullstack com experiência prática em soluções inovadoras para sistemas. Apaixonado por tecnologia, busco agregar valor aos projetos por meio da inovação e eficiência.',
        music: 'Gostaria de ouvir uma música antes de continuarmos?',
        buttons: {
          confirm: 'Sim',
          cancel: 'Não',
          details: 'Saiba mais'
        }
      },
      about: {
        subtitle: 'Desenvolvedor fullStack',
        firstCard: {
          title: 'Formação',
          details: {
            fatecDetails: {
              name: 'FATEC',
              firstRowKey: 'Curso',
              firstRowValue: 'ADS',
              secondRowKey: 'Periodo',
              secondRowValue: '01/2020 - 11/2024',
              description: 'Curso superior em análise e desenvolvimento de sistemas realizado na instituição FATEC SPB.'
            },
            senaiDetails: {
              name: 'SENAI',
              firstRowKey: 'Curso',
              firstRowValue: 'Eletromecânica',
              secondRowKey: 'Periodo',
              secondRowValue: '01/2020 - 11/2024',
              description: 'Curso técnico em eletromecânica realizado na instituição SENAI Suzana Dias.'
            }
          }
        },
        secondCard: {
          title: 'Experiência',
          details: {
            skylerDetails: {
              firstRowKey: 'Empresa',
              firstRowValue: 'Skyler',
              secondRowKey: 'Periodo',
              secondRowValue: '04/2023 - 09/2024',
              description: 'Implementei funcionalidades no sistema Skyler para automatizar tarefas, incluindo um controle financeiro para facilitar a gestão e melhorar a experiência do usuário. Conduzi pesquisas para aprimorar o desempenho e solucionei problemas dentro dos prazos, utilizando GitLab para versionamento e gestão. As principais tecnologias utilizadas foram Vue.js, Nuxt, Vuetify, PrimeVue e Django REST. Também criei uma extensão Chrome para automatizar processos específicos.'
            },
            spbDetails: {
              firstRowKey: 'Empresa',
              firstRowValue: 'Prefeitura de SPB',
              secondRowKey: 'Periodo',
              secondRowValue: '03/2021 - 12/2022',
              description: 'Responsável por testar equipamentos de rede (roteadores, switches, VOIP, etc.), filtrar problemas relatados no sistema e encaminhá-los para a equipe técnica com as informações necessárias. Além disso, separava materiais para infraestrutura conforme as especificações da equipe e realizava atendimento remoto aos servidores, utilizando ferramentas ITSM para diagnosticar e solucionar problemas, tanto em sistemas operacionais quanto em outros sistemas específicos.'
            }
          }
        },
        thirdCard: {

        },
        buttons: {
          moreDetails: 'Mais detalhes',
          lessDetails: 'Menos detalhes',
        }
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
        firstCard: 'Education',
        secondCard: 'Experience',
        buttons: {
          moreDetails: 'More details',
          lessDetails: 'Less details',
        }
      },
      contact: {
      }
    }
  }
});
