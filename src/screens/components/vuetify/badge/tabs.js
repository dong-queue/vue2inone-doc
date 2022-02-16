export default {
  items: [
    { component: 'toolbar', items: [
      { component: 'tabs', dark: true, backgroundColor: 'primary', grow: true, items: [
        { component: 'tab', items: [
          { component: 'badge', color: 'pink', dot: true, items: [{component: 'text', itemtext: 'Item One'}] }
        ]},
        { component: 'tab', items: [
          { component: 'badge', color: 'green', content: '6', items: [{ component: 'text', itemtext: 'Item Two' }] }
        ]},
        { component: 'tab', items: [
          { component: 'badge', color: 'deep-purple accent-4', icon: 'mdi-vuetify', items: [{ component: 'text', itemtext: 'Item Three' }] }
        ]}
      ]}
    ]}
  ]
}