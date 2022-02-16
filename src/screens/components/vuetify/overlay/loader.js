export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', color: 'deep-purple accent-4', class: 'white--text', evnts: [{event: 'click', method: 'changeOverlay'}], 
        itemtext: 'Launch Application', items: [{component: 'icon', right: true, name: 'mdi-open-in-new'}]
      },
      { component: 'overlay', value: 'overlay', items: [
        { component: 'progress-circular', indeterminate: true, size: 64}
      ]}
    ]}
  ]
}