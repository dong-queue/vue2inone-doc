export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'rating', model: 'rating', slots: [
        { 
          name: 'item', type: 'data', slotDataName: 'props',
          items: [
            {
              component: 'icon', large: true, 
              color: { value: '_self', func: ({colors, props}) => props.isFilled ? colors[props.index] : 'grey lighten-1' },  
              evnts: [{ event: 'click', value: 'props', func: e => e.click() }],
              name: { value: 'props', func: e => e.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline'} 
            }
          ]
        }
      ]}
    ]}
  ]
}