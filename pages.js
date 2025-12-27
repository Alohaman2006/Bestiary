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
          { name: "Terravor" },
          { name: "Crab" }
        ]
      }
    ]
  },

 // Pages
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

  {
    type: "page",
    title: "Mana-Beasts",
    text: "..."
  },
    {
        type: "page",
        title: "Dragon",
        text: `The mightiest of all creatures.
        
        Ancient and terrible, dragons possess
        immeasurable power and wisdom.`
    },
    {
        type: "page",
        title: "Terravor",
        text: `The mightiest of all creatures.
        
        Ancient and terrible, Terravors possess
        immeasurable power and wisdom.`
    },
    {
        type: "page",
        title: "Crab",
        text: `Crab`
    },

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
