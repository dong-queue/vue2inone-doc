export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, offsetSm: 3, items: [
        { component: 'card', height: '200px', items: [
          { component: 'card-title', class: 'blue white--text', items: [
            { component: 'text', class: 'headline', itemtext: 'Menu' },
            { component: 'spacer' },
            { component: 'btn', dark: true, icon: true, evnts: [{event: 'click', method: 'show' }], items: [
              { component: 'icon', name: 'mdi-dots-vertical' }
            ]},
            { component: 'menu', bottom: true, left: true, model: 'menu', activator: 'element', items: [
              { component: 'list', itemsfor: 'items', items: [
                { component: 'list-item', items: [
                  { component: 'list-item-title', itemtext: 'subItem.title' }
                ]}
              ]}
            ]}
          ]},
          { component: 'card-text', itemtext: 'Lorem Ipsum' }
        ]}
      ]}
    ]}
  ]
}