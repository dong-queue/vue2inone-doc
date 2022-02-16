export default {
  items: [
    { component: 'card', class: 'pa-12', color: 'indigo darken-2', flat: true, items: [
      { component: 'card', elevation: 12, width: 256, items: [
        { component: 'navdrw', floating: true, permanent: true, items: [
          { component: 'list', dense: true, rounded: true, itemsfor: 'items', items: [
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{component: 'icon', name: 'subItem.icon' }]},
              { component: 'list-item-content', items: [
                { component: 'list-item-title', itemtext: 'subItem.title' }
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}