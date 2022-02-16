export default {
  items: [
    { component: 'container', items: [
      {
        component: 'agGrid', class: 'sm8', style: 'width :100%; height: 300px;',
        rowSelection: 'multiple',
        columnDefs: 'columnDefs',
        rowData: 'rowData'
      }
    ]}
  ]
}