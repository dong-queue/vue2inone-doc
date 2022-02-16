export default {
  items: [
    { component: 'card', maxWidth: '400', class: 'mx-auto',
      items: [
        { component: 'row', class: 'px-6 py-3', align: 'center', items: [
          { component: 'text', class: 'mr-4', itemtext: 'To' },
          { component: 'chip', pill: true, evnts: [{event: 'click', method: 'showMenu'}], items: [
            { component: 'avatar', items: [
              { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.png'},
            ]},
            { component: 'text', itemtext: 'John Leider' }
          ]},
          { component: 'menu', model: 'isShowMenu', bottom: true, right: true, 
            transition: 'scale-transition', origin: 'top left', activator: 'element',
            items: [
              { component: 'card', width: 300, items: [
                { component: 'list', dark: true, items: [
                  { component: 'listItem', items: [
                    { component: 'listItemAvatar', items: [
                      { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.png' }
                    ]},
                    { component: 'listItemContent', items: [
                      { component: 'listItemTitle', itemtext: 'John Leider' },
                      { component: 'listItemSubtitle', itemtext: 'john@vuetifyjs.com' }
                    ]},
                    { component: 'listItemAction', items: [
                      { component: 'btn', icon: true, evnts: [{event: 'click', method: 'closeMenu'}],
                        items: [{ component: 'icon', name: 'mdi-close-circle' }]
                      }
                    ]}
                  ]}
                ]},
                { component: 'list', items: [
                  { component: 'listItem', items: [
                    { component: 'listItemAction', items: [
                      { component: 'icon', name: 'mdi-briefcase' }
                    ]},
                    { component: 'listItemSubtitle', itemtext: 'john@gmail.com' }
                  ]}
                ]}
              ]}
            ] 
          }
        ]},
        
        { component: 'divider' },
        { component: 'textfield', fullWidth: true, value: 'Re: Vacation Request', label: 'Subject', singleLine: true },
        { component: 'textarea', fullWidth: true, singleLine: true, label: 'Message' }
      ]
    }
  ]
}