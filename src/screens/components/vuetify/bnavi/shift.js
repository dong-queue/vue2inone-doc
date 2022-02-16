export default {
  items: [
    {
      component: 'bnavi', 
      model: 'value',
      backgroundColor: 'color', dark: true, shift: true,
      inputValue: true,
      evnts: [{ event: 'change', method: 'change' } ],
      items: [
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Video' },
            { component: 'icon', name: 'mdi-television-play' },
          ]
        },
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Music' },
            { component: 'icon', name: 'mdi-music-note' }
          ]
        },
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Book' },
            { component: 'icon', name: 'mdi-book' }
          ]
        },
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Image' },
            { component: 'icon', name: 'mdi-image' }
          ]
        }
      ]
    }
  ]
}