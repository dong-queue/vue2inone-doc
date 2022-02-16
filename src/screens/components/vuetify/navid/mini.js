export default {
  items: [
    { component: 'card', items: [
      { component: 'navdrw', model: 'drawer', miniVariant: 'mini', permanent: true, 
        evnts: [{ event: 'update:mini-variant', method: 'updateMini'}],
        items: [
          { component: 'list-item', class: 'px-2', items: [
            { component: 'list-item-avatar', items: [{ component: 'img', src: 'https://randomuser.me/api/portraits/men/85.jpg'}] },
            { component: 'list-item-title', itemtext: 'John Leider' },
            { component: 'btn', icon: true, evnts: [{ event: 'click', method: 'changeMini' }], items: [{ component: 'icon', name: 'mdi-chevron-left' }] }
          ]},
          { component: 'divider' },
          { component: 'list', dense: true, itemsfor: 'items', items: [
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{ component: 'icon', name: 'subItem.icon'}] },
              { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'subItem.title'}] }
            ]}
          ]}
        ]
      }
    ]}
  ]
}