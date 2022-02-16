export default {
  items: [
    { component: 'row', justify: 'space-around', items: [
      { component: 'icon', evnts: [{event: 'click', method: 'changeModel', value: '-'}], name: 'mdi-minus'},
      { component: 'text', itemtext: 'model' },
      { component: 'icon', evnts: [{ event: 'click', method: 'changeModel', value: '+' }], name: 'mdi-plus' },
    ]},
    { component: 'carousel', model: 'model', 
      itemsfor: 'colors',
      items: [
      { component: 'carouselItem', items: [
        {
          component: 'sheet', color: 'subItem.color', height: '100%', tile: true, items: [
          { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
            { component: 'div', class: 'display-3', itemtext: { value: 'subItem.index', func: (e) => String().concat('Slide ', Number(e) + 1 )}}
          ]}
        ]}
      ]}
    ]}
  ]
}