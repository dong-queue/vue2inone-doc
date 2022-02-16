export default {
  items: [
    {
      component: 'toolbar', color: 'orange accent-1', 
      appBarNavIcon: { class: 'hidden-sm-and-up' }, title: { class: 'title mr-6 hidden-sm-and-down', itemtext: 'Cryptocurrency' },
      items: [
        { component: 'autocomplete', model: 'model', items: 'items', loading: 'isLoading', 
          chips: true, clearable: true, hideDetails: true, hideSelected: true, itemText: 'name', itemValue: 'symbol', label: 'Search for a coin...', solo: true,
          evnts: [{ event: 'update:search-input', method: 'changeSearch' }],
          slots: [
            { name: 'no-data', items: [
              { component: 'listItem', items: [
                { component: 'listItemTitle',itemtext: 'Search for your favorite <strong>Cryptocurrency</strong>' }
              ]}
            ]},
            { name: 'selection', type: 'data', items: [
              { component: 'chip', inputValue: 'slotData.selected', color: 'blue-grey', class: 'white--text', items: [
                { component: 'icon', left: true, name: 'mdi-bitcoin'},
                { component: 'text', itemtext: 'slotData.item.name'}
              ]}
            ]},
            { name: 'item', type: 'data', items: [
              { component: 'listItem', items: [
                { component: 'listItemAvatar', color: 'indigo', class: 'headline font-weight-light white--text', 
                  itemtext: { value: 'slotData.item.name', func: (e) => e.charAt(0)} },
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'slotData.item.name' },
                  { component: 'listItemSubtitle', itemtext: 'slotData.item.symbol' }
                ]},
                { component: 'listItemAction', items: [{component: 'icon', name: 'mdi-bitcoin' }]}
              ]}
            ]}
          ]
        }
      ],
      slots: [
        { name: 'extension', items: [
          { component: 'tabs', model: 'tab', hideSlider: 'isModel', color: 'blue-grey', 'slider-color': 'blue-grey', items: [
            { component: 'tab', disabled: 'isModel', itemtext: 'News' },
            { component: 'tab', disabled: 'isModel', itemtext: 'Trading' },
            { component: 'tab', disabled: 'isModel', itemtext: 'Blog' },
          ]}
        ]}
      ]
    }
  ]
}