const themes = [
  {
    id: '1',
    text: 'Agrobiodiversité et élevage',
    slug: 'agrobiodiversite_et_elevage',
    max: 6,
    maximum: function () {
      let maximumTheme = 0;

      this.questions.map((question) => {
        question.options.reduce((max, question) => {
          max =
            parseInt(question.value, 10) > max
              ? parseInt(question.value, 10)
              : max;
          return (max += maximumTheme);
        }, 0);
      });

      return maximumTheme;
    },
    questions: [
      {
        text: 'Diversité de cultures',
        slug: 'diversite_de_cultures',
        id: '11',
        options: [
          {
            id: '110',
            value: '0',
            text:
              '0 - Une seule culture ou association de cultures occupe plus de 50% de la surface cultivée',
          },
          {
            id: '111',
            value: 1,
            text:
              '1 - La principale culture ou association de cultures occupe entre 33% et 50% de la surface cultivée',
          },
          {
            id: '112',
            value: 2,
            text:
              '2 - Au total, entre 3 et 4 cultures ou associations de cultures',
          },
          {
            id: '113',
            value: 3,
            text:
              '3 - Au total, au moins 5 cultures ou associations de cultures',
          },
        ],
      },
      {
        text: "Animaux d'élevage",
        slug: 'animaux_d_elevage',

        id: '12',
        options: [
          {
            id: '120',
            value: '0',
            text: "0 - Absence d'élevage",
          },
          {
            id: '121',
            value: 1,
            text: '1 - Une seul espèce animale	',
          },
          {
            id: '122',
            value: 2,
            text: '2 - Deux ou trois espèces animales	',
          },
          {
            id: '123',
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
        id: '21',
        options: [
          {
            id: '210',
            value: '0',
            text:
              "0 - Aucun élevage ou pas d'intégration agriculture-élevage. Aucune partie de l'alimentation animale n'est produite sur l'exploitation ou sur une exploitation du voisinage proche. Les déjections animales ne sont pas utilisées pour la fertilisation des cultures (exploitation ou voisinage proche).",
          },
          {
            id: '211',
            value: 1,
            text:
              "1 - Faible intégration agriculuture élevage. Une partie minoritaire de l'alimentation animale est produite sur l'exploitation ou sur une exploitation du voisinage proche, les déjections animales sont utilisées pour la fertilisation (exploitation ou voisinage proche)	",
          },
          {
            id: '212',
            value: 2,
            text:
              '2 - Au total, entre 3 et 4 cultures ou associations de cultures',
          },
          {
            id: '213',
            value: 3,
            text:
              '3 - Au total, au moins 5 cultures ou associations de cultures',
          },
        ],
      },
      {
        text: "Animaux d'élevage",
        slug: 'animaux_d_elevage',

        id: '22',
        options: [
          {
            id: '220',
            value: '0',
            text: "0 - Absence d'élevage",
          },
          {
            id: '221',
            value: 1,
            text: '1 - Une seul espèce animale	',
          },
          {
            id: '222',
            value: 2,
            text: '2 - Deux ou trois espèces animales	',
          },
          {
            id: '223',
            value: 3,
            text: '3 - Au mois quatre espèces animales	',
          },
        ],
      },
    ],
  },
];

export default themes;
