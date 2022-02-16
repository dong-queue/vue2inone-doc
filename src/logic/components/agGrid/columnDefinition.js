export default {
  data () {
    return {
      gridOptions: [],
      gridApi: null,
      columnApi: null,
      columnDefs: [],
      defaultColDef: null,
      defaultColGroupDef: null,
      columnTypes: null,
      rowData: []
    }
  },
  beforeMount () {
    this.gridOptions = {}
    this.columnDefs = [
      { headerName: 'Athlete', field: 'athlete' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Age', field: 'age', type: 'numberColumn' },
      { headerName: 'Year', field: 'year', type: 'numberColumn' },
      { headerName: 'Date', field: 'date', type: ['dateColumn', 'nonEditableColumn'], width: 220 },
      { headerName: 'Medals', groupId: 'medalsGroup',
        children: [
          { headerName: 'Gold', field: 'gold', type: 'medalColumn' },
          { headerName: 'Silver', field: 'silver', type: 'medalColumn' },
          { headerName: 'Bronze', field: 'bronze', type: 'medalColumn' },
          { headerName: 'Total', field: 'total', type: 'medalColumn', columnGroupShow: 'closed' }
        ]
      }
    ]
    this.defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    }
    this.defaultColGroupDef = { marryChildren: true }
    this.columnTypes = {
      numberColumn: {
        width: 130,
        filter: 'agNumberColumnFilter',
      },
      medalColumn: {
        width: 100,
        columnGroupShow: 'open',
        filter: false,
      },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: (filterLocalDateAtMidnight, cellValue) => {
            var dateParts = cellValue.split('/')
            var day = Number(dateParts[0])
            var month = Number(dateParts[1]) - 1
            var year = Number(dateParts[2])
            var cellDate = new Date(year, month, day)
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onGridReady ( ) {
      const updateData = (data) => {
        this.rowData = data
      }

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data))
    }
  }
}