export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, offsetSm: 3, items: [
        { component: 'card', items: [
          { component: 'toolbar', color: 'white', flat: true, items: [
            { component: 'btn', icon: true, light: true, items: [{component: 'icon', color: 'grey darken-2', name: 'mdi-arrow-left'}] },
            { component: 'text', class: 'grey--text text--darken-4', itemtext: 'Albums' },
            { component: 'spacer' },
            { component: 'btn', icon: true, light: true, items: [
              { component: 'icon', color: 'grey darken-2', name: 'mdi-magnfy' }
            ]}
          ]},
          { component: 'subheader', itemtext: 'May' },
          {
            component: 'container', fluid: true, items: [
            { component: 'row', itemsfor: 6, items: [
              { component: 'col', cols: 4, items: [
                { component: 'img', src: { value: 'subItem', func: e => `https://randomuser.me/api/portraits/men/${e + 20}.jpg`},
                  alt: 'lorem', class: 'image', height: '100%', width: '100%'
                }
              ]}
            ]}
          ]},
          { component: 'subheader', itemtext: 'June' },
          { component: 'container', fluid: true, items: [
            { component: 'row', itemsfor: 6, items: [
              { component: 'col', cols: 4, items: [
                { component: 'img', src: { value: 'subItem', func: e => `https://randomuser.me/api/portraits/women/${e + 5}.jpg`},
                  alt: 'lorem', class: 'image', height: '100%', width: '100%'
                }
              ]}
            ]}
          ]},
          { component: 'footer', class: 'mt-12' }
        ]}
      ]}
    ]}
  ]
}