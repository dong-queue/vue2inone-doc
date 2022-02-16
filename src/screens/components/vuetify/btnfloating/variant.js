export default {
  
  items: [
    { component: 'row', items: [ 
      { component: 'col', cols: '12', sm: '6', offsetSm: '3', items: [
        {
          component: 'card', style: { width: '500px' },
          items: [
          { component: 'toolbar', color: 'light-blue', light: true, extended: true, 
            appBarNavIcon: true,
            title: { class: 'white--text', itemtext: 'My files' },
            items: [
              { component: 'spacer' },
              { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify'}]},
              { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-view-module' }]},
            ],
            slots: [
              { name: 'extension', items: [
                { component: 'btn', fab: true, color: 'cyan accent-2', bottom: true, left: true, absolute: true, 
                  evnts: [
                    { event: 'click', method: 'changeDialog', value: true }
                  ],
                  items: [
                    { component: 'icon', name: 'mdi-plus' }
                  ]
                }
              ]}
            ]
          },
          { component: 'list', twoLine: true, subheader: true, items: [
            { component: 'subheader', inset: true, class: 'text-center', itemtext: 'Folders' },
            { itemsfor: 'items', subItemName: 'item', items: [

              { component: 'listItem', link: true, items: [
                { component: 'listItemAvatar', items: [
                  { component: 'icon', class: 'item.iconClass', name: 'item.icon' }
                ]},
                {
                  component: 'listItemContent', style: { width: '350px' }, items: [
                  { component: 'listItemTitle', itemtext: 'item.title' },
                  { component: 'listItemSubtitle', itemtext: 'item.subtitle' }
                ]},
                { component: 'listItemAction', items: [
                  { component: 'btn', icon: true, items: [
                    { component: 'icon', color: 'grey lighten-1', name: 'mdi-information'}
                  ]}
                ]}
              ]}
            ]},
            { component: 'divider', inset: true },
            { component: 'subheader', inset: true, class: 'text-center', itemtext: 'Files' },
            { itemsfor: 'items2', subItemName: 'item', items: [
              { component: 'listItem', link: true, items: [
                { component: 'listItemAvatar', items: [
                  { component: 'icon', class: 'item.iconClass', name: 'item.icon' }
                ]},
                {
                  component: 'listItemContent', style: { width: '350px' }, items: [
                  { component: 'listItemTitle', itemtext: 'item.title' },
                  { component: 'listItemSubtitle', itemtext: 'item.subtitle' }
                ]},
                { component: 'listItemAction', items: [
                  { component: 'btn', icon: true, ripple: true, items: [
                    { component: 'icon', color: 'grey lighten-1', name: 'mdi-information'}
                  ]}
                ]}
              ]}
            ]}
          ]},
          { component: 'dialog', model: 'dialog', maxWidth: '500px', items: [
            { component: 'card', items: [
              { component: 'card-text', items: [
                { component: 'text-field', label: 'File name' },
                { component: 'text', class: 'grey--text', itemtext: `<small>* This doesn't actually save.</small>`}
              ]},
              { component: 'card-actions', items: [
                { component: 'spacer' },
                { component: 'btn', text: true, color: 'primary', evnts: [{event: 'click', method: 'changeDialog', value: false}],
                  itemtext: 'Submit'
                }
              ]}
            ]}
          ]} // dialog
        ]}
      ]}
      ]
    }
  ]
}