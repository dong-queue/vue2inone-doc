export default {
  items: [
    { component: 'card', class: 'blue-grey darken-1', dark: true, loading: 'isUpdating',
      slots: [
        {
          name: 'progress',
          items: [
            { component: 'progressL', absolute: true, color: 'green lighten-3', height: 4, indeterminate: true }
          ]
        }
      ],
      items: [
        {
          component: 'img', height: 200, src: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
          items: [
            { component: 'row', items: [
              { component: 'col', class: 'text-right', cols: 12, items: [
                { component: 'menu', bottom: true, left: true, transition: 'slide-y-transition',
                  slots: [{ name: 'activator', type: 'data', items: [
                    { component: 'btn', icon: true, attrs: 'slotData.attrs', on: 'slotData.on', 
                      items: [{component: 'icon', name: 'mdi-dots-vertical'}]
                    }
                  ]}],
                  items: [
                    { component: 'list', items: [
                      { component: 'listItem', evnts: [{ event: 'click', method: 'startUpdate' }], 
                        items: [
                          { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-cog'}]},
                          { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: 'Update' }]}
                        ]
                      }
                    ]}
                  ]
                }
              ]}
            ]},
            { component: 'row', class: 'pa-4', align: 'center', justify: 'center', items: [
              { component: 'col', class: 'text-center', items: [
                { component: 'div', class: 'headline', itemtext: 'artist' },
                { component: 'text', class: 'grey--text text--lighten-1', itemtext: 'title' },
              ]}
            ]}
          ]
        },
        { component: 'form', items: [
          { component: 'row', items: [
            { component: 'col', cols: 12, md: 6, items: [
              {
                component: 'textfield', class: 'pt-1 px-1', model: 'artist', disabled: 'isUpdating', filled: true,
                color: 'blue-grey lighten-2', label: 'Name'
              }
            ]},
            { component: 'col', cols: 12, md: 6, items: [
              {
                component: 'textfield', class: 'pt-1 px-1', model: 'title', disabled: 'isUpdating', filled: true,
                color: 'blue-grey lighten-2', label: 'Title'
              }
            ]},
            { component: 'col', cols: 12, items: [
              { component: 'autocomplete', class: 'px-1', model: 'friends', disabled: 'isUpdating', items: 'people', filled: true,
                chips: true, color: 'blue-grey lighten-2', label: 'Select', itemText: 'name', itemValue: 'name',
                multiple: true,
                slots: [
                  { name: 'selection', type: 'data', slotDataName: 'data', items: [
                    { component: 'chip', inputValue: 'data.selected', close: true,
                      evnts: [
                        { event: 'click', method: 'select', value: 'data.item' },
                        { event: 'click:close', method: 'remove', value: 'data.item' },
                      ],
                      items: [
                        { component: 'avatar', left: true, items: [{ component: 'img', src: 'data.item.avatar' }] },
                        { component: 'text', itemtext: 'data.item.name' }
                      ]
                    }]
                  },
                  { name: 'item', type: 'data', slotDataName: 'data',
                    items: [
                      { component: 'listItemAvatar', items: [{ component: 'img', src: 'data.item.avatar' }]},
                      { component: 'listItemContent', items: [
                          { component: 'listItemTitle', html: 'data.item.name' },
                          { component: 'listItemSubtitle', html: 'data.item.group' }
                        ]
                      }
                    ]
                  }
                ]
              }]
            }]
          }]
        },
        { component: 'divider' },
        { component: 'cardActions',
          items: [
            { component: 'switch', model: 'autoUpdate', disabled: 'isUpdating',  color: 'green lighten-2', hideDetails: true, label: 'Auto Update' },
            { component: 'spacer' },
            {
              component: 'btn', disabled: 'autoUpdate', loading: 'isUpdating', color: 'blue-grey darken-3', depressed: true,
              evnts: [{ event: 'click', method: 'startUpdate' }],
              items: [
                { component: 'icon', class: 'mx-0 px-0', color: 'white', name: 'mdi-update' },
                { component: 'text', color: 'white', itemtext: 'Update Now' }
              ]
            }
          ]
        }
      ]
    }
  ]
}