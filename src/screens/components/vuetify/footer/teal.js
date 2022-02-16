export default {
  items: [
    { component: 'footer', dark: true, padless: true, items: [
      { component: 'card', class: 'flex', flat: true, tile: true, items: [
        { component: 'cardTitle', class: 'teal', items: [
          { component: 'text', class: 'subheading', itemtext: '<strong>Get connected with us on social networks!</strong>' },
          { component: 'spacer' },
          { component: 'div', itemsfor: 'icons', subItemName: 'item', items: [
            { component: 'btn', class: 'mx-4', dark: true, icon: true, items: [{ component: 'icon', size: '24px', name: 'item.name' }] }
          ]}
        ]},
        { component: 'cardText', class: 'py-2 white--text text-center', itemtext: { func: () => String().concat(new Date().getFullYear(), '- Vuetify') } }
      ]}
    ]}
  ]
}