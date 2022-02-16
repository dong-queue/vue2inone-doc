export default {
  items: [
    { component: 'footer', padless: true, items: [
      { component: 'col', class: 'text-center', cols: 12, items: [
        { component: 'text', itemtext: { func: () => String().concat(new Date().getFullYear(), '- Vuetify') }}
      ]}
    ]}
  ]
}