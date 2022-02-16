export default {
  items: [
    {
      component: 'toolbar',
      dark: true,
      prominent: true, 
      src: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
      appBarNavIcon: {
        color: 'white', 
        evnts: [{ event: 'click', method: 'click' }] 
      },
      title: { itemtext: 'Vuetify' },
      items: [
        { component: 'spacer' },
        {
          component: 'btn', xs: 1, textJustify: 'right', color: 'white', icon: true, 
          evnts: [
            { event: 'click', method: 'click' }
          ],
          items: [
            { component: 'icon', name: 'mdi-export' }
          ]
        }
      ]
    }
  ]
}