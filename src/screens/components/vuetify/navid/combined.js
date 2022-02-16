export default {
  items: [
    { component: 'card', class: 'mx-auto', height: 300, width: 330, items: [
      { component: 'navdrw', permanent: true, width: '100%', items: [
        { component: 'row', class: 'fill-height', noGutters: true, items: [
          { component: 'navdrw', dark: true, 'mini-variant': true, 'mini-variant-width': 56, permanent: true, items: [
            { component: 'list-item', class: 'px-2', items: [
              { component: 'list-item-avatar', items: [
                { component: 'img', src: 'https://randomuser.me/api/portraits/women/75.jpg' }
              ]}
            ]},
            { component: 'divider' },
            { component: 'list', dense: true, nav: true, itemsfor: 'items', subItemName: 'item', items: [
              { component: 'list-item', items: [
                { component: 'list-item-action', items: [{component: 'icon', name: 'item.icon' }]},
                { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'item.title'}]}
              ]}
            ]}
          ]},
          { component: 'list', class: 'grow', itemsfor: 'links', items: [
            { component: 'list-item', link: true, items: [
              { component: 'list-item-title', itemtext: 'subItem' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}