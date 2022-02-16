export default {
  items: [
    { component: 'container', items: [
      { component: 'row', class: 'flex-child', items: [
        { component: 'col', class: 'd-flex', cols: 12, md: 4, items: [
          { component: 'sheet', class: 'd-flex', color: 'grey ligthen-3', height: 424, items: [
            { component: 'text', itemtext: '#1: (3r x 2c)' }
          ]}
        ]},
        { component: 'col', class: 'd-flex', cols: 12, md: 4, items: [
          { component: 'row', class: 'ma-n3', items: [
            { component: 'col', cols: 6, items: [
              { component: 'sheet', class: 'd-flex', color: 'green lighten-3', height: 150, items: [
                { component: 'text', itemtext: '#2: (1r x 1c)' }
              ]}
            ]},
            { component: 'col', cols: 6, items: [
              { component: 'sheet', class: 'd-flex', color: 'yellow lighten-3', height: 150, items: [
                { component: 'text', itemtext: '#3: (1r x 1c)' }
              ]}
            ]},
            { component: 'col', cols: 12, items: [
              { component: 'sheet', class: 'd-flex', color: 'red lighten-3', height: 250, items: [
                { component: 'text', itemtext: '#5: (2r x 2c)' }
              ]}
            ]}
          ]}
        ]},
        { component: 'col', class: 'd-flex', cols: 6, md: 2, items: [
          { component: 'sheet', class: 'd-flex', color: 'teal lighten-3', height: 300, items: [
            { component: 'text', itemtext: '#4: (2r x 1c)' }
          ]}
        ]},
        { component: 'col', class: 'd-flex', cols: 6, md: 2, items: [
          { component: 'sheet', class: 'd-flex mt-auto', color: 'purple lighten-3', height: 300, items: [
            { component: 'text', itemtext: '#6: (2r x 1c)' }
          ]}
        ]}
      ]}
    ]}
  ]
}