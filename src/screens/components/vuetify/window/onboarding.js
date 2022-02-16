export default {
  items: [
    { component: 'card', color: 'black', dark: true, flat: true, tile: true, items: [
      { component: 'window', model: 'onboarding', itemsfor: 'length', items: [
        {
          component: 'window-item', eager: true, items: [
          { component: 'card', color: 'transparent', height: 200, items: [
            { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
              { component: 'card-text', itemtext: 'Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.' }
            ]}
          ]}
        ]}
      ]},
      { component: 'card-actions', class: 'justify-space-between', items: [
        { component: 'btn', text: true, evnts: [{event: 'click', method: 'prev'}], items: [{component: 'icon', name: 'mdi-chevron-left'}] },
        { component: 'item-group', model: 'onboarding', class: 'text-center', mandatory: true, itemsfor: 'length', items: [
          { component: 'item', slots: [{name: 'default', type: 'data', slotDataName: 'props', items: [
            { component: 'btn', inputValue: 'props.active', icon: true, evnts: [{event: 'click', value: 'props.toggle', func: e => e()}],
              items: [{component: 'icon', name: 'mdi-record'}]
            }
          ]}]}
        ]},
        { component: 'btn', text: true, evnts: [{event: 'click', method: 'next'}], items: [{component: 'icon', name: 'mdi-chevron-right'}]}
      ]}
    ]}
  ]
}