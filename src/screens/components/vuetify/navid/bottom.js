export default {
  items: [
    { component: 'card', class: 'mx-auto overflow-hidden', height: 400, width: 344, items: [
      { component: 'app-bar', color: 'deep-purple accent-4', dark: true, prominent: true, 
        appBarNavIcon: {evnts: [{event: 'click', value: 'drawer', method: 'changeDrawer'}]},
        title: {itemtext: 'My files'}, 
        items: [
          { component: 'spacer' },
          { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-magnify'}] },
          { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-filter' }] },
          { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] }
      ]},
      { component: 'navigation-drawer', model: 'drawer', absolute: true, bottom: true, temporary: true, items: [
        { component: 'list', nav: true, dense: true, items: [
          { component: 'list-item-group', model: 'group', 'active-class': 'deep-purple--text text--accent-4', items: [
            { component: 'list-item', items: [{ component: 'list-item-title', itemtext: 'Foo' }] },
            { component: 'list-item', items: [{ component: 'list-item-title', itemtext: 'Bar' }] },
            { component: 'list-item', items: [{ component: 'list-item-title', itemtext: 'Fizz' }] },
            { component: 'list-item', items: [{ component: 'list-item-title', itemtext: 'Buzz' }] },
          ]}
        ]}
      ]},
      { component: 'card-text', itemtext: 'The navigation drawer will appear from the bottom on smaller size screens.' }
    ]}
  ]
}