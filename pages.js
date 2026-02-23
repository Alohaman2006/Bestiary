const pages = [
  {
    type: "cover",
    content: "— THE BESTIARY —"
  },
  { type: "cover", content: ""}, // blank page
  {
    type: "contents",
    title: "Contents",
    sections: [
      {
        name: "Beasts",
        species: [
          { name: "Wolf" },
          { name: "Bear" },
          { name: "Eagle" }
        ]
      },
      {
        name: "Mana-Beasts",
        species: [
          { name: "Dragon" },
          { name: "Keran" },
          { name: "Svardian Giant Crab" },
          { name: "Oneivor" },
          { name: "Hemovex Broodcore" },
          { name: "Regovex Broodcore" },
          { name: "False Owl" }
        ]
      }
    ]
  },

 // Pages
  // Beasts
  {
    type: "page",
    title: "Beasts",
    text: "..."
  },
    {
        type: "page",
        title: "Wolf — Canis Lupus",
        text: `
        `
    },
    {
        type: "page",
        title: "Bear — Ursine",
        text: `A powerful creature.
        
        With immense strength and resilience,
        bears dominate their territories.`
    },
    {
        type: "page",
        title: "Eagle",
        text: `Master of the skies.
        
        Swift and majestic, eagles rule the air
        with unmatched vision and precision.`
    },
  // Mana beasts
  {
    type: "page",
    title: "Mana-Beasts",
    text: "..."
  },
    {
        type: "page",
        title: "Dragon - Caeluarch",
        text: `The mightiest of all sky creatures.
        
        Ancient and terrible, Dragons possess
        immeasurable power and wisdom.`
    },
    {
        type: "page",
        title: "Keran - Terrarch",
        text: `The mightiest of all land creatures.
        
        Ancient and terrible, Kerans possess
        immeasurable power and wisdom.`
    },
    {
        type: "page",
        title: "Svardian Giant Crab",
        text: `Crab`
    },
    {
        type: "page",
        title: "Oneivor - Somnia Intestinum",
        text: `s`
    },
  {
        type: "page",
        title: "Hemovex Broodcore - Sanguis Progenies",
        text: `a`
    },
  {
        type: "page",
        title: "Regovex Broodcore - Tracto Progenies",
        text: `C`
    },
  {
        type: "page",
        title: "False Owl - Mendax Noctua",
        text: `C`
    },
  
  // End of book
  {
    type: "page",
    title: "",
    text: ``
  },
  { type: "cover", content: ""},
  {
    type: "cover",
    content: "— END OF VOLUME —"
  }
];

//To-do:
//Wolfs
//bears
//foxes
//chickecs
//cows
//sheep
//cat-like
//bird
//fish?

//dragons - dragon, wyvern, drake, wyrm
//terravors - wendhyr, ursavor, cervavor, lupavor, gravavor, corvavor
//Latrian crab
//Broodcore
