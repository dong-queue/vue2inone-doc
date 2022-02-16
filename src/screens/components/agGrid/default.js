export default {
  items: [
    { component: 'container', items: [
      {
        component: 'agGrid', class: 'sm8', style: 'width :100%; height: 300px;',
        columnDefs: [
          { headerName: 'Make', type: 'text', field: 'make' },
          { headerName: 'Model', type: 'text', field: 'model' },
          { headerName: 'Price', type: 'number', field: 'price' }
        ],
        rowData: [
          { make: "Toyota", model: "Celica", price: 35000 },
          { make: "Ford", model: "Mondeo", price: 32000 },
          { make: "Porsche", model: "Boxter", price: 72000 }
        ]
      }
    ]}
  ]
}