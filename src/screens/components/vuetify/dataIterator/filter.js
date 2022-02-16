export default {
  items: [
    { component: 'container', fluid: true, items: [
      { component: 'data-iterator', 
        items: 'items', 'items-per-page': 'itemsPerPage', page: 'page', search: 'search', sortBy: {value: 'sortBy', func: e => e.toLowerCase()},
        sortDesc: 'sortDesc', 'hide-default-footer': true,
        slots: [
          { name: 'header', items: [
            { component: 'toolbar', dark: true, color: 'blue darken-3', class: 'mb-1', items: [
              { component: 'text-field', model: 'search', clearable: true, flat: true, soloInverted: true, 
                'hide-details': true, 'prepend-inner-icon': 'mdi-magnify', label: 'Search'
              },
              { component: 'spacer', class: 'hidden-sm-and-down' },
              { component: 'select', class: 'hidden-sm-and-down', model: 'sortBy', flat: true, soloInverted: true, 
                items: 'keys', hideDetails: true, 'prepend-inner-icon': 'mdi-magnify', label: 'Sort by' 
              },
              { component: 'spacer', class: 'hidden-sm-and-down' },
              { component: 'btn-toggle', class: 'hidden-sm-and-down', model: 'sortDesc', mandatory: true, items: [
                { component: 'btn', large: true, depressed: true, color: 'blue', value: false, items: [{component: 'icon', name: 'mdi-arrow-up'}] },
                { component: 'btn', large: true, depressed: true, color: 'blue', value: true, items: [{component: 'icon', name: 'mdi-arrow-down'}] }
              ]}
            ]}
          ]},
          { name: 'default', type: 'data', slotDataName: 'props', items: [
            { component: 'row', itemsfor: 'props.items', subItemName: 'item', items: [
              { component: 'col', cols: 12, sm: 6, md: 4, lg: 3, items: [
                { component: 'card', items: [
                  { component: 'card-title', class: 'subheading font-weight-bold', itemtext: 'item.name' },
                  { component: 'divider' },
                  { component: 'list', dense: true, itemsfor: 'filteredKeys', subItemName: 'key', items: [
                    { component: 'list-item', items: [
                      { component: 'list-item-content', class: { value: '_self', func: ({sortBy, key}) => sortBy === key ? 'blue--text' : '' }, 
                        itemtext: { value: 'key', func: e => `${e}:` } 
                      },
                      {
                        component: 'list-item-content', class: { value: '_self', func: ({sortBy, key}) => sortBy === key ? 'blue--text align-end' : 'align-end' },
                        itemtext: { value: '_self', func: function ({item, key}) { return item[key.toLowerCase()]}  }
                      }
                    ]}
                  ]}
                ]}
              ]}
            ]}
          ]},
          { name: 'footer', items: [
            { component: 'row', class: 'mt-2', align: 'center', justify: 'center', items: [
              { component: 'text', class: 'grey--text', itemtext: 'Items per page' },
              { component: 'menu', offsetY: true, 
                slots: [
                  { name: 'activator', type: 'data', slotDataName: 'data', items: [
                    { component: 'btn', dark: true, text: true, color: 'primary', class: 'ml-2', attrs: 'data.attrs', on: 'data.on',
                      itemtext: 'itemsPerPage', items: [{ component: 'icon', name: 'mdi-chevron-down' }]
                    }
                  ]}
                ],
                items: [
                  { component: 'list', itemsfor: 'itemsPerPageArray', subItemName: 'number', items: [
                    { component: 'list-item', evnts: [{event: 'click', value: 'number', method: 'updateItemsPerPage'}], items: [
                      { component: 'list-item-title', itemtext: 'number' }
                    ]}
                  ]}
                ]
              },
              { component: 'spacer' },
              { component: 'text', class: 'mr-4 grey--text', itemtext: {value: '_self', func: ({numberOfPages, page}) => `Page ${page} of ${numberOfPages}`}},
              { component: 'btn', fab: true, dark: true, color: 'blue darken-3', class: 'mr-1', evnts: [{event: 'click', method: 'formerPage'}], items: [
                { component: 'icon', name: 'mdi-chevron-left' }
              ]},
              { component: 'btn', fab: true, dark: true, color: 'blue darken-3', class: 'ml-1', evnts: [{event: 'click', method: 'nextPage'}], items: [
                { component: 'icon', name: 'mdi-chevron-right' }
              ]}
            ]}
          ]}
        ]
      }
    ]}
  ]
}