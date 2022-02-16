export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '400', items: [
      { component: 'toolbar', flat: true, color: 'deep-purple accent-4', dark: true, items: [
        { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-close' }]}
      ], title: { itemtext: 'Filter results' } },
      { component: 'card-text', items: [
        { component: 'text', class: 'title mb-2', itemtext: 'Choose amenities' },
        { component: 'chip-group', model: 'amenities', column: true, multiple: true, items: [
          { component: 'chip', filter: true, outlined: true, itemtext: 'Elevator' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Washer / Dryer' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Fireplace' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Wheelchair access' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Dogs ok' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Cats ok' }
        ]}
      ]},
      { component: 'card-text', items: [
        { component: 'text', class: 'title mb-2', itemtext: 'Choose neighborhoods' },
        { component: 'chip-group', model: 'neighborhoods', column: true, multiple: true, items: [
          { component: 'chip', filter: true, outlined: true, itemtext: 'Snowy Rock Place' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Honeylane Circle' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Donna Drive' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Elaine Street' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Court Street' },
          { component: 'chip', filter: true, outlined: true, itemtext: 'Kennedy Park' }
        ]}
      ]}
    ]}
  ]
}