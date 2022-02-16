export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '450',
      items: [
        { component: 'img', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', aspectRatio: '1.777777777777778'},
        { component: 'cardTitle', 
          items: [
            { component: 'text', class: 'display-1 mb-2', itemtext: 'Welcome Home...' },
            { component: 'text', class: 'title font-weight-regular grey--text', itemtext: 'Monday, 12:30 PM, Mostly Sunny' }
          ]
        },
        {
          component: 'cardTitle', class: 'px-1', items: [
            { component: 'avatar', size: '24', class: 'mr-1', items: [
              { component: 'img', src: 'https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png', contain: true }
            ]},
            { component: 'text', class: 'grey--text', itemtext: '81° / 62°'}
          ]
        },
        { component: 'divider'},
        {
          component: 'cardTitle', items: [
          { component: 'chip', class: 'mr-1', click: 'lights', items: [
            { component: 'icon', left: true, name: 'mdi-brightness-5' },
            { component: 'text', itemtext: 'Turn on Lights' }
          ] },
          {
            component: 'chip', class: 'mr-1', click: 'alarm', items: [
              { component: 'icon', left: true, name: 'mdi-alarm-check' },
              { component: 'text', itemtext: 'Set alarm' }
            ]
          },
          {
            component: 'chip', class: 'mr-1', click: 'blinds', items: [
              { component: 'icon', left: true, name: 'mdi-blinds' },
              { component: 'text', itemtext: 'Close blinds' }
            ]
          }
        ]}
      ] 
    }
  ]
}