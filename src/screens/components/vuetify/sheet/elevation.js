export default {
  items: [
    { component: 'container', items: [
      { component: 'row', justify: 'space-around', itemsfor: 'elevations', subItemName: 'elevation', items: [
        { component: 'col', cols: 12, md: 4, items: [
          { component: 'sheet', class: 'pa-12', color: 'grey lighten-3', items: [
            { component: 'sheet', elevation: 'elevation', class: 'mx-auto', height: 100, width: 100 }
          ]}
        ]}
      ]}
    ]}
  ]
}