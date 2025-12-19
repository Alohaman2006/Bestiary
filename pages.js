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
        name: "Sapients",
        page: 3,
        species: [
          { name: "Elf", page: 4 },
          { name: "Dwarf", page: 5 },
          { name: "Human", page: 6 }
        ]
      },
      {
        name: "Beasts",
        page: 7,
        species: [
          { name: "Wolf", page: 8 },
          { name: "Bear", page: 9 },
          { name: "Eagle", page: 10 }
        ]
      },
      {
        name: "Mana-Beasts",
        page: 11,
        species: [
          { name: "Phoenix", page: 12 },
          { name: "Dragon", page: 13 },
          { name: "Unicorn", page: 14 }
        ]
      }
    ]
  },

 // Pages
  {
    type: "page",
    title: "Sapients",
    text: "..."
  },
    {
        type: "page",
        title: "Human",
        text: `Adaptable and resourceful.
        
        Though short-lived, humans achieve great things
        through determination and ingenuity.`
    },
    {
        type: "page",
        title: "Elf",
        text: `An ancient and graceful people.
        
        Long-lived and wise, elves have mastered
        the arcane arts over millennia.`
    },
    {
        type: "page",
        title: "Dwarf",
        text: `Masters of stone and metal.
        
        Renowned for their craftsmanship and fortitude,
        dwarves build enduring kingdoms beneath the earth.`
    },

  {
    type: "page",
    title: "Beasts",
    text: "..."
  },
    {
        type: "page",
        title: "Wolf",
        text: `A fierce beast of the wild.
        
        Known for their pack hunting strategies and loyalty,
        wolves are among the most feared predators.`
    },
    {
        type: "page",
        title: "Bear",
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
