export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', color: 'indigo', dark: true, evnts: [{ event: 'click', method: 'show' }], itemtext: 'Menu as Popover' },
      { component: 'menu', model: 'menu', 'close-on-content-click': false, 'nudge-width': 200, offsetY: true, activator: 'element', items: [
        { component: 'card', items: [
          {
            component: 'list', items: [
            { component: 'list-item', items: [
              { component: 'list-item-avatar', items: [
                { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.jpg', alt: 'John' }
              ]},
              { component: 'list-item-content', items: [
                { component: 'list-item-title', itemtext: 'John Leider' },
                { component: 'list-item-subtitle', itemtext: 'Founder of Vuetify' }
              ]},
              { component: 'list-item-action', items: [
                { component: 'btn', class: {value: 'fav', func: e => e ? 'red--text' : ''}, icon: true, items:[
                  { component: 'icon', name: 'mdi-heart' }
                ], evnts: [
                  { event: 'click', method: 'changeFav' }
                ] }
              ]}
            ]}
          ]},
          { component: 'divider' },
          { component: 'list', items: [
            { component: 'list-item', items: [
              { component: 'list-item-action', items: [
                { component: 'switch', model: 'message', color: 'purple' }
              ]},
              { component: 'list-item-title', itemtext: 'Enable messages' }
            ]},
            { component: 'list-item', items: [
              { component: 'list-item-action', items: [
                { component: 'switch', model: 'hints', color: 'purple' }
              ]},
              { component: 'list-item-title', itemtext: 'Enable hints' }
            ]}
          ]},
          { component: 'caard-actions', items: [
            { component: 'spacer' },
            { component: 'btn', text: true, evnts: [{event: 'click', method: 'closeMenu'}], itemtext: 'Cancel' },
            { component: 'btn', text: true, color: 'primary', evnts: [{ event: 'click', method: 'closeMenu' }], itemtext: 'Save' },
          ]}
        ]}
      ]}
    ]}
  ]
}