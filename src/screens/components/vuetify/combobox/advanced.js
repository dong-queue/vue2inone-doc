export default {
  items: [
    {
      component: 'combobox', model: 'model', filter: customFilter, 'hide-no-data': {value: 'search', func: (e) => !e},
      items: 'items', 'hide-selected': true, label: 'Search for an option', multiple: true, smallChips: true, solo: true,
      evnts: [{ event: 'update:search-input', method: 'changeSearch' }],
      slots: [
        { name: 'no-data', items: [
          { component: 'listItem', items: [
            { component: 'text', class: 'subheading', itemtext: 'Create' },
            { component: 'chip', color: {value: '_self', func: ({colors, nonce}) => `${colors[nonce - 1]} lighten-3`}, 
              label: true, small: true, itemtext: 'search'
            }
          ]}
        ]},
        { name: 'selection', type: 'data', slotDataName: 'slot', items: [
          { component: 'chip', if: [{target: 'slot.item', value: (e) => e === Object(e)}], attrs: 'slot.attrs',
            color: {value: 'slot.item', func: (item) => `${item.color} lighten-3`}, inputValue: 'slot.selected', label: true, small: true,
            items: [
              { component: 'text', class: 'pr-2', itemtext: 'slot.item.text' },
              { component: 'icon', small: true, name: 'close', evnts: [{ event: 'click', value: 'slot', func: ({parent, item}) => parent.selectItem(item)}] }
            ]
          }
        ]},
        { name: 'item', type: 'data', slotDataName: 'slot', items: [
          { component: 'row', items: [
            { component: 'text-field', if: [{target: '_self', value: ({editing, slot}) => editing === slot.item}], model: 'editing.text', 
              autofocus: true, flat: true, backgroundColor: 'transparent', hideDetails: true,
              solo: true, evnts: [{event: 'keyup.enter', method: 'edit', value: ['slot.index', 'slot.item']}]
            },
            {
              component: 'chip', if: [{ target: '_self', value: ({ editing, slot }) => editing === slot.item, ne: true }], 
              color: {value: 'slot.item', func: (item) => `${item.color} lighten-3`}, dark: true, 
              label: true, small: true, itemtext: 'slot.item.text'
            },
            { component: 'spacer' },
            {
              component: 'btn', icon: true, evnts: [{ event: 'click', method: 'clickEdit', value: 'slot'}],
              items: [{component: 'icon', name: {value: '_self', func: ({editing, slot}) => editing !== slot.item ? 'mdi-pencil' : 'mdi-check'}}]
            }
          ]}
        ]}
      ]
    }
  ]
}
function customFilter(item, queryText, itemText) {
  if (item.header) return false

  const hasValue = val => val != null ? val : ''

  const text = hasValue(itemText)
  const query = hasValue(queryText)

  return text.toString()
    .toLowerCase()
    .indexOf(query.toString().toLowerCase()) > -1
}