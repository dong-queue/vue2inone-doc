export default {
  items: [
    { component: 'hover', slots: [
      { name: 'default', type: 'data', slotDataName: 'slot', items: [
        { component: 'card', class: 'mx-auto', maxWidth: 344, items: [
          { component: 'img', src: 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg' },
          { component: 'card-text', items: [
            { component: 'div', class: 'title primary--text', itemtext: 'Magento Forests' },
            { component: 'text', itemtext: 'Travel to the best outdoor experience on planet Earth. A vacation you will never forget!' }
          ]},
          { component: 'card-title', items: [
            { component: 'rating', value: 4, dense: true, color: 'orange', 'background-color': 'orange', hover: true, class: 'mr-2' },
            { component: 'text', class: 'primary--text subtitle-2', itemtext: '64 Revies' }
          ]},
          { component: 'fade-transition', items: [
            { component: 'overlay', if: [{target: 'slot.hover', value: 'true' }], absolute: true, color: '#036358', items: [
              { component: 'btn', itemtext: 'See more info' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}