export default {
  items: [
    { component: 'container', fluid: true, items: [
      {
        component: 'row', justify: 'center', items: [
          { component: 'subheader', itemtext: 'Today' },
          {
            component: 'expanels', popout: true, itemsfor: 'messages', subItemName: 'message',
            items: [
              {
                component: 'expansion-panel', hideActions: true, items: [
                  {
                    component: 'expansion-panel-header', items: [
                      {
                        component: 'row', align: 'center', class: 'spacer', noGutters: true, items: [
                          {
                            component: 'col', cols: 4, sm: 2, md: 1, items: [
                              {
                                component: 'avatar', size: '36px', items: [
                                  { component: 'img', if: [{ target: 'message.avatar' }], alt: 'Avatar', src: 'message.avatar' },
                                  { component: 'icon', if: [{ target: 'message.avatar', ne: true }], color: 'message.color', name: 'message.icon' }
                                ]
                              }
                            ]
                          },
                          {
                            component: 'col', class: 'hidden-xs-only', sm: 5, md: 3, items: [
                              { component: 'text', itemtext: {value: 'message.name', func: e => `<strong>${e}</strong>`} },
                              { component: 'text', if: [{target: 'message.total'}], itemtext: { value: 'message.total', func: (e) => e ? String().concat(' (', e, ')') : '' } }
                            ]
                          },
                          {
                            component: 'col', class: 'text-no-wrap', cols: 5, sm: 3, items: [
                              {
                                component: 'chip', if: [{ target: 'message.new' }], color: { value: 'message.color', func: e => `${e} lighten-4` },
                                class: 'ml-0 mr-2 black--text', label: true, small: true,
                                itemtext: { value: 'message.new', func: (e) => `${e} new` }
                              },
                              { component: 'text', itemtext: 'message.title' }
                            ]
                          },
                          {
                            component: 'col', if: [{ target: 'message.excerpt' }], class: 'grey--text text-truncate hidden-sm-and-down',
                            items: [{ component: 'text', itemtext: { value: 'excerpt', func: (e) => e ? String().concat('-', e) : '' } }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    component: 'expansion-panel-content', items: [
                      { component: 'divider' },
                      { component: 'card-text', itemtext: 'lorem' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]}
  ]
}