export default {
  items: [
    { component: 'card', maxWidth: 400, class: 'mx-auto', items: [
      { component: 'container', class: 'pa-1', items: [
        { component: 'item-group', model: 'selected', multiple: true, items: [
          { component: 'row', itemsfor: 'items', subItemName: 'item', items: [
            { component: 'col', cols: 12, md: 6, items: [
              { component: 'item', slots: [
                { name: 'default', type: 'data', slotDataName: 'slot', items: [
                  { component: 'img', src: { value: 'item.src', func: e => `https://cdn.vuetifyjs.com/images/${e}`},
                    height: 150, class: 'text-right pa-2', evnts: [{ event: 'click', value: 'slot.toggle', func: e => e() }],
                    items: [
                      { component: 'btn', icon: true, dark: true, items: [
                        { component: 'icon', name: {value: 'slot.active', func: e => e ? 'mdi-heart' : 'mdi-heart-outline'} }
                      ]}
                    ]
                  }
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}