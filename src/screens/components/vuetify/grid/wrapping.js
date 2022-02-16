export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', noGutters: true, items: [
        { component: 'col', cols: 9, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-9'}] }
        ]},
        { component: 'col', cols: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: '.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.' }
          ]}
        ]},
        { component: 'col', cols: 6, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: '.col-6<br>Subsequent columns continue along the new line.' }
          ]}
        ]},
      ]}
    ]}
  ]
}