export default {
  data () {
    return {
      gridOptions: [],
      gridApi: null,
      columnApi: null,
      columnDefs: [],
      rowData: []
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.columnDefs = [
      {
        headerName: 'Col 1',
        colId: 'firstCol',
        field: 'height',
      },
      {
        headerName: 'Col 2',
        colId: 'firstCol',
        field: 'height',
      },
      {
        headerName: 'Col 3',
        field: 'height',
      },
      {
        headerName: 'Col 4',
        field: 'height',
      },
      {
        headerName: 'Col 5',
        valueGetter: 'data.width',
      },
      {
        headerName: 'Col 6',
        valueGetter: 'data.width',
      }
    ]
    this.rowData = this.createRowData()
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    // onGridReady(params) {
      // var cols = params.columnApi.getAllColumns()
      // cols.forEach(function (col) {
        // var colDef = col.getUserProvidedColDef()
        // console.log(
        //   colDef.headerName + ', Column ID = ' + col.getId(),
        //   JSON.stringify(colDef)
        // )
      // })
    // },
    createRowData() {
      var data = []
      for (var i = 0; i < 20; i++) {
        data.push({
          height: Math.floor(Math.random() * 100),
          width: Math.floor(Math.random() * 100),
          depth: Math.floor(Math.random() * 100),
        })
      }
      return data
    }
  }
}