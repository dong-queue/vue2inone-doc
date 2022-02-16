export default {
  items: [
    {
      component: 'row', justify: 'space-around',
      items: [
        {
          component: 'avatar', class: 'text-center', color: 'indigo', size: '36', 
          items: [
              { component: 'text', class: 'white--text headline', itemtext: '36' }
            ]
          },
        {
          component: 'avatar', class: 'text-center', color: 'teal', size: '48',
          items: [
            { component: 'text', class: 'white--text headline', itemtext: '48' }
          ]
        },
        {
          component: 'avatar', class: 'text-center', color: 'orange', size: '62', 
          items: [
            { component: 'text', class: 'white--text headline', itemtext: '62' }
          ]
        }
      ]
    }
  ]
}