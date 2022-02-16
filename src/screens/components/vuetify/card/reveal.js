export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 344, items: [
      { component: 'cardText', items: [
        { component: 'div', itemtext: 'Word of the Day' },
        { component: 'div', class: 'display-1 text--primary', itemtext: 'el·ee·mos·y·nar·y' },
        { component: 'div', itemtext: 'adjective' },
        { component: 'div', class: 'text--primary', 
          html: `relating to or dependent on charity; charitable.<br>"an eleemosynary educational institution."`
        }
      ]},
      { component: 'cardActions', items: [
        { component: 'btn', text: true, color: 'teal accent-4', itemtext: 'Learn More',
          evnts: [{ event: 'click', method: 'changeReveal', value: true }]
        }
      ]},
      { component: 'card', if: [{ target: 'reveal', value: 'true' }], class: 'transition-fast-in-fast-out v-card--reveal', style: 'height: 100%',
        items: [
          { component: 'cardText', class: 'pb-0', items: [
            { component: 'div', class: 'display-1 text--primary', itemtext: 'Origin' },
            { component: 'div', itemtext: 'late 16th century (as a noun denoting a place where alms were distributed):' }
          ]},
          { component: 'cardActions', class: 'pt-0', 
            items: [
              { component: 'btn', text: true, color: 'teal accent-4', itemtext: 'Close',
                evnts: [{event: 'click', method: 'changeReveal', value: false }]
              }
            ]
          }
        ]
      }
    ]}
  ]
}