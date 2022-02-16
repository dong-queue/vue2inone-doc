export default {
  items: [
    { component: 'card', class: 'mx-auto mt-12', maxWidth: 450, items: [
      { component: 'toolbar', flat: true, color: 'transparent', items: [
        { component: 'btn', icon: true, items: [
          { component: 'icon', name: 'mdi-arrow-left' }
        ]},
        { component: 'textfield', model: 'search', appendIcon: 'mdi-magnify', label: 'Search News', singleLine: true }
      ]},
      { component: 'card-text', class: 'py-0', itemsfor: 'keywords', subItemName: 'keyword',
        items: [
          { component: 'chip', class: 'mr-2', itemtext: 'keyword' }
        ]
      },
      { component: 'list', threeLine: true, 
        itemsfor: 'searching', subItemName: 'item',
        items: [
          { component: 'list-item', ripple: true, items: [
            { component: 'img', src: 'item.image', class: 'mr-4', maxWidth: 64, minWidth: 64 },
            { component: 'listItemContent', items: [
              { component: 'text', class: 'text-uppercase font-weight-regular caption', itemtext: 'item.category' },
              { component: 'div', itemtext: 'item.title' }
            ]}
          ]},
        ]
      }
    ]}
  ]
}