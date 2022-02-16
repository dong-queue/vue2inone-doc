export default {
  items: [
    {
      component: 'row',  align: 'center', justify: 'center',
      items: [
      { component: 'badge', bordered: true, color: 'error', icon: 'mdi-lock', overlap: true,
        items: [
          {component: 'btn', class: 'white--text', color: 'error', depressed: true, itemtext: 'Lock Account'}
        ]
      },
      { component: 'text', class: 'mx-3' },
      {
        component: 'badge', class: 'text-center', bordered: true, bottom: true, color: 'deep-purple accent-4', dot: true,
        offsetX: '10', offsetY: '10',
        items: [
          { component: 'avatar', size: '40',
            items: [
              { component: 'img', src: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }
            ]
          }
        ]
      },
      { component: 'text', class: 'mx-3' },
      {
        component: 'badge', class: 'text-center', avatar: true, bordered: true, overlap: true, 
        slots: [
          {
            name: 'badge',
            items: [
              { component: 'avatar',
                items: [
                  { component: 'img', src: 'https://cdn.vuetifyjs.com/images/logos/v.png' }
                ]
              }
            ]
          }
        ],
        items: [
          { component: 'avatar', size: '40', 
            items: [
              { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.png' }
            ]
          }
        ]
      }
    ]}
  ]
}