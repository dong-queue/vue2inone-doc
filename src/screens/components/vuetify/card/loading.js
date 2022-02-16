export default {
  items: [
    { component: 'card', loading: 'loading', class: 'mx-auto my-12', maxWidth: '374',
      slots: [
        { name: 'progress', items: [
          { component: 'progressL', color: 'deep-purple', height: 10, indeterminate: true }
        ] }
      ],
      items: [
        { component: 'img', height: '250', src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { component: 'cardTitle', itemtext: 'Cafe Badilico' },
        { component: 'cardText', items: [
          { component: 'row', align: 'center', class: 'mx-0', items: [
            { component: 'rating', value: 4.5, color: 'amber', dense: true, halfIncrements: true, readonly: true, size: 14 },
            { component: 'div', class: 'grey--text ml-4', itemtext: '4.5 (413)' }
          ]},
          { component: 'div', class: 'my-4 subtitle-1', itemtext: '$ • Italian, Cafe' },
          { component: 'div', itemtext: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.' }
        ]},
        { component: 'divider', class: 'mx-4' },
        { component: 'cardTitle', itemtext: `Tonight's availability` },
        { component: 'cardText', items: [
          { component: 'chipGroup', model: 'selection', activeClass: 'deep-purple accent-4 white--text', column: true,
            items: [
              { component: 'chip', itemtext: '5:30PM' },
              { component: 'chip', itemtext: '7:30PM' },
              { component: 'chip', itemtext: '8:00PM' },
              { component: 'chip', itemtext: '9:00PM' },
            ]
          }
        ]},
        { component: 'cardActions', items: [
          { component: 'btn', color: 'deep-purple lighten-2', text: true, evnts: [{ event: 'click', method: 'reserve' }], itemtext: 'Reserve' }
        ]}
      ]
    }
  ]
}