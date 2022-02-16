export default {
  items: [
    { component: 'select', model: 'selectedFruits', items: 'fruits', label: 'Favorite Fruits', multiple: true,
      slots: [
        { name: 'prepend-item', items: [
          { component: 'listItem', ripple: true, evnts: [{event: 'click', method: 'toggle'}], items: [
            { component: 'listItemAction', items: [
              { component: 'icon', color: { value: 'selectedFruits', func: (data) => data.length > 0 ? 'indigo darken-4' : ''}, name: 'icon' }
            ]},
            { component: 'listItemContent', items: [
              { component: 'lsitItemTitle', itemtext: 'Select All' }
            ]}
          ]},
          { component: 'divider', class: 'mt-2' }
        ]},
        { name: 'append-item', items: [
          { component: 'dvd', class: 'mb-2' },
          { component: 'lstitm', disabled: true, items: [
            { component: 'lstitmava', color: 'grey lighten-3', items: [
              { component: 'icon', name: 'mdi-food-apple'}
            ]},
            { component: 'lstitmcon', if: [{target: 'likesAllFruit', value: 'true'}], items: [
              { component: 'lstitmtle', itemtext: 'Holy smokes, someone call the fruit police!' }
            ]},
            { component: 'lstitmcon', if: [{target: 'likesAllFruit', value: 'true', ne: true}, {target: 'likesSomeFruit', value: 'true'}], items: [
              { component: 'lstitmtle', itemtext: 'Fruit Count' },
              { component: 'lstitmsut', itemtext: {value: 'selectedFruits', func: (e) => e.length} }
            ]},
            { component: 'lstitmcon', if: [{target: 'likesAllFruit', value: 'true', ne: true}, {target: 'likesSomeFruit', value: 'true', ne: true}], items: [
              { component: 'lstitmtle', itemtext: 'How could you not like fruit?' },
              { component: 'lstitmsut', itemtext: 'Go ahead, make a selection above!' }
            ]},
          ]}
        ]}
      ]
    }
  ]
}