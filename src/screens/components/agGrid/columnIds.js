export default {
  items: [
    { component: 'container', items: [
      {
        component: 'agGrid', class: 'sm8', style: 'width :100%; height: 300px;', isSeq: false,
        gridOptions: 'gridOptions', columnDefs: 'columnDefs', rowData: 'rowData',
        evnts: [{event: 'grid-ready', method: 'onGridReady'}]
      }
    ]}
  ]
}