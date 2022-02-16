export default {
  items: [
    { component: 'container', fluid: true, items: [
      { component: 'data-iterator', items: 'items', 'items-per-page': 'itemsPerPage', hideDetailFooter: true, 
        slots: [
          { name: 'header', items: [
            { component: 'toolbar', class: 'mb-2', color: 'indigo darken-5', dark :true, flat: true, title: {class: 'subheading', itemtext: 'this is a header'} }
          ]},
          { name: 'default', type: 'data', slotDataName: 'slot', items: [
            { component: 'row', itemsfor: 'slot.items', subItemName: 'item', items: [
              { component: 'col', cols: 12, md: 4, lg: 3, items: [
                { component: 'card', items: [
                  { component: 'card-title', class: 'subheading font-weight-bold', itemtext: 'item.name' },
                  { component: 'divider' },
                  { component: 'list', dense: true, items: [
                    { component: 'list-item', items: [
                      { component: 'list-item-content', itemtext: 'Caloires: ' },
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
          ]},
          { name: 'footer', items: [
            { component: 'toolbar', class: 'mt-2', color: 'indigo', dark: true, flat: true, title: {class: 'subheading', itemtext: 'This is foooter'} }
          ]}
        ]
      }
    ]}
  ]
}