export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, items: [
        { component: 'subhdr', class: 'pl-0', itemtext: 'Show thumb when using slider' },
        { component: 'sld', model: 'slider', 'thumb-label': true }
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'subhdr', class: 'pl-0', itemtext: 'Always show thumb label' },
        { component: 'sld', model: 'slider', 'thumb-label': 'always' }
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'subhdr', class: 'pl-0', itemtext: 'Custom thumb size' },
        { component: 'sld', model: 'slider', thumbSize: 24, 'thumb-label': true }
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'subhdr', class: 'pl-0', itemtext: 'Custom thumb label' },
        { component: 'sld', model: 'slider', thumbSize: 24, 'thumb-label': true,
          slots: [
            { name: 'thumb-label', type: 'data', slotDataName: 'slot', items: [
              { component: 'text', 
                itemtext: { 
                  value: '_self', func: ({ satisfactionEmojis, slot}) => satisfactionEmojis[Math.min(Math.floor(slot.value /10), 9)]
                }
              }
            ]}
          ]
        }
      ]}
    ]}
  ]
}