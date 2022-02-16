export default {
  items: [
    { component: 'row', justify: 'center',
      items: [
      { component: 'chip', class: 'ma-2', color: 'success', outlined: true, items: [
        { component: 'icon', left: true, name: 'mdi-server-plus' },
        { component: 'text', itemtext: 'Server Status' }
      ]},
      {
        component: 'chip', class: 'ma-2', color: 'primary', outlined: true, pill: true, items: [
          { component: 'text', itemtext: 'User Account' },
          { component: 'icon', right: true, name: 'mdi-account-outline' },
        ]
      },
      {
        component: 'chip', class: 'ma-2', color: 'deep-purple accent-4', outlined: true, items: [
          { component: 'icon', left: true, name: 'mdi-wrench' },
          { component: 'text', itemtext: 'Update Settings' }
        ]
      },
      {
        component: 'chip', class: 'ma-2', color: 'indigo darken-3', outlined: true, items: [
          { component: 'icon', left: true, name: 'mdi-fire' },
          { component: 'text', itemtext: 'New Posts Available' }
        ]
      }
    ]}
  ]
}