export default {
  items: [
    { component: 'row', 
      itemsfor: 'bars', subItemName: 'bar',
      items: [
        { component: 'col', cols: 12, sm: 12, md: 6, class: 'my-4 pa-3', 
          items: [
            { component: 'card', color: 'grey lighten-4', flat: true, height: '200px',
              items: [
                { component: 'toolbar', color: 'bar.class', dark: {value: 'bar', func: bar => bar.dark}, appBarNavIcon: true, title: { itemtext: 'Title' },
                  items: [
                    { component: 'spacer' },
                    { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }]},
                    { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-heart' }] },
                    { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}