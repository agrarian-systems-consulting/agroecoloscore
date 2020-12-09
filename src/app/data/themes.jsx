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
    max: 9,
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
              "2 - Moyenne intégration agriculture-élevage. La majeure partie de l'alimentation animale est produite sur l'exploitation ou sur une exploitation du voisinage proche (y compris pâturage), les déjections animales sont utilisées pour la fertilisation (exploitation ou voisinage proche).	",
          },
          {
            id: '213',
            value: 3,
            text:
              "3 - Forte intégration agriculture-élevage. La majeure partie de l'alimentation animale est produite sur l'exploitation (y compris pâturage), les déjections animales sont utilisées pour la fertilisation (exploitation ou voisinage proche), la traction animale est valorisée.",
          },
        ],
      },
      {
        text: 'Rotations et associations de cultures',
        slug: 'rotations_et_associations_de_cultures',
        id: '22',
        options: [
          {
            id: '220',
            value: '0',
            text: "0 - Absence de rotations et d'associations de culture",
          },
          {
            id: '221',
            value: 1,
            text:
              '1 - Moins de 50% de la surface cultivée est en rotation de culture ou occupée par des associations de cultures',
          },
          {
            id: '222',
            value: 2,
            text:
              '2 - Plus de 50% de la surface cultivée est en rotation de culture ou occupée par des associations de cultures',
          },
          {
            id: '223',
            value: 3,
            text:
              '3 - La totalité de la surface cultivée est en rotation de culture ou occupée par des associations de cultures',
          },
        ],
      },
      {
        text: 'Couverture du sol',
        slug: 'couverture_du_sol',
        id: '23',
        options: [
          {
            id: '230',
            value: '0',
            text:
              '0 - La totalité des sols sont labourés ou laissés nus (absence de résidus ou plantes de couvertures) après les récoltes',
          },
          {
            id: '231',
            value: 1,
            text:
              '1 - Moins de 50% de la surface cultivée est protégée dans les mois suivants les récoltes par des résidus ou des plantes de couverture	',
          },
          {
            id: '232',
            value: 2,
            text:
              '2 - Plus de 50% de la surface cultivée est protégée dans les mois suivants les récoltes par des résidus ou des plantes de couverture	',
          },
          {
            id: '233',
            value: 3,
            text:
              '3 - La totalité de la surface cultivée est protégée dans les mois suivants les récoltes par des résidus ou des plantes de couverture	',
          },
        ],
      },
    ],
  },
];

export default themes;
