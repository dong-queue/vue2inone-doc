export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'img', src: 'https://bad.src/not/valid', 
        'lazy-src': 'https://picsum.photos/id/11/100/60', maxWidth: 500, maxHeight: 300,
        slots: [
          { name: 'placeholder', items: [
            { component: 'row', class: 'fill-height ma-0', align: 'center', justify: 'center', items: [
              { component: 'progress-circular', indeterminate: true, color: 'grey lighten-5' }
            ]}
          ]}
        ]
      }
    ]}
  ]
}