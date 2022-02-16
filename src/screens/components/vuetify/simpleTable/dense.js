export default {
  items: [
    {
      component: 'simple-table', height: '300px', dense: true,
      head: {
        rows: [
          {
            cols: [
              { component: 'text', class: 'text-left', itemtext: 'Name' },
              { component: 'text', class: 'text-left', itemtext: 'Calories' }
            ]
          }
        ]
      },
      body: {
        itemsfor: 'desserts', subItemName: 'item', rows: [
          {
            cols: [
              { component: 'text', itemtext: 'item.name' },
              { component: 'text', itemtext: 'item.calories' }
            ]
          }
        ]
      }
    }
  ]
}