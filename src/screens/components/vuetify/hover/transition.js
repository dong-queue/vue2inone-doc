export default {
  items: [
    { component: 'hover', slots: [
      { name: 'default', type: 'data', slotDataName: 'slot', items: [
        { component: 'card', class: 'mx-auto', color: 'grey lighten-4', maxWidth: '600', items: [
          {
            component: 'img', aspectRatio: 16/9, src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', items: [
            { component: 'expand-transition', items: [
              {
                component: 'div', if: [{ target: 'slot.hover', value: true }], 
                class: 'd-flex transition-fast-in-fast-out orange darken-2 display-3 white--text', 
                style: 'height: 100%; align-items: center; bottom: 0; justify-content: center; opacity: 5; position: absolute; width: 100%', 
                itemtext: '$14.99'
              }
            ]}
          ]},
          { component: 'card-text', class: 'pt-6', style: 'position: relative;', items: [
            { component: 'btn', absolute: true, color: 'orange', class: 'white--text', fab: true,
              large: true, right: true, top: true, items: [
                { component: 'icon', name: 'mdi-cart'}
              ]
            },
            { component: 'div', class: 'font-weight-light grey--text title mb-2', itemtext: 'For the perfect meal' },
            { component: 'text', itemtext: `<h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>` },
            { component: 'text', itemtext: `<div class="font-weight-light title mb-2">
              Our Vintage kitchen utensils delight any chef.<br>
              Made of bamboo by hand</div>`
            }
          ]}
        ]}
      ]}
    ]}
  ]
}