export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 400, items: [
      { component: 'card-title', items: [
        { component: 'text', class: 'display-1', itemtext: 'Toothbrush' },
        { component: 'spacer' },
        { component: 'text', class: 'title', itemtext: '$4.99' }
      ]},
      {
        component: 'card-text', itemtext: `Our company takes pride in making handmade brushes.
        Our toothbrushes are available in 4 different bristel types, from extra soft to hard.` },
      { component: 'divider', class: 'mx-4' },
      { component: 'card-text', items: [
        { component: 'text', class: 'subheading', itemtext: 'Select type' },
        { component: 'chip-group', model: 'selection', activeClass: 'deep-purple--text text--accent-4', mandatory: true, items: [
          { component: 'chip', itemtext: 'Extra Soft' },
          { component: 'chip', itemtext: 'Soft' },
          { component: 'chip', itemtext: 'Medium' },
          { component: 'chip', itemtext: 'Hard' },
        ]}
      ]},
      { component: 'card-actions', items: [
        { component: 'btn', block: true, class: 'white--text', color: 'deep-purple accent-4', itemtext: 'Add to Cart' }
      ]}
    ]}
  ]
}