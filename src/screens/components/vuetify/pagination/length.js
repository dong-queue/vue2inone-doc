export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'container', items: [
        { component: 'row', justify: 'center', items: [
          { component: 'col', cols: 8, items: [
            { component: 'container', class: 'max-width', items: [
              { component: 'pagination', model: 'page', class: 'my-4', length: 15 }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}