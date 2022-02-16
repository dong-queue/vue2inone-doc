export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', class: 'ma-2', outlined: true, color: 'indigo', itemtext: 'Outlined Button'
      },
      {
        component: 'btn', class: 'ma-2', outlined: true, fab: true, color: 'teal',
        items: [
          { component: 'icon', name: 'mdi-format-list-bulleted-square' }
        ]
      },
      {
        component: 'btn', class: 'ma-2', outlined: true, size: 'lg', fab: true, color: 'indigo',
        items: [
          { component: 'icon', name: 'mdi-pencil' }
        ]
      }
    ]}
  ]
}