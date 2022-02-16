export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '500', items: [
      { component: 'toolbar', flat: true, color: 'transparent', appBarNavIcon: true,
        title: { itemtext: 'Photo Info' },
        items: [
          { component: 'spacer' },
          { component: 'btn', icon: true, 
            evnts: [{ event: 'click', method: 'focusSearch' }],
            items: [{ component: 'icon', name: 'mdi-magnify' }]
          }
        ]
      },
      {
        class: 'ma-3 transparent', items: [
          {
            component: 'row', align: 'center', justify: 'start',
            itemsfor: 'selections', subItemName: 'selection',
            items: [
              {
                component: 'chip', class: 'shrink ml-1 mb-2', close: true, disabled: 'loading', evnts: [{ event: 'click:close', method: 'removeSelected', value: '_self' }],
                items: [
                  { component: 'icon', left: true, name: 'selection.icon' },
                  { component: 'text', itemtext: 'selection.text' }
                ]
              }
            ]
          },
          {
            component: 'textfield', if: [{ target: 'allSelected', value: 'false' }], cols: 12, ref: 'search', model: 'search', fullWidth: true,
            hideDetails: true, label: 'Search', singleLine: true, class: 'mx-2',
          },
        ]
      },
      
      { component: 'divider', if: [{ target: 'allSelected', value: 'false' }] },
      { component: 'list', itemsfor: 'categories', subItemName: 'item',
        items: [
          {
            component: 'list-item', if: [{ target: 'includes', ne: true}], diabeld: 'loading',
            evnts: [{ event: 'click', method: 'pushSelected', value: 'item' }],
            items: [
              { component: 'listItemAvatar', items: [{ component: 'icon', diabeld: 'loading', name: 'item.icon'}]},
              { component: 'listItemTitle', itemtext: 'item.text'}
            ]
          }
        ]
      },
      { component: 'divider' },
      { component: 'cardActions', items: [
        { component: 'spacer' },
        { component: 'btn', disabled: 'disableNext', loading: 'loading', color: 'purple', text: true, itemtext: 'Next',
          evnts: [{ event: 'click', method: 'next' }]
        }
      ]}
    ]}
  ] 
}