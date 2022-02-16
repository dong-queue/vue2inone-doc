export default {
  items: [
    {
      component: 'toolbar',
      color: 'bar.color',
      dark: true,
      appBarNavIcon: { if: [{ target: 'bar.isAppbar', value: true }] },
      items: [
        {
          component: 'btn', if: [{ target: 'bar.isAppbar', value: 'false' }], icon: true, 
          items: [
            { component: 'icon', name: 'mdi-close' }
          ], 
          evnts: [
            { event: 'click', method: 'initSelection' }
          ]
        },
        { component: 'text', class: 'my-0', itemtext: 'bar.toolbarTitle' },
        { component: 'spacer' },
        {
          component: 'btn', if: [{ target: 'bar.isAppbar', value: 'false' }], icon: true, 
          items: [
            { component: 'icon', name: 'mdi-export-variant' }
          ]
        },
        {
          component: 'btn', if: [{ target: 'bar.isAppbar', value: 'false' }], icon: true, 
          items: [
            { component: 'icon', name: 'mdi-delete' }
          ] 
        },
        {
          component: 'btn', icon: true,
          items: [
            { component: 'icon', name: 'mdi-dots-vertical' }
          ]
        }
      ]
    },
    {
      component: 'select', model: 'bar.selection', items: 'bar.selectItems', label: 'Select an option', multiple: true
    }
  ]
}