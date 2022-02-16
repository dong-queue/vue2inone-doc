export default {
  data () {
    return {
      columnDefs: [],
      rowData: []
    }
  },
  beforeMount () {
    this.columnDefs = [
      { headerName: 'Make', field: 'make', checkboxSelection: true },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData)
  }
}