export default {
  items: [
    { component: 'card',  elevation: 24, maxWidth: 444, class: 'mx-auto', items: [
      {
        component: 'carousel', continuous: false, cycle: 'cycle', 'show-arrows': false, 
        'hide-delimiter-background': true, 'delimiter-icon': 'mdi-minus', height: 300, 
        itemsfor: 'slides',
        items: [
          { component: 'carouselItem', items: [
            {
              component: 'sheet', color: 'subItem.color', height: '100%', tile: true,
              items: [
                { component: 'row', class: 'fill-height', align: 'center', justify: 'center',
                  items: [
                    { component: 'text', class: 'display-3', itemtext: { value: 'subItem.name', func: (e) => String().concat(e, ' Slide') } }
                  ]
                }
              ]
            }
          ]}
        ]
      },
      { component: 'list', twoLine: true, items: [
        { component: 'listItem', items: [
          { component: 'listItemAvatar', items: [
            { component: 'img', src: 'https://cdn.vuetifyjs.com/images/john.png' }
          ]},
          { component: 'listItemContent', items: [
            { component: 'listItemTitle', itemtext: 'John Leider' },
            { component: 'listItemSubtitle', itemtext: 'Author' }
          ]},
          { component: 'listItemAction', items: [
            { component: 'switch', model: 'cycle', label: 'Cycle Slides', inset: true }
          ]}
        ]}
      ]}
    ]}
  ]
}