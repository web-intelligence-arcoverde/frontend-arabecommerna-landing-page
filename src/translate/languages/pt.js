import { subtle } from "crypto";

export const messages = {
  pt: {
    translations: {
      header: {
        logo: 'Árabe com Merna',
        currentPage: 'Curso',
        lastPage: 'Traduções',
      },
      allSections: {
        howItWorks: 'Como fuciona',
        aboutUs: 'Sobre nós',
        explore: 'Explore',
        discover: 'Descubra',
        content: 'Conteúdo',
        platform: 'Plataforma',
        price: 'Preço',
        feedback: 'Feedback',
        results: 'Resultados',
        questions: 'Dúvidas',
      },
      presentation: {
        learn: {
          title: 'APRENDIZADO DE IDIOMA',
          subTitle:
            'Torne-se <span>fluente em Árabe</span> de um modo eficiente e descomplicado',
        },
        wheAre: {
          title:
            'Somos a primeira metodologia que garante a fluência no idioma Árabe e te insere de verdade na cultura',
          subTitle: 'Começar a aprender',
        },
        seeMore: 'Arraste para ver mais',
      },
      howWork: {
        work: {
          title: 'COMO FUNCIONA',
          subTitle:
            'Aprenda a <span>ler, escrever e conversar</span> em Árabe com mais confiança',
        },
        methodology: {
          title: 'Metodologia',
          subTitle:
            'Adotamos um modelo de ensino conversacional, junto com a prática constante e o uso da língua em situações reais, para garantir um aprendizado eficaz e imersivo',
        },
        liveClasses: {
          title: 'Aulas ao vivo',
          subTitle:
            'Estudar árabe com uma professora nativa ao vivo traz diversos benefícios: você aprimora a pronúncia, melhora a compreensão do idioma e ganha confiança para se comunicar',
        },
        studentFollow: {
          title: 'Acompanhamento do aluno',
          subTitle:
            'Com a orientação constante da professora, através de feedbacks e correções frequentes, o aluno pode aprimorar suas habilidades e avançar mais rapidamente',
        },
      },
      feedback: {
        title: 'DEPOIMENTOS',
        subtitle: 'Feedback de quem fez e <span>recomenda</span>',
      },
      teacher: {
        title: 'COM QUEM VOCÊ VAI APRENDER',
        subTitle: 'Olá, eu me chamo <span>Merna</span>',
        about:
          'Com quase 10 anos de experiência no ensino do idioma árabe, sua paixão pela língua e pela cultura, juntamente com sua vocação pedagógica, a incentivaram a criar um curso de árabe para estrangeiros no Cairo, que atualmente está ajudando vários alunos de diversas nacionalidades ao redor do mundo',
        end: 'Ao longo dos anos, optou por uma abordagem de ensino flexível, que se adapta às necessidades individuais de cada aluno, focando no aprendizado através da conversação',
      },
      aboutUs: {
        course: {
          title: 'SOBRE NOSSO CURSO',
          subTitle:
            'Intensificamos a sua <span>experiência de aprendizado</span> de uma nova língua',
          about:
            'Nosso curso é a escolha perfeita para quem quer aprender o idioma árabe do zero e chegar ao nível avançado. Com uma metodologia dinâmica e abordagem conversacional, nosso curso te ajuda a decolar seu nível de árabe de forma rápida e eficaz',
        },
        material: {
          title: 'Material de estudo',
          subTitle:
            'Livros didáticos, resumos e materiais extras de todas as aulas',
        },
        certificate: {
          title: 'Certificado de conclusão',
          subTitle:
            'Ao final do curso, com o nível que foi alcançado e a carga horária',
        },
      },
      price: {
        text: 'Não permita que a barreira do idioma o impeça de <span>alcançar seus objetivos</span>. Adquira acesso ao ambiente de aprendizado ideal para dar o primeiro passo com confiança',
        card: {
          text: 'PRÓXIMAS TURMAS',
          from: 'De',
          per: 'por',
          button: 'Quero começar a aprender',
          amonth: 'Por mês',
          benefit: {
            one: 'Ler e escrever em Árabe',
            two: 'Fluência no idioma',
            three: 'Material didático',
            four: 'Imersão cultural',
          },
        },
      },
      discovery: {
        title: 'DESCUBRA',
        subTitle: 'Porque aprender a <a>língua Árabe</a>',
        buttons: {
          culture: 'Cultura',
          travels: 'Viagens',
          careers: 'Carreiras',
          religion: 'Religião',
        },
        text: {
          culture: `A cultura árabe é extremamente rica e diversa, abrangendo mais de 20 países e uma população de mais de 400 milhões de pessoas. Essa riqueza cultural é expressa em áreas como a literatura, arquitetura, música, dança e gastronomia. A influência da cultura árabe pode ser vista em várias partes do mundo, o que evidencias sua importância e valorização`,
          travels: `O mundo árabe abriga alguns dos pontos turísticos mais espetaculares e impressionantes do mundo. A Mesquita Sheikh Zayed em Abu Dhabi é um exemplo deslumbrante da arquitetura islâmica moderna. As pirâmides no Egito são outro marco histórico que continua fascinando os visitantes há milhares de anos. Petra, na Jordânia, é uma cidade antiga esculpida em pedra, e o Burj Khalifa em Dubai é um ícone moderno que oferece vistas incríveis da cidade`,
          careers: `O mundo árabe oferece muitas oportunidades em áreasque vão de negócios até educação e turismo. Cidades como Dubai e Doha estão se tornando hubs globais de finanças e tecnologia. Além disso, muitas universidades de renome estão localizadas em países árabes, oferecendo oportunidades de intercâmbio. O turismo também está em alta, com destinos como o Egito, Marrocos e Catar atraindo milhões de visitantes todos os anos`,
          religion: `Aprender árabe é fundamental para quem busca uma compreensão mais profunda da religião islâmica. Por ser o idioma do Alcorão, o livro sagrado do Islã, muitas orações e cerimônias religiosas são realizadas em árabe. Além disso, a compreensão do árabe pode permitir uma melhor comunicação e compreensão das tradições muçulmanas em todo o mundo`,
        }
      },
      content: {
        content: 'CONTÉUDO',
        module: 'Módulo',
        title: 'O que você vai <span>aprender</span>',
        moduleOne: 'Módulo 1 a 4',
        moduleTwo: 'Módulo 5 a 8',
        modulesThree: 'Módulo 9 a 12',
        viewMore: 'ver mais'
      },
      conclusion: {
        title: 'Torne-se fluente em Árabe de <br /> um modo eficiente e descomplicado',
        course: 'Curso de Árabe',
        club: 'Clube de traduções',
        music: 'Música',
      },
      results: {
        title: 'RESULTADOS',
        subTitle: 'Veja os resultados dos <span>nossos alunos</span>'
      },
      dobouts: {
        title: 'RSPONDENDO',
        subTitle: 'principais <span>dúvidas</span>'
      },
      plataform: {
        title: 'PLATAFORMA',
        subTitle: '<h1>Conheça<span>por dentro</span></h1 >'
      }
    },
  },

};
