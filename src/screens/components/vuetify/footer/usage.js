export default {
  items: [
    { component: 'card', height: '400px', items: [
      {
        component: 'footer', absolute: 'attrs.absolute', fixed: 'attrs.fixed', padless: 'padless', items: [
        { component: 'card', flat: true, tile: true, width: '100%', class: 'red lighten-1 text-center', items: [
          { component: 'cardText', itemsfor: 'icons', subItemName: 'item', items: [
            {component: 'btn', class: 'mx-4', icon: true, items: [{ component: 'icon', size: '24px', name: 'item.name' }]}
          ]},
          { component: 'divider' },
          { component: 'cardText', class: 'white--text', itemtext: { func: () => String().concat(new Date().getFullYear(), '- Vuetify') }}
        ] }
      ]},
      { component: 'row', align: 'center', justify: 'center', class: 'ma-12', items: [
        { component: 'col', cols: 12, md: 8, items: [
          { component: 'select', model: 'variant', items: 'items', clearable: true, label: 'Variant' },
          { component: 'checkbox', model: 'padless', hideDetails: true, label: 'Padless' }
        ]}
      ]}
    ]}
  ]
}