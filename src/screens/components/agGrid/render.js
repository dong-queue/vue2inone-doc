export default {
  items: [
    { component: 'container', items: [
      {
        component: 'agGrid', class: 'sm8', style: 'width :100%; height: 300px;',
        evnts: [{event: 'gridReady', func: (event) => event.api.sizeColumnsToFit()}],
        columnDefs: [
          { headerName: 'Make', type: 'text', field: 'make' },
          { headerName: 'Model', type: 'text', field: 'model' },
          { headerName: 'Price', type: 'number', field: 'price' },
          { render: true, pinned: 'right', items: [
            { component: 'btn', small: true, icon: true, 
              evnts: [{ event: 'click', value: '_self', func: (item) => alert(JSON.stringify(item))}],
              items: [{
                component: 'icon', name: 'mdi-view-list', color: 'primary', small: true
              }]
            }
          ]}
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