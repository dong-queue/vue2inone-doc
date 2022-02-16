export default {
  items: [
    { component: 'card', flat: true, items: [
      { component: 'card-text', items: [
        { component: 'container', fluid: true, class: 'pa-0', items: [
          { component: 'text', class: 'text-start', itemtext: '<p>Normal</p>' },
          { component: 'row',
            itemsfor: 'items1', subItemName: 'item',
            items: [
              {
                component: 'col', cols: '12', sm: 3,
                items: [
                  { component: 'btn', color: 'item.btnColor', icon: true, items: [{ component: 'icon', name: 'item.iconName' }] }
                ]
              }
            ]
          },
          { component: 'text', class: 'text-start', itemtext: '<p>Disabled</p>' },
          {
            component: 'row',
            itemsfor: 'items1', subItemName: 'item',
            items: [
              {
                component: 'col', cols: '12', sm: 3,
                items: [
                  { component: 'btn', disabled: true, icon: true, items: [{ component: 'icon', name: 'item.iconName' }] }
                ]
              }
            ]
          },
        ]}
      ]}
    ]}
  ]
}