export default {
  items: [
    { component: 'container', fluid: true, items: [
      { component: 'switch', model: 'singleExpand', label: 'Expand Sngle Item' },
      { component: 'data-iterator', items: 'desserts', itemKey: 'name', itemsPerPage: 4, singleExpand: 'singleExpand',
        hideDefaultFooter: true, slots: [
          { name: 'default', type: 'data', items: [
            { component: 'row', itemsfor: 'slotData.items', subItemName: 'item', items: [
              { component: 'col', cols: 12, sm: 6, md: 4, lg: 3, items: [
                { component: 'card', items: [
                  { component: 'card-title', items: [{component: 'text', html: {value: 'item.name', func: e => `<h4>${e}</h4>`}}] },
                  {
                    component: 'switch', 
                    label: { value: '_self', func: function ({slotData, item}) { return slotData.isExpanded(item) ? 'Expanded' : 'Closed' } }, 
                    class: 'pl-4 mt-0',
                    evnts: [{
                      event: 'change', value: '_self', func: function ({slotData, item}, v) { 
                        return slotData.expand(item, v) 
                    } }]
                  },
                  { component: 'divider' },
                  {
                    component: 'list', if: [{
                      target: '_self', value: function ({ slotData, item }) { return slotData.isExpanded(item) }
                    }], 
                    dense: true, items: [
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Calories: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.calories' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Fat: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.fat' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Carbs: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.carbs' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Protein: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.protein' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Sodium: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.sodium' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Calcium: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.calcium' }
                    ]},
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Iron: ' },
                      { component: 'list-item-content', class: 'align-end', itemtext: 'item.iron' }
                    ]}
                  ]}
                ]}
              ]}
            ]}
          ] }
        ]
      }
    ]}
  ]
}