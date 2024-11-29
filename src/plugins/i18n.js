import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: ["pt", 'en'],
  messages: {
    pt: {
      menu: {
        firstRoute: 'Início',
        secondRoute: 'Sobre mim',
        thirdRoute: 'Conecte-se'
      },
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
              name: 'Skyler',
              firstRowKey: 'Empresa',
              firstRowValue: 'Skyler',
              secondRowKey: 'Periodo',
              secondRowValue: '04/2023 - 09/2024',
              description: 'Implementei funcionalidades no sistema Skyler para automatizar tarefas, incluindo um controle financeiro para facilitar a gestão e melhorar a experiência do usuário. Conduzi pesquisas para aprimorar o desempenho e solucionei problemas dentro dos prazos, utilizando GitLab para versionamento e gestão. As principais tecnologias utilizadas foram Vue.js, Nuxt, Vuetify, PrimeVue e Django REST. Também criei uma extensão Chrome para automatizar processos específicos.'
            },
            spbDetails: {
              name: 'Prefeitura de SPB',
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
        title: 'Deseja saber mais sobre meus projetos ou esclarecer alguma dúvida? Entre em contato comigo por e-mail ou através das minhas redes!',
        cardTitle: 'Dúvidas? Envie uma mensagem.',
        cardTitleMobile: 'Dúvidas?',
        form: {
          formInputName: 'Nome',
          formInputEmail: 'Email',
          formInputMessage: 'Mensagem',
          formButton: 'Enviar',
          snackBarText: 'Formulário enviado com sucesso!',
          rules: {
            required: 'Obrigatório.',
            invalidEmail: 'Email inválido',
            minCharacters: 'Mínimo de 3 caracteres.',
            maxCharacters: 'máximo de 50 caracteres.'
          }
        }
      },
    },
    en: {
      menu: {
        firstRoute: 'Home',
        secondRoute: 'About me',
        thirdRoute: 'Get in touch'
      },
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
        firstCard: {
          title: 'Education',
          details: {
            fatecDetails: {
              name: 'FATEC',
              firstRowKey: 'Course',
              firstRowValue: 'SAD',
              secondRowKey: 'Duration',
              secondRowValue: '01/2020 - 11/2024',
              description: 'Higher education in Systems Analysis and Development completed at FATEC SPB.'
            },
            senaiDetails: {
              name: 'SENAI',
              firstRowKey: 'Course',
              firstRowValue: 'Electromechanics',
              secondRowKey: 'Duration',
              secondRowValue: '01/2020 - 11/2024',
              description: 'Technical course in Electromechanics completed at SENAI Suzana Dias.'
            }
          }
        },
        secondCard: {
          title: 'Experience',
          details: {
            skylerDetails: {
              name: 'Skyler',
              firstRowKey: 'Company',
              firstRowValue: 'Skyler',
              secondRowKey: 'Duration',
              secondRowValue: '04/2023 - 09/2024',
              description: 'Implemented features in the Skyler system to automate tasks, including a financial control module to streamline management and enhance the user experience. I conducted research to improve performance and resolved issues within deadlines, utilizing GitLab for version control and project management. The main technologies used were Vue.js, Nuxt, Vuetify, PrimeVue, and Django REST. Additionally, I developed a Chrome extension to automate specific processes.'
            },
            spbDetails: {
              name: 'Prefeitura de SPB',
              firstRowKey: 'Company',
              firstRowValue: 'Prefeitura de Santana de Parnaíba',
              secondRowKey: 'Duration',
              secondRowValue: '03/2021 - 12/2022',
              description: 'Responsible for testing network equipment (routers, switches, VOIP, etc.), filtering reported issues in the system, and forwarding them to the technical team with the necessary information. Additionally, organized materials for infrastructure based on the team’s specifications and provided remote support for servers, using ITSM tools to diagnose and resolve issues in both operating systems and other specific systems.'
            }
          }
        },
        thirdCard: {

        },
        buttons: {
          moreDetails: 'More details',
          lessDetails: 'Less details',
        }
      },
      contact: {
        title: 'Would you like to learn more about my projects or clarify any questions? Feel free to contact me via email or through my social medias!',
        cardTitle: 'Questions? Send a message.',
        cardTitleMobile: 'Questions?',
        form: {
          formInputName: 'Name',
          formInputEmail: 'Email',
          formInputMessage: 'Message',
          formButton: 'Send',
          snackBarText: 'Form successfully submitted!',
          rules: {
            required: 'required',
            invalidEmail: 'Invalid e-mail.',
            minCharacters: 'Minimum 3 characters.',
            maxCharacters: 'Maximum 50 characters'
          }
        },
      },
    }
  }
});
