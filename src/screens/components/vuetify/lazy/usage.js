export default {
  items: [
    { component: 'responsive', class: 'overflow-y-auto', maxHeight: 400, items: [
      { component: 'div', class: 'pa-6 text-center', itemtext: 'Scroll down'},
      { component: 'responsive', height: '200vh', class: 'text-center pa-2', items: [
        { component: 'responsive', minHeight: '50vh' },
        { component: 'div', class: 'text-center body-2 mb-12', itemtext: 'The card appear below: ' },
        { component: 'lazy', model: 'isActive', options: { threshold: .5}, 'min-height': 200, transition: 'fade-transition', items: [
          { component: 'card', class: 'mx-auto', maxWidth: 336, items: [
            { component: 'card-title', itemtext: 'Card title' },
            {
              component: 'card-text', itemtext: `Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.

              In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero.`}
          ]}
        ] }
      ]}
    ]}
  ]
}