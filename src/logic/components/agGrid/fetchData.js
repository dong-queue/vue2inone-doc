export default {
  data () {
    return {
      items: []
    }
  },
  beforeMount () {
    fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
      .then(result => result.json())
      .then(rowData => this.items = rowData)
  }
}