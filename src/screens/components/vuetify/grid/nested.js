export default {
  items: [
    { component: 'ontainer', class: 'grey lighten-5', items: [
      { component: 'row', items: [
        { component: 'col', sm: 9, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: 'Level 1: .col-sm-9' }
          ]},
          { component: 'row', 'no-gutters': true, items: [
            { component: 'col', cols: 8, sm: 6, items: [
              { component: 'card', class: 'pa-2', outlined: true, style: 'background-color: lightgrey', tile: true, items: [
                { component: 'text', itemtext: 'Level 2: .col-8 .col-sm-6' }
              ]}
            ]},
            { component: 'col', cols: 4, sm: 6, items: [
              { component:'card', class: 'pa-2', outlined: true, style: 'background-color: lightgrey;', tile: true, items: [
                { component: 'text', itemtext: 'Level 3: .col-4 .col-sm-6' }
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}