export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: makeRow() }
  ]
}

function makeRow () {
  let rows = [1, 2]
  let result = rows.map( n => {
    let cols = Array(n + 1).fill(1)
    return { component: 'row', 'no-gutters': true, class: n === 1 ? 'mb-6' : '', 
      items: cols.map( (col, k) => {
        return { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: `${k + 1} of ${n + 1}`}
          ]}
        ]}
      })
    }
  })
  return result
}