import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passez initReactI18next à i18next
  .init({
    resources: {
      en: {
        translation: {
          bloc1: {
            title: 'About me',
            dev: 'Front-end web developer',
            years: '28 years old',
            resume1: 'Hi, I’m Morgane,',
            resume2: `A web & mobile developer with a diverse background and an insatiable thirst for knowledge. I juggle between web development and design, aiming to evoke emotions, create beauty, and interact with the world. I am a lover of learning, a true curious spirit, and every challenge is an opportunity for me to excel. Creativity runs in my veins, and art is an integral part of my life. Recently, I completed an internship at`,
            resume3: ', an innovative startup at ',
            resume4: `, confirming my passion for web development and my interest in the highly stimulating world of startups.`,
            passions: 'My passions',
            download: 'Download my resume',
            peinture: 'Painting',
            dessin: 'Drawing',
            animaux: 'Animals',
            jeux: 'Video games',
            cuisine: 'Asian cuisine',
            cinema: 'Cinema',
            jeuxSoc: 'Board games',
          },
          bloc2: {
            title: 'Experiences & Education',
            nockee: {
              postName: 'Front-end web developer',
              postDate: 'March 2023 - Oct 2023',
              text1:
                "Internship at Nockee, an innovative company in rental management, located on the Station F campus, the world's largest startup incubator.",
              text2: `Development of a SaaS (Software as a Service) using Next.js, TypeScript, and Chakra UI, along with a showcase website on Prismic using the same technical stack. Design of the web interface and creation of illustrations on Figma. Development of a mobile application for both iOS and Android using React Native.`,
              text3:
                'Design of the web interface and creation of illustrations on Figma.',
              text4:
                'Development of a mobile application for both iOS and Android using React Native.',
            },
            oclock: {
              postName: 'Fullstack web developer training',
              postDate: 'Sept 2022 - March 2023',
              text1: `Full stack JavaScript web developer training.`,
              text2: `Common foundation with half backend (Node.js, Express, PostgreSQL, ...) and half frontend (HTML, CSS, JavaScript). Front-End focus with specialization in React.`,
              text3: `One-month final project involving the implementation of an agile project management as a Scrum master and Lead Frontend.`,
              text4: `Completion of the professional title "Web and Mobile Web Developer" bac +2.`,
            },
            duoloriages: {
              postName: 'Artist Author',
              postDate: '2020 - 2022',
              text1: `Creation of coloring books to be completed as a duo. Children and adults collaborate on the creation of a common work, each contributing half of the artwork.`,
              text2: `Concept, drawing, layout, printing, distribution, and sales under the status of an artist.`,
            },
            psycho: {
              title: 'Umons | Belgium',
              postName: 'L2 Psychology',
              postDate: '2018 - 2020',
              text1: `Support for children and adolescents in difficulty.`,
              text2: `Psychological assessment, testing, report writing and reporting.`,
            },
            arts: {
              title: 'HeH | Belgium',
              postName: 'L2 Graphic Techniques',
              text1: `Bachelor's degree in Computer-Aided Graphic Design. The training was based on 4 main axes:`,
              text2: `Graphic design: Drawing, Photoshop, Illustrator & After Effects.`,
              text3: `Web development: HTML, CSS & Jquery.`,
              text4: `3D design: Maya & AutoCad.`,
              text5: `Programming: Algorithmic & C++.`,
            },
            bac: {
              postName: 'Scientific Baccalaureate',
              text1: `Scientific Baccalaureate, Biology specialty.`,
            },
          },
          bloc4: {
            title: 'Projects',
            nockee: {
              text1: `My end-of-studies internship at Nockee was an exciting dive into the heart of an innovative startup, redefining property rental management dynamically and uniquely through its Software as a Service (SaaS). The platform incorporates a comprehensive range of features, from multi-listing announcements to applicant tracking, managing property visits, and a dedicated application for handling property condition assessments.`,
              text2: `During this experience, I had the opportunity to contribute to the development of exciting features, including the creation of a dedicated tenant space. This space provides an immersive experience with a real-time timeline, allowing tenants to transparently track the progress of their rental applications. Next.js, Chakra UI, and React together form a very robust foundational stack. I also gained proficiency in lesser-known but equally useful and effective libraries such as SWR and React Hook Form.`,
              text3: `The second significant aspect of this internship was the deepening of my interest in UX/UI design. The discovery of the Figma software allowed me to learn how to design elegant and intuitive interfaces.`,
              text4: `Finally, I had the opportunity to work within the framework of Station F, the world's largest startup incubator. This experience was a whirlwind of creative energy. I was immersed in an ultra-dynamic and stimulating atmosphere. This experience genuinely fueled my desire to work in such an environment.`,
            },
            portfolio: {
              text1: `Welcome to my Portfolio!`,
              text2: `Explore a world where technology meets art. My Portfolio, carefully crafted in React and shaped with creativity on Figma, is more than just a collection of projects. It's an expression of my passion for the fusion of programming and design. Every line of code and every pixel has been chosen with care to create an immersive experience.`,
              text3: `The power of React provides smooth navigation, while the design crafted on Figma adds an artistic touch to every detail. Let yourself be guided through my projects, where technical innovation blends with artistic aesthetics.`,
              text4: `This Portfolio reflects my commitment to creating unique and visually captivating experiences. Explore, discover, and feel free to contact me to share your impressions or discuss future collaborations.`,
            },
          },
          bloc5: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            bottom: `I designed, illustrated and developed this portfolio with ❤️`,
            envoyer: 'Send',
          },
        },
      },
      fr: {
        translation: {
          bloc1: {
            title: 'À propos de moi',
            dev: 'Développeuse web front-end',
            years: '28 ans',
            resume1: 'Salut, moi c’est Morgane,',
            resume2: `Une développeuse web & mobile avec un parcours riche et une soif
            insatiable de connaissances. Je jongle avec le développement web et le
            design, en cherchant à susciter des émotions, créer du beau, et
            interagir avec le monde. Je suis une amoureuse de l'apprentissage, une
            vraie curieuse, et chaque défi est une occasion de me surpasser. La
            créativité coule dans mes veines, et l'art fait partie intégrante de ma
            vie. Récemment, j'ai fait un stage chez`,
            resume3: `, une startup innovante à `,
            resume4: `, qui a confirmé ma passion pour le développement web et mon intérêt pour l'univers très stimulant des startups.`,
            passions: 'Mes passions',
            download: 'Télécharger mon CV',
            peinture: 'La peinture',
            dessin: 'Le dessin',
            animaux: 'Les animaux',
            jeux: 'Les jeux vidéo',
            cuisine: 'La cuisine asiatique',
            cinema: 'Le cinéma',
            jeuxSoc: 'Les jeux de société',
          },
          bloc2: {
            title: 'Expériences & Éducation',
            nockee: {
              postName: 'Développeuse web frontend',
              postDate: 'Mars 2023 - Oct 2023',
              text1: `Stage de fin d’études chez nockee, entreprise innovante dans la gestion locative, présente sur le campus de Station F, plus grand incubateur de startups au monde.`,
              text2: ` Développement d’un Saas avec Next.js, Typescript & Chakra ui ainsi que d’un site vitrine sur Prismic avec la même stack technique. Design de l’interface web et réalisation d’illustrations sur Figma. Développement d’une application mobile IOS et Android avec React native.`,
              text3:
                'Design de l’interface web et réalisation d’illustrations sur Figma.',
              text4:
                'Développement d’une application mobile IOS et Android avec React native.',
            },
            oclock: {
              postName: 'Formation développeuse web fullstack',
              postDate: 'Sept 2022 - March 2023',
              text1: `Formation de développeur web full stack JavaScript.`,
              text2: `Socle commun avec moitié backend (Node.js, express, PostgreSQL ... )
              et moitié frontend (HTML, CSS, javascript). Orientation Front-End
              avec une spécialisation React.`,
              text3: `Projet de fin d’études d’un mois avec mise en place d’une gestion de projet de type agile en tant que Scrum master et Lead frontend.`,
              text4: `Passage du Titre professionnel “Développeur web et web mobile” Bac +2.`,
            },
            duoloriages: {
              postName: 'Artiste Auteur',
              postDate: '2020 - 2022',
              text1: `Création de livres de coloriage à réaliser en duo. Enfant et adulte s’allient autour de la réalisation d’une oeuvre commune dont ils ont chacun une moitié.`,
              text2: `Concept, dessin, mise en page, impression, distribution & mise en vente sous le statut d'Artiste.`,
            },
            psycho: {
              title: 'Umons | Belgique',
              postName: 'L2 Psychologie',
              postDate: '2018 - 2020',
              text1: `Prise en charge d'enfants et d'adolescents en difficulté.`,
              text2: `Évaluation psychologique, passation de tests, rédaction de bilans et de comptes rendus.`,
            },
            arts: {
              title: 'HeH | Belgique',
              postName: 'L2 Techniques Graphiques',
              text1: `Bachelier en Conceptions Graphiques assistées par ordinateur. La formation était basée sur 4 grands axes :`,
              text2: `Graphisme : Dessin, Photoshop, Illustrator & After Effects.`,
              text3: `Développement Web : HTML, CSS & Jquery. `,
              text4: `Conception 3D : Maya & AutoCad.`,
              text5: `Programmation : Algorithmique & C++.`,
            },
            bac: {
              postName: 'Baccalauréat Scientifique',
              text1: `Baccalauréat Scientifique, spécialité Biologie.`,
            },
          },
          bloc4: {
            title: 'Projets',
            nockee: {
              text1: `Mon stage de fin d'études chez Nockee a été une plongée passionnante
              au cœur d'une startup innovante, redéfinissant la gestion locative
              immobilière de manière dynamique et originale à travers son logiciel
              en tant que service (SaaS). Ce dernier intègre une gamme complète de
              fonctionnalités, de la multi-diffusion d'annonces au suivi des
              candidatures, en passant par la gestion des visites et une
              application dédiée à la gestion des états des lieux.`,
              text2: `Au cours de cette expérience, j'ai eu l'opportunité de contribuer au
            développement de fonctionnalités captivantes, notamment la création
            d'un espace dédié aux locataires. Ce dernier offre une expérience
            immersive avec une timeline en temps réel, permettant aux locataires
            de suivre l'avancement de leur demande de location de manière
            transparente. Next.js, Chakra UI et React forment ensemble une stack
            de base très solide. J'ai aussi pu maîtriser des librairies moins
            connues mais tout autant utiles et efficaces telles que SWR et React
            Hook Form.`,
              text3: `La seconde facette importante de ce stage fut l'approfondissement de
            mon intérêt pour l'UX/UI design. La découverte du logiciel Figma m'a
            permis d'apprendre à concevoir des interfaces élégantes et
            intuitive.`,
              text4: `Pour finir, j'ai eu la chance d'avoir comme cadre Station F, plus
            grand incubateur de startups au monde. Cette expérience a été un
            tourbillon d'énergie créative. J'ai été immergé dans une atmosphère
            ultra-dynamique et stimulante. Cette expérience m'a réellement donné
            envie de travailler dans ce type d'environnement.`,
            },
            portfolio: {
              text1: `Bienvenue dans mon Portfolio !`,
              text2: `Explorez un monde où la technologie rencontre l'art. Mon Portfolio, soigneusement développé en React et façonné avec créativité sur Figma, est bien plus qu'une simple collection de projets. C'est une expression de ma passion pour l'alliance entre la programmation et le design. Chaque ligne de code et chaque pixel ont été choisis avec soin pour créer une expérience immersive.`,
              text3: `La puissance de React offre une navigation fluide, tandis que le design élaboré sur Figma ajoute une touche artistique à chaque détail. Laissez-vous guider à travers mes projets, où l'innovation technique se marie à une esthétique artistique.`,
              text4: `Ce Portfolio est le reflet de mon engagement envers la création d'expériences uniques et visuellement captivantes. Explorez, découvrez, et n'hésitez pas à me contacter pour partager vos impressions ou discuter de futures collaborations.`,
            },
          },
          bloc5: {
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            bottom: `J'ai créé le design, les illustrations et le développement de ce portfolio avec ❤️`,
            envoyer: 'Envoyer',
          },
        },
      },
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr', // langue de secours
    interpolation: {
      escapeValue: false, // react déjà sécurise la sortie
    },
  });

export default i18n;
