export default {
  items: [
    { component: 'div', class: 'd-flex flex-column justify-space-between align-center', items: [
      { component: 'slider', model: 'width', class: 'align-self-stretch', min: 200, max: 500, step: 1},
      { component: 'img', 'aspect-ratio': 16 / 9, width: 'width', src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg' }
    ]}
  ]
}