export default {
  items: [
    { component: 'footer', dark: true, padless: true, items: [
      { component: 'card', flat: true, tile: true, class: 'indigo lighten-1 white--text text-center', items: [
        { component: 'cardText', itemsfor: 'icons', subItemName: 'icon', items: [
          { component: 'btn', class: 'mx-4 white--text', icon: true, items: [{component: 'icon', size: '24px', name: 'icon.name'}] }
        ]},
        { component: 'cardText', class: 'white--text pt-0', itemtext: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
        { component: 'divider' },
        { component: 'cardText', class: 'white--text', itemtext: { func: () => String().concat(new Date().getFullYear(), '- Vuetify') }}
      ]}
    ]}
  ]
}