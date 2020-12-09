const themes = [
  {
    id: '1',
    text: 'Agrobiodiversité et élevage',
    short: 'Agrobiodiversité et élevage',
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
    short: 'Synergies',
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
  {
    id: '3',
    text:
      "Autonomie du système résultant de la valorisation des ressources de l'écosystème",
    short: 'Autonomie',
    slug: 'autonomie',
    max: 9,
    questions: [
      {
        text: 'Autonomie en intrants',
        slug: 'autonomie_en_intrants',
        id: '31',
        options: [
          {
            id: '310',
            value: '0',
            text:
              "0 - La totalité des intrants est acquise hors de l'exploitation (hors exploitations du voisinage)	",
          },
          {
            id: '311',
            value: 1,
            text:
              "1 - La majeure partie des intrants est acquise hors de l'exploitation (hors exploitations du voisinage)	",
          },
          {
            id: '312',
            value: 2,
            text:
              "2 - La majeure partie des intrants est produite sur l'exploitation ou acquise auprès d'exploitations du voisinage	",
          },
          {
            id: '313',
            value: 3,
            text:
              "3 - La totalité des intrants est produite sur l'exploitation ou acquise auprès d'exploitations du voisinage	",
          },
        ],
      },
      {
        text: 'Pratiques de fertilisation',
        slug: 'pratiques_de_fertilisation',
        id: '32',
        options: [
          {
            id: '320',
            value: '0',
            text:
              "0 - Les fertilisants de synthèse sont utilisés régulièrement sur la totalité des cultures et prairies ; ou l'absence/faible usage de fertilisants de synthèse résulte d'une absence/un faible accès et s'accompagne d'une absence de système alternatif de gestion de la fertilité	",
          },
          {
            id: '321',
            value: 1,
            text:
              '1 - La fertilisation des cultures et prairies repose majoritairement sur des fertilisants de synthèse, mais également sur des fertlisants organiques (fumier, lisier, compost, engrais verts, résidus végétaux)	',
          },
          {
            id: '322',
            value: 2,
            text:
              '2 - La fertilisation des cultures et prairies repose majoritairement sur des fertlisants organiques (fumier, lisier, compost, engrais verts, résidus végétaux), mais également sur des fertilisants de synthèse	',
          },
          {
            id: '323',
            value: 3,
            text:
              '3 - La fertilisation des cultures et prairies repose uniquement sur sur des fertlisants organiques (fumier, lisier, compost, engrais verts, résidus végétaux)	',
          },
        ],
      },
      {
        text: 'Protection phytosanitaire et sanitaire',
        slug: 'protection_phytosanitaire',
        id: '33',
        options: [
          {
            id: '330',
            value: '0',
            text:
              "0 - La protection phytosanitaire et sanitaire des animaux d'élevage repose exclusivement sur l'utilisation de pesticides et de produits vétérinaires de synthèse	",
          },
          {
            id: '331',
            value: 1,
            text:
              "1 - La protection phytosanitaire et sanitaire des animaux d'élevage repose sur l'utilisation à la fois de pesticides et de produits vétérinaires de synthèse et de pratiques de lutte biologique ou/et produits biologiques  	",
          },
          {
            id: '332',
            value: 2,
            text:
              "2 - La protection phytosanitaire et sanitaire des animaux d'élevage repose exclusivement sur l'utilisation de pratiques de lutte biologique ou/et produits biologiques  	",
          },
          {
            id: '333',
            value: 3,
            text:
              "3 - La protection phytosanitaire et sanitaire des animaux d'élevage repose exclusivement sur l'utilisation de produits biologiques et d'une grande variété de pratiques de lutte biologique, y compris en termes de prévention, dans le cadre d'une protection biologique intégrée	",
          },
        ],
      },
    ],
  },
  {
    id: '4',
    text: 'Protection des sols et recyclage des éléments ',
    short: 'Sols et Recyclages',
    slug: 'sols_et_recyclages',
    max: 15,
    questions: [
      {
        text: 'Protection des sols',
        slug: 'protection_des_sols',
        id: '41',
        options: [
          {
            id: '410',
            value: '0',
            text:
              "0 - Dans des zones à risque d'érosion, absence de pratiques de lutte anti-érosive et de protection des sols	",
          },
          {
            id: '411',
            value: 1,
            text:
              "1 - Dans des zones à risque d'érosion, présence de quelques pratiques de lutte anti-érosive et de protection des sols	",
          },
          {
            id: '412',
            value: 2,
            text:
              "2 - Dans des zones à risque d'érosion, présence significative de pratiques de lutte anti-érosive et de protection des sols	",
          },
          {
            id: '413',
            value: 3,
            text:
              "3 - Dans des zones à risque d'érosion, dispositif intégré de lutte anti-érosive et de protection des sols, associant une combinaison de pratiques	",
          },
        ],
      },
      {
        text: "Gestion de l'eau",
        slug: 'gestion_eau',
        id: '42',
        options: [
          {
            id: '420',
            value: '0',
            text:
              "0 - En régions sèches, absence de pratiques de collecte et d'économie de l'eau	",
          },
          {
            id: '421',
            value: 1,
            text:
              "1 - En régions sèches, une seule pratique de collecte ou d'économie de l'eau	",
          },
          {
            id: '422',
            value: 2,
            text:
              "2 - En régions sèches, deux pratiques de collecte ou d'économie de l'eau	",
          },
          {
            id: '423',
            value: 3,
            text:
              "3 - En régions sèches, une variété de pratiques de collecte ou d'économie de l'eau",
          },
        ],
      },
      {
        text: 'Recyclage de la matière organique et des nutriments',
        slug: 'recyclage_mo_nutriments',
        id: '43',
        options: [
          {
            id: '430',
            value: '0',
            text:
              "0 - L'ensemble des produits et co-produits su système de production est exportée du système ou détruite	",
          },
          {
            id: '431',
            value: 1,
            text:
              "1 - Les produits et co-produits du système de production qui ne sont pas exportés sont recyclés sur place (décomposition, brûlis, consommation par les animaux, transferts à d'autres cultures)	",
          },
          {
            id: '432',
            value: 2,
            text:
              "2 - Les produits et co-produits du système de production qui ne sont pas exportés est recyclé sur place (décomposition, brûlis, consommation par les animaux, transferts à d'autres cultures). Des pratiques spécifiques sont mises en œuvre pour limiter les pertes au cours des cycles du carbone et de l'azote (compostage du fumier, cultures intermédiaires pièges à nitrate - CIPAN, récupération du jus de fumier, etc) ",
          },
          {
            id: '433',
            value: 3,
            text:
              "3 - Des pratiques de recyclage de résidus de l'écosystème (feuilles, branches) ou de consommateurs urbains (compost d'épluchures, boues d'épuration traitées) sont mises en œuvre ",
          },
        ],
      },
      {
        text: 'Ressources génétiques',
        slug: 'ressources_genetiques',
        id: '44',
        options: [
          {
            id: '440',
            value: '0',
            text:
              "0 - L'ensemble des ressources génétiques végétales (semences, plants) et animales (animaux, semence animale) est acquis hors de l'exploitation à chaque cycle de production	",
          },
          {
            id: '441',
            value: 1,
            text:
              "1 - La majeure partie des ressources génétiques végétales (semences, plants) et animales (animaux, semence animale) est acquise hors de l'exploitation à chaque cycle de production",
          },
          {
            id: '442',
            value: 2,
            text:
              "2 - La majeure partie des ressources génétiques végétales (semences, plants) et animales (animaux, semence animale) provient de l'exploitation ou auprès de circuits d'échanges paysans	",
          },
          {
            id: '443',
            value: 3,
            text:
              "3 - La totalité des ressources génétiques végétales (semences, plants) et animales (animaux, semence animale) provient de l'exploitation ou de circuits d'échanges paysans",
          },
        ],
      },
      {
        text: 'Energie',
        slug: 'energie',
        id: '45',
        options: [
          {
            id: '450',
            value: '0',
            text:
              "0 - Absence de production et d'utilisation d'énergie renouvelable	",
          },
          {
            id: '441',
            value: 1,
            text:
              "1 - La majeure partie de l'énergie utilisée est acquise sur le marché	",
          },
          {
            id: '442',
            value: 2,
            text:
              "2 - La majeure partie de l'énergie utilisée provient d'énergies renouvelables de l'exploitation (traction animale, vent, hydraulique, bois, biogas, solaire)	",
          },
          {
            id: '443',
            value: 3,
            text:
              "3 - La totalité de l'énergie utilisée provient d'énergies renouvelables de l'exploitation (traction animale, vent, hydraulique, bois, biogas, solaire)",
          },
        ],
      },
    ],
  },
  {
    id: '5',
    text:
      'Valorisation des variétés et espèces locales et des savoir-faire locaux pour la préparation des aliments',
    short: 'Espèces et Savoirs locaux',
    slug: 'especes_savoirs_locaux',
    max: 3,
    questions: [
      {
        text:
          'Valorisation des variétés et espèces locales et des savoir-faire locaux pour la préparation des aliments',
        slug: 'valorisation_especes_savoirs_locaux',
        id: '51',
        options: [
          {
            id: '510',
            value: '0',
            text:
              "0 - Absence de valorisation des variétés et espèces locales et des savoir-faire locaux pour la préparation des aliments. Que les aliments soient issus de l'exploitation ou achetés, leur préparation repose exclusivement sur des variétés et espèces exogènes	",
          },
          {
            id: '511',
            value: 1,
            text:
              "1 - La préparation des aliments ne repose que ponctuellement qur la valorisation des variétés et espèces locales et sur des savoir-faire locaux. Que les aliments soient issus de l'exploitation ou achetés, leur préparation repose majoritairement sur des variétés et espèces exogènes",
          },
          {
            id: '512',
            value: 2,
            text:
              '2 - La préparation des aliments repose majoritairement sur la valorisation des variétés et espèces locales et sur des savoir-faire locaux	',
          },
          {
            id: '413',
            value: 3,
            text:
              '3 - La préparation des aliments repose exclusivement sur la valorisation des variétés et espèces locales et sur des savoir-faire locaux	',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    text: 'Economie circulaire et solidaire',
    short: 'Economie circulaire et solidaire',
    slug: 'economie_circulaire_solidaire',
    max: 6,
    questions: [
      {
        text: 'Produits commercialisés sur le territoire',
        slug: 'produits_commercialises_sur_le_territoire',
        id: '61',
        options: [
          {
            id: '610',
            value: '0',
            text:
              "0 - Il n'y a pas de marché local ou aucun produit de l'exploitation n'est commercialisé dans le territoire	",
          },
          {
            id: '611',
            value: 1,
            text:
              "1 - Une partie minoritaire de la production commercialisée l'est sur un marché local ou au niveau du territoire	",
          },
          {
            id: '612',
            value: 2,
            text:
              "2 - Une partie majoritaire de la production commercialisée l'est sur un marché local ou au niveau du territoire",
          },
          {
            id: '613',
            value: 3,
            text:
              "3 - L'ensemble de la production de l'exploitation est valorisée au sein du territoire	",
          },
        ],
      },
      {
        text: 'Réseaux de producteurs et relations avec les consommateurs',
        slug: 'reseaux_producteurs_relations_consommateurs',
        id: '62',
        options: [
          {
            id: '610',
            value: '0',
            text:
              '0 - Absence de réseaux de producteurs pour la commercialisaton et de liens avec les consommateurs	',
          },
          {
            id: '611',
            value: 1,
            text:
              '1 - La présence de réseaux de producteurs existe, mais a peu de poids sur la nature des relations commerciales ; ou/et des liens directs avec les consommateurs existent mais sont relativement limités (faible partie des produits commercialisés)	',
          },
          {
            id: '612',
            value: 2,
            text:
              '2 - La présence de réseaux de producteurs existe et a un poids significatif sur la nature des relations commerciales ; ou/et des liens directs significatifs avec les consommateurs (part significative des produits commercialisés)',
          },
          {
            id: '613',
            value: 3,
            text:
              '3 - Des réseaux de producteurs forts existent leur permettant de peser dans les relations commerciales ; ou de forts liens avec les consommateurs existent (majeure partie des produits commercialisés)	',
          },
        ],
      },
    ],
  },
];

export default themes;
