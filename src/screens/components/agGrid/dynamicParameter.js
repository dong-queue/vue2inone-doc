export default {
  items: [
    { component: 'container', items: [
      {
        component: 'agGrid', style: 'width :100%; height: 300px;',
        evnts: [
          {event: 'gridReady', method: 'onGridReady'}, 
          {event: 'cell-value-changed', method: 'onCellValueChanged'},
          {event: 'cell-focused', method: 'onCellFocused'}
        ],
        gridOptions: 'gridOptions', columnDefs: 'columnDefs', rowData: 'rowData',
        defaultColDef: 'defaultColDef'
      }
    ]}
  ]
}