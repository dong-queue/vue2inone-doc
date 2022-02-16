export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', class: "mx-2", dark: true, size: 'sm', fab: true, color: 'primary',
        items: [
          { component: 'icon', name: 'mdi-minus' }
        ],
        evnts: [
          { event: 'click', method: 'click' }
        ]
      },
      {
        component: 'btn', class: "mx-2", dark: true, size: 'sm', fab: true, color: 'pink',
        items: [
          { component: 'icon', name: 'mdi-heart' }
        ]
      },
      {
        component: 'btn', class: "mx-2", dark: true, fab: true, color: 'indigo',
        items: [
          { component: 'icon', name: 'mdi-plus' }
        ]
      },
      {
        component: 'btn', class: "mx-2", dark: true, fab: true, color: 'teal',
        items: [
          { component: 'icon', name: 'mdi-format-list-bulleted-square' }
        ]
      },
      {
        component: 'btn', class: "mx-2", dark: true, size: 'lg', fab: true, color: 'cyan',
        items: [
          { component: 'icon', name: 'mdi-pencil' }
        ]
      },
      {
        component: 'btn', class: "mx-2", dark: true, size: 'lg', fab: true, color: 'purple',
        items: [
          { component: 'icon', name: 'mdi-android' }
        ]
      },
    ]}
  ]
}