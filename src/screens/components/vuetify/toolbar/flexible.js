export default {
  items: [
    { component: 'card', 
      flat: true,
      items: [
        { 
          component: 'toolbar', color: 'primary', dark: true, extended: true, flat: true, appBarNavIcon: true
        },
        {
          component: 'card', class: 'mx-auto', maxWidth: '700', style: 'margin-top: -64px',
          items: [
            { component: 'toolbar', flat: true, title: {class: 'grey--text', itemtext: 'Title' },
              items: [
                { component: 'spacer', color: 'grey' },
                { component: 'btn', icon: true, items: [{ component: 'icon', color: 'grey', name: 'mdi-magnify' }] },
                { component: 'btn', icon: true, items: [{ component: 'icon', color: 'grey', name: 'mdi-apps' }] },
                { component: 'btn', icon: true, items: [{ component: 'icon', color: 'grey', name: 'mdi-dots-vertical' }] }
              ]
            },
            { component: 'divider' },
            { component: 'cardText', style: 'height: 200px'}
          ]
        }
      ]
    }
  ]
}