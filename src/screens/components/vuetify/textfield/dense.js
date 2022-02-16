export default {
  items: [
    { component: 'form', items: [
      { component: 'row', itemsfor: 'items', items: [
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          {
            component: 'text-field', bind: 'subItem'
          }
        ]}
      ]}
    ]}
  ]
}