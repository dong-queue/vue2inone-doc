export default {
  items: [
    { component: 'carousel', cycle: false, height: 400, hideDelimiterBackground: true, showArrowsOnHover: true, 
      slots: [
        { name: 'prev', type: 'data', items: [
          { component: 'btn', attrs: 'slotData.attrs', on: 'slotData.on', color: 'success', itemtext: 'Previous slide' }
        ]},
        { name: 'next', type: 'data', items: [
          { component: 'btn', attrs: 'slotData.attrs', on: 'slotData.on', color: 'info', itemtext: 'Next slide' }
        ]}
      ],
      itemsfor: 'slides',
      items: [
        { component: 'carouselItem', items: [
          { component: 'sheet', color: 'subItem.color', height: '100%', items: [
            { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
              { component: 'text', class: 'display-3', itemtext: { value: 'subItem.slide', func: (e) => String().concat(e, ' Slide')} }
            ]}
          ]}
        ]}
      ]
    }
  ]
}