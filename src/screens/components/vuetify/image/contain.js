export default {
  items: [
    { component: 'container', fluid: true, items: [
      { component: 'row', justify: 'space-around', items: [
        { component: 'col', cols: 5, items: [
          { component: 'div', class: 'title mb-1', itemtext: 'Default (cover)' },
          { component: 'div', class: 'subheading', itemtext: 'Matching' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 1.7 },
          { component: 'div', class: 'subheading pt-4', itemtext: 'Too high' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 2 },
          { component: 'div', class: 'subheading pt-4', itemtext: 'Too low' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 1.4 },
        ]},
        { component: 'col', cols: 5, items: [
          { component: 'div', class: 'title mb-1', itemtext: 'Contain' },
          { component: 'div', class: 'subheading', itemtext: 'Matching' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 1.7, contain: true },
          { component: 'div', class: 'subheading pt-4', itemtext: 'Too high' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 2, contain: true },
          { component: 'div', class: 'subheading pt-4', itemtext: 'Too low' },
          { component: 'img', src: 'https://picsum.photos/510/300?random', aspectRatio: 1.4, contain: true },
        ]},
      ]}
    ]}
  ]
}