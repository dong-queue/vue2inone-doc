export default {
  items: [
    {
      component: 'row', class: 'child-flex',
      items: [
        {
          component: 'toolbar',
          items: [
            { component: 'btn', class: 'hidden-xs-only', icon: true, click: 'click', 
              items: [
                { component: 'icon', name: 'mdi-arrow-left' }
              ]  
            },
            { component: 'text', itemtext: 'Title', class: 'body-1' },
            { component: 'spacer' },
            { component: 'btn', class: 'hidden-xs-only', icon: true, click: 'click', 
              items: [
                { component: 'icon', name: 'mdi-magnify' }
              ]
            }
          ]
        },
        {
          component: 'toolbar',
          style: 'flex-basis: 20%',
          dark: true,
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, click: 'click',
              items: [
                { component: 'icon', name: 'mdi-reply' }
              ]
            },
            { component: 'btn', icon: true, click: 'click',
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