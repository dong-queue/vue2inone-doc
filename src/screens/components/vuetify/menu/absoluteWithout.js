export default {
  items: [
    { component: 'row', class: 'flex', justify: 'center', items: [
      { component: 'card', ripple: false, class: 'portrait', img: 'https://cdn.vuetifyjs.com/images/cards/girl.jpg', 
        height: '300px', width: '100%', maxWidth: '600px', evnts: [
          { event: 'contextmenu', method: 'show' }
        ]
      },
      { component: 'menu', model: 'showMenu', positionX: 'x', positionY: 'y', absolute: true,
        'offset-y': true, items: [
        { component: 'list', itemsfor: 'items', items: [
          { component: 'list-item', items: [
            { component: 'list-item-title', itemtext: 'subItem.title' }
          ]}
        ]}
      ]},
      
    ]}
  ]
}