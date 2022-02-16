export default {
  items: [
    { component: 'card', class: 'mx-auto', 'max-width': 344, items: [
      { component: 'toolbar', color: 'deep-purple accent-4', dark: true, prominent: true, 
        appBarNavIcon: true, title: { itemtext: 'My Files' }, items: [
          { component: 'btn', absolute: true, bottom: true, color: 'white', fab: true, left: true, light: true, 
            items: [{ component: 'icon', name: 'mdi-plus' }]
          },
          { component: 'spacer' },
          { component: 'btn', icon: true, items: [
            { component: 'icon', name: 'mdi-magnify' }
          ]},
          { component: 'btn', icon: true, items: [
            { component: 'icon', name: 'mdi-dots-vertical' }
          ]}
        ]
      },
      { component: 'container', style: 'height: 400px;', items: [
        { component: 'row', class: 'fill-height', alignContent: 'center', justify: 'center', items: [
          { component: 'col', class: 'subtitle-1 text-center', cols: 12, items: [
            { component: 'text', itemtext: 'Getting your files' }
          ]},
          { component: 'col', cols: 6, items: [
            { component: 'progress-linear', color: 'deep-purple accent-4', indeterminate: true, rounded: true, height: 6 }
          ]}
        ]}
      ]}
    ]}
  ]
}