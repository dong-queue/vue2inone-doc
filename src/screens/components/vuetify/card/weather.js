export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '400', items: [
      { component: 'listItem', twoLine: true, items: [
        { component: 'listItemContent', items: [
          { component: 'listItemTitle', class: 'headline', itemtext: 'San Francisco' },
          { component: 'listItemSubtitle', itemtext: 'Mon, 12:30 PM, Mostly sunny' }
        ]}
      ]},
      { component: 'cardText', items: [
        { component: 'row', align: 'center', items: [
          { component: 'col', class: 'display-3', cols: 6, items: [{ component: 'text', itemtext: '23&deg;C' }]},
          { component: 'col', cols: 6, items: [{ component: 'img', src: 'https://cdn.vuetifyjs.com/images/cards/sun.png', alt: 'Sunny image', width: 92 }]}
        ]}
      ]},
      { component: 'listItem', items: [
        { component: 'listItemIcon', items: [{component: 'icon', name: 'mdi-send'}]},
        { component: 'listItemSubtitle', itemtext: '23 km/h'}
      ]},
      { component: 'listItem', items: [
        { component: 'listItemIcon', items: [{ component: 'icon', name: 'mdi-cloud-download' }]},
        { component: 'listItemSubtitle', itemtext: '48%'}
      ]},
      { component: 'slider', model: 'time', max: 6, 'tick-labels': 'labels', class: 'mx-4', ticks: true },
      { component: 'list', class: 'transparent', 
        itemsfor: 'forecast', subItemName: 'item',
        items: [
          { component: 'listItem', items: [
            { component: 'listItemTitle', itemtext: 'item.day' },
            { component: 'listItemIcon', items: [{component: 'icon', name: 'item.icon' }]},
            { component: 'listItemSubtitle', class: 'text-right', itemtext: 'item.temp'}
          ]}
        ]
      },
      { component: 'divider' },
      { component: 'cardActions', items: [
        { component: 'btn', text: true, itemtext: 'Full Report' }
      ]}
    ]}
  ]
}