export default {
  items: [
    { component: 'container', class: 'pa-4 text-center', items: [
      { component: 'row', class: 'fill-height', align: 'center', justify: 'center', itemsfor: 'items',subItemName: 'item', items: [
        { component: 'col', cols: 12, md: 4, items: [
          { component: 'hover', slots: [
            { name: 'default', type: 'data', slotDataName: 'slot', items: [
              { component: 'card', 
                elevation: { value: 'slot.hover', func: e => e ? 12 : 2}, 
                style: { value: 'slot.hover', func: e => e ? '' : 'opacity: 0.6;'}, 
                items: [
                  { component: 'img', src: 'item.img', height: '225px', items: [
                    { component: 'card-title', class: 'title white--text', items: [
                      { component: 'row', class: 'fill-height flex-column', justify: 'space-between', items: [
                        { component: 'text', class: 'mt-4 subheading text-left', itemtext: {value: 'item.title', func: e => `<p>${e}</p>`} },
                        { component: 'div', items: [
                          { component: 'text', 
                            itemtext: { value: 'item', func: e => `
                              <p class="ma-0 body-1 font-weight-bold font-italic text-left">${e.text}</p>
                              <p class="caption font-weight-medium font-italic text-left">${e.subtext}</p>` } 
                          },
                        ]},
                        { component: 'div', class: 'align-self-center', itemsfor: 'icons', subItemName: 'icon', items: [
                          {
                            component: 'btn', style: { value: 'slot.hover', func: e => e ? 'color: rgba(255, 255, 255, 1) !important;' : ''  }, 
                            color: 'transparent', icon: true, items: [
                              { component: 'icon', color: 'transparent', name: 'icon',
                                style: { value: 'slot.hover', func: e => e ? 'color: rgba(255, 255, 255, 1) !important;' : '' }, 
                              }
                          ]}
                        ]}
                      ]}
                    ]}
                  ]}
                ]}
              ]
            }
          ]}
        ]}
      ]}
    ]}
  ]
}