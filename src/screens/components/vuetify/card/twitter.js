export default {
  items: [
    { component: 'card', class: 'mx-auto', color: '#26c6da', dark: true, maxWidth: 400,
      items: [
        { component: 'cardTitle', items: [
          { component: 'icon', large: true, left: true, name: 'mdi-twitter' },
          { component: 'text', class: 'title font-weight-light', itemtext: 'Twitter' }
        ]},
        { component: 'cardText', class: 'headline font-weight-bold', itemtext: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."'},
        { component: 'cardActions', items: [
          { component: 'listItem', class: 'grow', items: [
            { component: 'listItemAvatar', color: 'grey darken-3', items: [
              { component: 'img', class: 'elevation-6', alt: '', src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'},
            ]},
            { component: 'listItemContent', items: [
              { component: 'listItemTitle', itemtext: 'Evan You' }
            ]},
            { component: 'row', align: 'center', justify: 'end', items: [
              { component: 'icon', class: 'mr-1', name: 'mdi-heart' },
              { component: 'text', class: 'subheading mr-2', itemtext: '256' },
              { component: 'text', class: 'mr-1', itemtext: '.' },
              { component: 'icon', class: 'mr-1', name: 'mdi-share-variant' },
              { component: 'text', class: 'subheading', itemtext: '45' }
            ]}
          ]}
        ]}
      ]
    }
  ]
}