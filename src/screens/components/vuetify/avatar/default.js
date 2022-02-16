export default {
  items: [
    {
      component: 'row',
      justify: 'space-around',
      items: [
        {
          component: 'avatar', class: 'text-center', color: 'indigo',
          items: [
            { component: 'icon', dark: true, name: 'mdi-account-circle' }
          ]
        },
        {
          component: 'avatar', class: 'text-center', 
          items: [
            { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.jpg', alt: 'John' }
          ]
        },
        {
          component: 'avatar', class: 'text-center', color: 'red',
          items: [
            { component: 'text', class: 'ma-0 white--text headline', itemtext: 'CJ' }
          ]
        }
      ]
    }
  ]
}