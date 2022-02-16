export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 6, sm: 4, items: [
        { component: 'img', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', gradient: 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)' }
      ]},
      { component: 'col', cols: 6, sm: 4, items: [
        { component: 'img', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', items: [
          { component: 'div', class: 'fill-height bottom-gradient'}
        ]}
      ]},
      { component: 'col', cols: 6, sm: 4, items: [
        { component: 'img', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', items: [
          { component: 'div', class: 'fill-height repeating-gradient' }
        ]}
      ]}
    ]}
  ]
}