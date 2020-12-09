const themes = [
  {
    id: '1',
    text: 'Agrobiodiversité et élevage',
    slug: 'agrobiodiversite_et_elevage',
    max: 6,
    questions: [
      {
        text: 'Diversité de cultures',
        slug: 'diversite_de_cultures',
        id: '1.1',
        options: [
          {
            key: '1.1.0',
            value: '0',
            text:
              '0 - Une seule culture ou association de cultures occupe plus de 50% de la surface cultivée',
          },
          {
            key: '1.1.1',
            value: 1,
            text:
              '1 - La principale culture ou association de cultures occupe entre 33% et 50% de la surface cultivée',
          },
          {
            key: '1.1.2',
            value: 2,
            text:
              '2 - Au total, entre 3 et 4 cultures ou associations de cultures',
          },
          {
            key: '1.1.3',
            value: 3,
            text:
              '3 - Au total, au moins 5 cultures ou associations de cultures',
          },
        ],
      },
      {
        text: "Animaux d'élevage",
        slug: 'animaux_d_elevage',

        id: '1.2',
        options: [
          {
            key: '1.2.0',
            value: '0',
            text: "0 - Absence d'élevage",
          },
          {
            key: '1.2.1',
            value: 1,
            text: '1 - Une seul espèce animale	',
          },
          {
            key: '1.2.2',
            value: 2,
            text: '2 - Deux ou trois espèces animales	',
          },
          {
            key: '1.2.3',
            value: 3,
            text: '3 - Au mois quatre espèces animales	',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    text: 'Synergies',
    slug: 'synergies',
    max: 12,
    questions: [
      {
        text: 'Intégration agriculture-élevage',
        slug: 'integration_agriculture_elevage',
        id: '2.1',
        options: [
          {
            key: '2.1.0',
            value: '0',
            text:
              "0 - Aucun élevage ou pas d'intégration agriculture-élevage. Aucune partie de l'alimentation animale n'est produite sur l'exploitation ou sur une exploitation du voisinage proche. Les déjections animales ne sont pas utilisées pour la fertilisation des cultures (exploitation ou voisinage proche).",
          },
          {
            key: '2.1.1',
            value: 1,
            text:
              "1 - Faible intégration agriculuture élevage. Une partie minoritaire de l'alimentation animale est produite sur l'exploitation ou sur une exploitation du voisinage proche, les déjections animales sont utilisées pour la fertilisation (exploitation ou voisinage proche)	",
          },
          {
            key: '1.1.2',
            value: 2,
            text:
              '2 - Au total, entre 3 et 4 cultures ou associations de cultures',
          },
          {
            key: '1.1.3',
            value: 3,
            text:
              '3 - Au total, au moins 5 cultures ou associations de cultures',
          },
        ],
      },
      {
        text: "Animaux d'élevage",
        slug: 'animaux_d_elevage',

        id: '1.2',
        options: [
          {
            key: '1.2.0',
            value: '0',
            text: "0 - Absence d'élevage",
          },
          {
            key: '1.2.1',
            value: 1,
            text: '1 - Une seul espèce animale	',
          },
          {
            key: '1.2.2',
            value: 2,
            text: '2 - Deux ou trois espèces animales	',
          },
          {
            key: '1.2.3',
            value: 3,
            text: '3 - Au mois quatre espèces animales	',
          },
        ],
      },
    ],
  },
];

export default themes;
