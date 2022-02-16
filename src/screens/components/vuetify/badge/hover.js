export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'badge', value: 'isHover', color: 'deep-purple accent-4',
        content: 'content', left: true, 
        // transition: 'slide-x-transition',
        items: [
          {
            component: 'hover', model: 'isHover',
            items: [{ component: 'icon', color: 'grey lighten-1', size: 'lg', name: 'mdi-account' }]
          }
        ]
      }
    ]}
  ]
}