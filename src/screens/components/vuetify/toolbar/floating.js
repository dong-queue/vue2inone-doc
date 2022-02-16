export default {
  items: [
    {
      component: 'img', class: 'pa-1', src: 'https://cdn.vuetifyjs.com/images/toolbar/map.jpg', height: '300px',
      items: [
        {
          component: 'toolbar',
          dense: true,
          floating: true,
          items: [
            { component: 'textfield', model: 'bar.text2', hideDetails: true, singleLine: true, prependIcon: 'mdi-magnify' },
            {
              component: 'btn', icon: true, color: 'grey',
              evnts: [
                { event: 'click', method: 'click' }
              ],
              items: [
                { component: 'icon', name: 'mdi-crosshairs-gps' }
              ]
            },
            {
              component: 'btn', icon: true, color: 'grey',
              evnts: [
                { event: 'click', method: 'click' }
              ],
              items: [
                { component: 'icon', name: 'mdi-dots-vertical' }
              ]
            }
          ]
        }
      ]
    }
  ]
}