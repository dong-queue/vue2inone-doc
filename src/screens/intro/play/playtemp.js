export default {
  items: [
    { component: 'container', items: [
      { component: 'toolbar', flat: true, color: 'primary', dark: true, title: {itemtext: 'Sample'}, items: [
        { component: 'spacer' },
        { component: 'btn', outlined: true, color: 'white', itemtext: 'Button',
          evnts: [{ event: 'click', func: () => { alert('click toolbar button!') } }]
        }
      ]},
      { component: 'row', items: [
        { component: 'col', cols: 8, items: [
          { component: 'card', elevation: 0, items: [
            { component: 'agGrid', class: 'sm8', style: 'width :100%; height: 300px;', rowSelection: 'single',
              evnts: [
                { event: 'gridReady', func: (event) => event.api.sizeColumnsToFit() },
                { event: 'rowClicked', method: 'setItem' }
              ],
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
              rowData: 'items'
            }
          ]}
        ]}, // col
        { component: 'col', cols: 4, items: [
          { component: 'text', class: 'caption primary--text', itemtext: '* Vuetify ' },
          { component: 'card', class: 'pa-2', items: [
            { component: 'text-field', model: 'make', label: 'Manufacturer' },
            { component: 'text-field', model: 'model', label: 'Model name' },
            { component: 'currency', model: 'price', label: 'Price ($)' },
          ]},
          { component: 'text', class: 'caption primary--text', itemtext: '* Element ' },
          { component: 'card', class: 'pa-2', items: [
            { component: 'text', class: 'caption', itemtext: 'Manufacturer' },
            { component: 'input', framework: 'el', model: 'make' },
            { component: 'text', class: 'caption', itemtext: 'Model name' },
            { component: 'input', framework: 'el', model: 'model' },
            { component: 'text', class: 'caption', itemtext: 'Price ($)' },
            { component: 'currency', framework: 'el', model: 'price' }
          ]}
        ]} // col
      ]} // row
    ]}
  ]
}