export default {
  items: [
    { component: 'sheet', class: 'mx-auto', elevation: 9, maxWidth: 800, items: [
      { component: 'slide-group', model: 'model', class: 'pa-4', 'active-class': 'success', showArrows: true, 
        itemsfor: 15, items: [
          { component: 'slide-item', slots: [
            { name: 'default', type: 'data', slotDataName: 'props', items: [
              { component: 'card', color: {value: 'props.active', func: e => e ? undefined : 'grey lighten-1'}, 
                class: 'ma-4', height: 200, width: 100, 
                evnts: [{ event: 'click', value: 'props.toggle', func: e => e()}], items: [
                  { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
                    { component: 'scale-transition', items: [
                      { component: 'icon', if: [{ target: 'props.active', value: 'true' }], color: 'white', size: 48, name: 'mdi-close-circle-outline' }
                    ]}
                  ]}
                ]
              }
            ]}
          ]}
        ]
      }
    ]}
  ]
}