export default {
  items: [
    { component: 'card', class: 'mx-auto elevation-20', color: 'purple', dark: true, style: 'max-width: 400px;', items: [
      { component: 'row', justify: 'space-between', items: [
        { component: 'col', cols: 8, items: [
          { component: 'card-title', items: [
            { component: 'div', items: [
              { component: 'div', class: 'headline', itemtext: 'Halycon Days' },
              { component: 'div', itemtext: 'Ellie Goulding' },
              { component: 'div', itemtext: '(2013)' }
            ]}
          ]}
        ]},
        { component: 'img', class: 'shrink ma-2', contain: true, height: '125px',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png', style: 'flex-basis: 125px'
        }
      ]},
      { component: 'divider', dark: true },
      { component: 'card-actions', class: 'pa-4', items: [
        { component: 'text', itemtext: 'Rate this album' },
        { component: 'spacer' },
        { component: 'text', class: 'grey--text text--lighten-2 caption mr-2', itemtext: 'rating' },
        { component: 'rating', model: 'rating', backgroundColor: 'white', color: 'yellow accent-4', dense: true,
          halfIncrements: true, hover: true, size: 18
        }
      ]}
    ]}
  ]
}