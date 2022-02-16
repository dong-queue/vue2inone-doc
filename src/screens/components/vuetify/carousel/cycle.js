export default {
  items: [
    { component: 'carousel', cycle: true, height: 400, 'hide-delimiter-background': true, 
      'show-arrows-on-hover': true, 
      itemsfor: 'slides',
      items: [
        { component: 'carouselItem', items: [
          {
            component: 'sheet', color: 'subItem.color', height: '100%', items: [
            { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
              { component: 'div', class: 'display-3', itemtext: { value: 'subItem.slide', func: (e) => String().concat(e, ' Slide' )}}
            ]}
          ]}
        ]}
      ]
    }
  ]
}